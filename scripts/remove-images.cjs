const fs = require('fs');
const path = require('path');

function removeDirIfExists(targetPath) {
  try {
    if (fs.existsSync(targetPath)) {
      fs.rmSync(targetPath, { recursive: true, force: true });
      process.stdout.write(`Removed: ${targetPath}\n`);
    } else {
      process.stdout.write(`Skip (not exists): ${targetPath}\n`);
    }
  } catch (err) {
    process.stderr.write(`Error removing ${targetPath}: ${err.message}\n`);
    process.exitCode = 1;
  }
}

// Project root relative to this script
const projectRoot = path.resolve(__dirname, '..');
// Vite outDir per package.json/vite.config.ts
const outDir = path.join(projectRoot, 'dist', 'static');
// Public images are copied to dist/static/images
const imagesDir = path.join(outDir, 'images');

removeDirIfExists(imagesDir);

