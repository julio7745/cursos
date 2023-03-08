const path = require('path');


/*

const fsp = require('fs').promises 
fsp.readdir('C:\\Users\\julio\\Documents\\Curso\\JavaScript\\udemy\\node')
    .then(files => console.log(files, 'a'))
    .catch(e => console.log(e));
    
const fs = require('fs'); 
console.log(fs.readdirSync(path.resolve(__dirname, '..')), 'b');


*/


const fs = require('fs').promises;

async function readdir(rootDir) {
  rootDir = rootDir || path.resolve(__dirname);
  const files = await fs.readdir(rootDir);
  walk(files, rootDir);
}

async function walk(files, rootDir) {
  for(let file of files) {
    const fileFullPath = path.resolve(rootDir, file);
    const stats = await fs.stat(fileFullPath);

    if (/\.git/g.test(fileFullPath)) continue;
    if (/node_modules/g.test(fileFullPath)) continue;

    if(stats.isDirectory()) {
      readdir(fileFullPath);
      continue;
    }

    if (
      !/\.html$/g.test(fileFullPath)
    ) continue;
    console.log(fileFullPath);
  }
}
readdir(path.resolve(__dirname, '..', '..'));
