# Website Deployment Guide

## Current Status

✅ **Code Issues Fixed:**
- Restored `src/pages/Magazines.tsx` with complete magazine data structure (13 magazines)
- Fixed encoding issues in `src/pages/AboutPage.tsx`
- Updated all image URLs to use local paths (`/images/...`)
- Created directory structure in `public/images/`

⏳ **Next Steps:**
1. Add image files to local folders
2. Test locally with dev server
3. Build for production
4. Deploy to Zeabur

---

## Step 1: Add Image Files to Local Folders

### Required Images

All images must be placed in `public/images/` subdirectories. See `IMAGE_MAPPING.md` for complete list.

**Quick Summary:**
- `public/images/about/` - About section images (4 files)
- `public/images/advantages/` - Advantages section images (2 files)
- `public/images/brands/` - Brands section images (1 file)
- `public/images/contact/` - Contact section images (2 files)
- `public/images/news/` - News section images (2 files)
- `public/images/qr/` - QR code images (1 file)
- `public/images/hero/` - Logo and social icons (5 files)
- `public/images/magazines/` - Magazine covers (13 files)

**Total: 30 image files needed**

### How to Add Images

1. Prepare all image files
2. Navigate to each subdirectory in `public/images/`
3. Place images with exact filenames as listed in `IMAGE_MAPPING.md`
4. Ensure no typos in filenames

---

## Step 2: Test Locally

### Start Development Server

```bash
npm run dev
```

The server will start at `http://localhost:3000/`

### What to Check

- [ ] Homepage loads without errors
- [ ] All images display correctly
- [ ] Navigation works between sections
- [ ] Magazine page shows all 13 magazines
- [ ] Magazine detail pages show cover images
- [ ] Contact page displays map and QR code
- [ ] Footer social icons display
- [ ] No console errors

### Troubleshooting

**Images not showing:**
- Check browser console for 404 errors
- Verify filenames match exactly (case-sensitive)
- Ensure files are in correct subdirectories
- Check file formats (PNG, JPG, JPEG, GIF)

**Page won't load:**
- Check terminal for build errors
- Verify all dependencies installed: `npm install`
- Clear cache: `rm -rf node_modules/.vite`

---

## Step 3: Build for Production

```bash
npm run build
```

This creates a `dist/` folder with optimized production files.

### What Gets Built

- `dist/static/` - Compiled JavaScript and CSS
- `dist/static/index.html` - Main HTML file
- Images are served from `public/` folder (Vite handles this automatically)

---

## Step 4: Deploy to Zeabur

### Option A: Upload dist Folder (Recommended)

1. Build the project: `npm run build`
2. Compress `dist/` folder to ZIP
3. Upload to Zeabur deployment
4. Zeabur will serve the files

### Option B: Connect Git Repository

1. Push code to GitHub
2. Connect repository to Zeabur
3. Zeabur automatically builds and deploys on push

### Deployment Configuration

The project includes deployment configs:
- `zeabur.json` - Zeabur configuration
- `vercel.json` - Vercel configuration (backup)

Both are pre-configured for this project.

---

## Important Notes

### Image Paths

All images now use local paths:
```
/images/magazines/overseas_2023.png
/images/about/about_card.jpg
/images/contact/contact_card.png
etc.
```

**Why local images?**
- External URLs with signatures expire
- CORS issues with some external servers
- Faster loading from local storage
- Reliable after deployment

### File Structure

```
project/
├── public/
│   └── images/
│       ├── about/
│       ├── advantages/
│       ├── brands/
│       ├── contact/
│       ├── news/
│       ├── qr/
│       ├── hero/
│       └── magazines/
├── src/
│   ├── pages/
│   │   ├── Magazines.tsx (restored)
│   │   └── AboutPage.tsx (fixed)
│   └── components/
│       ├── RecommendedInfo.tsx (updated)
│       ├── Navbar.tsx (updated)
│       ├── Footer.tsx (updated)
│       ├── Goals.tsx (updated)
│       └── ...
├── dist/ (created after build)
├── package.json
├── vite.config.ts
└── ...
```

---

## Troubleshooting Deployment

### Issue: Images not showing after deployment

**Solution:**
- Ensure all image files are in `public/images/` before building
- Rebuild: `npm run build`
- Redeploy to Zeabur

### Issue: 404 errors on deployment

**Solution:**
- Check that `dist/` folder was uploaded completely
- Verify Zeabur is serving from correct directory
- Check deployment logs in Zeabur dashboard

### Issue: Slow loading

**Solution:**
- Optimize image sizes (compress before uploading)
- Use appropriate formats (PNG for graphics, JPG for photos)
- Consider lazy loading for magazine covers

---

## Commands Reference

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm start

# Check for TypeScript errors
npx tsc --noEmit
```

---

## Support

If you encounter issues:

1. Check browser console for errors (F12)
2. Check terminal output for build errors
3. Verify all image files are present
4. Check file permissions
5. Clear browser cache (Ctrl+Shift+Delete)

---

## Next Steps After Deployment

1. Test website on live URL
2. Verify all images load
3. Test navigation and functionality
4. Check mobile responsiveness
5. Monitor for any errors

Good luck with your deployment!
