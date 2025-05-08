Great — here’s a comprehensive bash script to dump **everything you’ve touched today**, including:

* ✅ Node, npm, and nvm versions
* ✅ Globally and locally installed npm packages
* ✅ Your current `package.json` and `package-lock.json` snapshots
* ✅ The Vuetify versions and related plugins
* ✅ Git status + latest commits for both your project and submodule

---

## 🧠 What It Does

This script will create a timestamped folder with:

* All key version info (`node`, `npm`, `nvm`)
* Current local deps (`npm ls`)
* Package file snapshots
* Git commit and branch info
* Optional lockfile hash

---

## ✅ Save As: `ja_vue_debug_dump.sh`

```bash
#!/bin/bash

# === Set output dir ===
STAMP=$(date +%Y-%m-%d_%H-%M-%S)
OUTDIR="debug_dump_$STAMP"
mkdir "$OUTDIR"

echo "🔍 Dumping environment info to $OUTDIR..."

# === Versions ===
echo "Node version:" > "$OUTDIR/versions.txt"
node -v >> "$OUTDIR/versions.txt"
echo -e "\nNPM version:" >> "$OUTDIR/versions.txt"
npm -v >> "$OUTDIR/versions.txt"
echo -e "\nNVM version:" >> "$OUTDIR/versions.txt"
nvm --version >> "$OUTDIR/versions.txt"

# === Global npm packages ===
npm ls -g --depth=0 > "$OUTDIR/npm_global_list.txt" 2>/dev/null

# === Local project packages ===
npm ls --depth=1 > "$OUTDIR/npm_local_list.txt" 2>/dev/null

# === Save package.json and lock ===
cp package.json "$OUTDIR/package.json.snapshot"
cp package-lock.json "$OUTDIR/package-lock.json.snapshot" 2>/dev/null || echo "⚠️ No package-lock.json found"

# === Vue & Vuetify version check ===
echo "Vue & Vuetify versions:" > "$OUTDIR/vue_versions.txt"
npm list vue >> "$OUTDIR/vue_versions.txt" 2>&1
npm list vuetify >> "$OUTDIR/vue_versions.txt" 2>&1
npm list webpack-plugin-vuetify >> "$OUTDIR/vue_versions.txt" 2>&1

# === Git info ===
git status > "$OUTDIR/git_status.txt"
git log --oneline -n 5 > "$OUTDIR/git_log.txt"
git remote -v > "$OUTDIR/git_remotes.txt"

# === Submodule (if exists) ===
if [ -d "./.git/modules/my-new-vue-project" ]; then
  echo "Submodule is initialized." > "$OUTDIR/submodule_info.txt"
  (cd my-new-vue-project && git branch --show-current >> "../$OUTDIR/submodule_info.txt")
  (cd my-new-vue-project && git log --oneline -n 3 >> "../$OUTDIR/submodule_info.txt")
else
  echo "⚠️ No submodule found or initialized." > "$OUTDIR/submodule_info.txt"
fi

echo "✅ Dump complete: $OUTDIR"
```

---

## 📦 How to Use

1. Save it as `ja_vue_debug_dump.sh`
2. Make it executable:

   ```bash
   chmod +x ja_vue_debug_dump.sh
   ```
3. Run it from your Vue project root:

   ```bash
   ./ja_vue_debug_dump.sh
   ```

---

## 🧾 Output Structure (Example)

```
debug_dump_2025-05-08_23-59-30/
├── git_log.txt
├── git_remotes.txt
├── git_status.txt
├── npm_global_list.txt
├── npm_local_list.txt
├── package-lock.json.snapshot
├── package.json.snapshot
├── submodule_info.txt
├── versions.txt
├── vue_versions.txt
```

You can zip this folder or directly compare it with EC2 tomorrow.

Let me know if you want an S3 or GDrive upload command added next.

