#!/bin/bash

echo "======================"
echo "🧠 NVM, Node, and NPM Versions"
echo "======================"
command -v nvm >/dev/null && nvm --version || echo "nvm not found"
node -v
npm -v

echo ""
echo "======================"
echo "📦 Local npm Packages (Depth=1)"
echo "======================"
npm ls --depth=1 2>/dev/null || echo "(npm ls failed)"

echo ""
echo "======================"
echo "📦 Global npm Packages"
echo "======================"
npm ls -g --depth=0 2>/dev/null

echo ""
echo "======================"
echo "📁 Snapshot: package.json (first 20 lines)"
echo "======================"
head -n 20 package.json

echo ""
echo "======================"
echo "📁 Snapshot: package-lock.json (exists?)"
echo "======================"
[ -f package-lock.json ] && head -n 10 package-lock.json || echo "❌ No package-lock.json found"

echo ""
echo "======================"
echo "🎯 Vue & Vuetify Versions"
echo "======================"
npm list vue 2>/dev/null
npm list vuetify 2>/dev/null
npm list webpack-plugin-vuetify 2>/dev/null

echo ""
echo "======================"
echo "📂 Git Status (Main Repo)"
echo "======================"
git status

echo ""
echo "======================"
echo "📂 Git Log (Last 3 commits)"
echo "======================"
git log --oneline -n 3

echo ""
echo "======================"
echo "🔗 Git Remote"
echo "======================"
git remote -v

echo ""
echo "======================"
echo "📦 Submodule Info (my-new-vue-project)"
echo "======================"
if [ -d "./my-new-vue-project/.git" ]; then
  echo "Submodule is present."
  (cd my-new-vue-project && echo "→ Current branch: $(git branch --show-current)")
  (cd my-new-vue-project && git log --oneline -n 2)
else
  echo "❌ Submodule folder missing or not initialized."
fi

echo ""
echo "✅ DONE — You can now copy this output with pbcopy if needed."

