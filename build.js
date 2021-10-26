const fs = require('fs-extra');
const path = require('path');
const sass = require('sass');
const minify = require('minify');

const distPath = path.join(__dirname, 'dist');
const srcPath = path.join(__dirname, 'src');

(async () => {
  await fs.writeFile(
    path.join(distPath, 'index.html'),
    await minify(path.join(srcPath, 'index.html')),
    'utf8',
  );
  await fs.writeFile(
    path.join(distPath, 'style.css'),
    sass.renderSync({
      data: await fs.readFile(path.join(srcPath, 'style.scss'), 'utf-8'),
      outputStyle: 'compressed',
    }).css,
  );
  await fs.copy(path.join(srcPath, 'assets'), path.join(distPath, 'assets'));
})();
