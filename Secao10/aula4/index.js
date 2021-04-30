const fs = require("fs").promises;
const path = require("path");

async function readdir(dir) {
  const newDir = dir || path.resolve(__dirname);
  const files = await fs.readdir(newDir);

  walk(files, newDir);
  // return files;
}

async function walk(files, dir) {
  for (let file of files) {
    const fileFullPath = path.resolve(dir, file);
    const stats = await fs.stat(fileFullPath);

    if (/\.git/g.test(fileFullPath)) continue;
    if (/node_modules/g.test(fileFullPath)) continue;
    if (stats.isDirectory()) {
      readdir(fileFullPath);
      continue;
    }

    //pegar os arquivos css
    if (/\.css/g.test(fileFullPath) || /\.html/g.test(fileFullPath))
      console.log(fileFullPath, stats.isDirectory());
  }
}

readdir(path.resolve(__dirname, "..", ".."));
