import os
import json
import hashlib
import base64
import math
from pathlib import Path
from datetime import datetime

# --- CONFIGURATION ---
THEME = {
    "primary": "#05583B",
    "accent": "#17B255",
    "danger": "#DC3545",
    "bg": "#F8FAF9",
    "card": "#FFFFFF"
}
CHUNK_SIZE_LIMIT = 500 * 1024  # 500KB Limit
TEXT_EXTS = {'.js', '.html', '.css', '.json', '.txt', '.md', '.webmanifest', '.sh', '.mjs', '.py', '.ts', '.tsx'}

def get_dir_size(path):
    return sum(f.stat().st_size for f in Path(path).rglob('*') if f.is_file())

def compute_sha256(file_path):
    sha = hashlib.sha256()
    try:
        with open(file_path, "rb") as f:
            for chunk in iter(lambda: f.read(4096), b""): sha.update(chunk)
        return sha.hexdigest()
    except: return "HASH_ERR"

class UltimaAuditor:
    def __init__(self):
        self.root = Path(os.getcwd())
        self.project_name = self.root.name.upper()
        
        # Clean folder identifier (max 12 characters to keep names concise)
        cleaned_name = "".join(c for c in self.root.name.lower() if c.isalnum() or c in ("_", "-"))
        self.folder_id = cleaned_name[:12] if cleaned_name else "root"
        
        self.timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
        self.display_date = datetime.now().strftime('%d %b %Y, %H:%M:%S')
        
        # Folder names incorporate the folder_id
        self.run_folder = self.root / f"aud_{self.folder_id}_{self.timestamp}"
        self.ignore = {".git", ".env", "node_modules", "__pycache__", ".DS_Store"}
        
        self.manifest = []
        self.folder_stats = {}
        self.full_data = []

    def scan(self):
        print(f"--- INITIALIZING ULTIMA AUDIT: {self.project_name} ---")
        self.run_folder.mkdir(parents=True, exist_ok=True)
        
        for path in self.root.rglob("*"):
            # Exclude the newly generated run folder and ignored paths
            if any(p in self.ignore or p.startswith('.') for p in path.parts): continue
            if self.run_folder.name in path.parts: continue
            
            if path.is_dir():
                self.folder_stats[path.as_posix()] = {
                    "name": path.name,
                    "file_count": len([x for x in path.iterdir() if x.is_file()]),
                    "subfolder_count": len([x for x in path.iterdir() if x.is_dir()]),
                    "size_kb": get_dir_size(path) / 1024
                }
            
            elif path.is_file():
                is_bin = path.suffix.lower() not in TEXT_EXTS
                is_bak = path.suffix.lower() == '.bak'
                stat = path.stat()
                f_info = {
                    "path": path.relative_to(self.root).as_posix(),
                    "name": path.name,
                    "size": stat.st_size,
                    "modified": datetime.fromtimestamp(stat.st_mtime).isoformat(),
                    "sha256": compute_sha256(path),
                    "binary": is_bin
                }
                
                # Append to metadata manifest (includes .bak files)
                self.manifest.append(f_info)

                # Append to content data only if the file is NOT a .bak file
                if not is_bak:
                    content_obj = f_info.copy()
                    try:
                        if is_bin:
                            with open(path, "rb") as f:
                                content_obj["content_base64"] = base64.b64encode(f.read()).decode('utf-8')
                        else:
                            with open(path, "r", encoding="utf-8") as f:
                                content_obj["content"] = f.read()
                    except Exception as e:
                        content_obj["error"] = str(e)
                    self.full_data.append(content_obj)
                
                print(f" [+] Scanned: {f_info['path']}")

    def save_deliverables(self):
        # 1. Summary & Metadata File
        summary = {
            "project": self.project_name,
            "timestamp": self.timestamp,
            "directory_structure": self.folder_stats,
            "file_manifest": self.manifest
        }
        summary_filename = f"{self.folder_id}_sum.json"
        with open(self.run_folder / summary_filename, 'w') as f:
            json.dump(summary, f, indent=2)

        # 2. State & Volume Export (excludes .bak contents)
        full_json_str = json.dumps(self.full_data)
        if len(full_json_str) > CHUNK_SIZE_LIMIT:
            split_dir = self.run_folder / f"{self.folder_id}_vols"
            split_dir.mkdir(exist_ok=True)
            num_parts = math.ceil(len(full_json_str) / CHUNK_SIZE_LIMIT)
            
            items_per_part = math.ceil(len(self.full_data) / num_parts)
            for i in range(num_parts):
                part_data = self.full_data[i*items_per_part : (i+1)*items_per_part]
                volume_filename = f"{self.folder_id}_vol_{i+1}.json"
                with open(split_dir / volume_filename, 'w') as f:
                    json.dump(part_data, f, indent=2)
            print(f" [!] Footprint > 500KB. Created {num_parts} Digest Volumes in {split_dir.name}.")
        
        state_filename = f"{self.folder_id}_state.json"
        with open(self.run_folder / state_filename, 'w') as f:
            json.dump(self.full_data, f, indent=2)

    def generate_report(self):
        tree = self._get_tree(self.root)
        html_content = self._build_html(tree)
        report_filename = f"{self.folder_id}_rpt.html"
        with open(self.run_folder / report_filename, 'w', encoding='utf-8') as f:
            f.write(html_content)

    def _get_tree(self, root, prefix=""):
        tree = ""
        paths = sorted([p for p in root.iterdir() if not any(i in p.parts for i in self.ignore) and not p.name.startswith('.')],
                       key=lambda p: (not p.is_dir(), p.name.lower()))
        for i, path in enumerate(paths):
            connector = "\u2514\u2500 " if i == len(paths) - 1 else "\u251c\u2500 "
            tree += f"{prefix}{connector}{path.name}\n"
            if path.is_dir():
                tree += self._get_tree(path, prefix + ("    " if i == len(paths)-1 else "\u2502   "))
        return tree

    def _build_html(self, tree):
        manifest_rows = "".join([f"""
            <tr class="item-row" data-type="{'bin' if f['binary'] else 'txt'}">
                <td><code>{f['path']}</code></td>
                <td>{f['size']/1024:.1f} KB</td>
                <td><span class="badge {'badge-bin' if f['binary'] else 'badge-txt'}">{'Binary' if f['binary'] else 'Text'}</span></td>
                <td class="mono" style="font-size:10px">{f['sha256'][:16]}...</td>
            </tr>""" for f in self.manifest])

        return f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{self.project_name} | Audit Report</title>
    <style>
        :root {{ --p: {THEME['primary']}; --s: {THEME['accent']}; --bg: {THEME['bg']}; --sur: {THEME['card']}; }}
        body {{ font-family: 'Inter', system-ui, sans-serif; background: var(--bg); margin: 0; display: flex; height: 100vh; overflow: hidden; }}
        aside {{ width: 260px; background: var(--p); color: white; display: flex; flex-direction: column; padding: 20px; }}
        nav {{ flex: 1; margin-top: 40px; }}
        nav a {{ color: rgba(255,255,255,0.7); text-decoration: none; display: block; padding: 12px; border-radius: 8px; margin-bottom: 5px; font-weight: 600; font-size: 14px; }}
        nav a:hover {{ background: rgba(255,255,255,0.1); color: white; }}
        main {{ flex: 1; overflow-y: auto; padding: 40px; }}
        .hdr {{ display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 40px; border-bottom: 2px solid #E2E8F0; padding-bottom: 20px; }}
        .card {{ background: var(--sur); border-radius: 16px; padding: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.04); border: 1px solid #E2E8F0; margin-bottom: 30px; }}
        .grid {{ display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; }}
        .stat {{ padding: 20px; background: #F1F5F9; border-radius: 12px; text-align: center; }}
        .stat-val {{ font-size: 32px; font-weight: 800; color: var(--p); display: block; }}
        .stat-lbl {{ font-size: 10px; text-transform: uppercase; letter-spacing: 1px; color: #64748B; font-weight: 700; }}
        pre {{ background: #0F172A; color: #94A3B8; padding: 20px; border-radius: 12px; font-size: 13px; line-height: 1.5; overflow: auto; }}
        table {{ width: 100%; border-collapse: collapse; }}
        th {{ text-align: left; padding: 12px; font-size: 11px; text-transform: uppercase; color: #64748B; border-bottom: 2px solid #F1F5F9; }}
        td {{ padding: 12px; border-bottom: 1px solid #F1F5F9; font-size: 13px; }}
        .badge {{ padding: 4px 8px; border-radius: 6px; font-size: 10px; font-weight: 700; }}
        .badge-txt {{ background: #DCFCE7; color: #166534; }}
        .badge-bin {{ background: #FEF3C7; color: #92400E; }}
        .mono {{ font-family: 'JetBrains Mono', monospace; }}
        @media (max-width: 768px) {{ body {{ flex-direction: column; }} aside {{ width: 100%; height: auto; }} }}
    </style>
</head>
<body>
    <aside>
        <h2 style="margin:0; font-size: 20px; letter-spacing: -1px;">ULTIMA AUDIT</h2>
        <p style="font-size: 10px; opacity: 0.6; font-weight: 700;">{self.project_name}</p>
        <nav>
            <a href="#overview">Executive Overview</a>
            <a href="#tree">Architecture Tree</a>
            <a href="#manifest">File Manifest</a>
            <a href="#folders">Folder Analysis</a>
        </nav>
        <div style="font-size: 10px; opacity: 0.5;">Generated: {self.display_date}</div>
    </aside>
    <main>
        <section id="overview">
            <div class="hdr">
                <div>
                    <h1 style="margin:0; font-size: 32px; letter-spacing: -1px;">System Integrity Report</h1>
                    <p style="margin:5px 0 0; color: #64748B;">Audit Run Hash: {self.timestamp}</p>
                </div>
                <div class="badge badge-txt" style="font-size: 12px; padding: 8px 16px;">V4.2 COMPLIANT</div>
            </div>
            <div class="grid">
                <div class="stat"><span class="stat-lbl">Total Files</span><span class="stat-val">{len(self.manifest)}</span></div>
                <div class="stat"><span class="stat-lbl">Directories</span><span class="stat-val">{len(self.folder_stats)}</span></div>
                <div class="stat"><span class="stat-lbl">Binary Assets</span><span class="stat-val">{len([f for f in self.manifest if f['binary']])}</span></div>
            </div>
        </section>

        <section id="tree" style="margin-top:50px;">
            <h3 class="stat-lbl" style="margin-bottom:15px;">Project Scaffolding Tree</h3>
            <div class="card" style="background:#0F172A;"><pre>{tree}</pre></div>
        </section>

        <section id="manifest" style="margin-top:50px;">
            <h3 class="stat-lbl" style="margin-bottom:15px;">Security Manifest</h3>
            <div class="card">
                <table>
                    <thead><tr><th>File Path</th><th>Size</th><th>Type</th><th>Fingerprint</th></tr></thead>
                    <tbody>{manifest_rows}</tbody>
                </table>
            </div>
        </section>
    </main>
</body>
</html>"""

if __name__ == "__main__":
    auditor = UltimaAuditor()
    auditor.scan()
    auditor.save_deliverables()
    auditor.generate_report()
    print(f"\nAUDIT COMPLETE. Folder: {auditor.run_folder.name}")