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

// 只删除旧的 magazines 图片，保留 monthly-pdfs 和 monthly-covers
const subdirs = fs.readdirSync(imagesDir).filter(name => {
  return name !== 'monthly-pdfs' && name !== 'monthly-covers';
});

if (subdirs.length === 0 && !fs.readdirSync(imagesDir).some(n => n === 'monthly-pdfs' || n === 'monthly-covers')) {
  removeDirIfExists(imagesDir);
} else {
  subdirs.forEach(name => {
    removeDirIfExists(path.join(imagesDir, name));
    // 删除 imagesDir 下的直接文件（非文件夹）
  });
  // 删除 imagesDir 下的直接文件
  fs.readdirSync(imagesDir).forEach(name => {
    const fullPath = path.join(imagesDir, name);
    if (fs.statSync(fullPath).isFile()) {
      fs.rmSync(fullPath, { force: true });
    }
  });
}

