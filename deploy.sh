rm -rf dist
yarn build
cd dist
git init
git add .
git commit -m "update"
git branch -M main
git remote add origin git@github.com:xinchi-H/Vue3-xc-Ui-website.git
git push -f -u origin main
cd -
echo https://xinchi-h.github.io/Vue3-xc-Ui-website/