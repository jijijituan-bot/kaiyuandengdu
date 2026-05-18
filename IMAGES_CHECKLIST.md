# Images Checklist - What You Need to Upload

## Instructions

1. Download or prepare each image listed below
2. Place it in the specified folder
3. Use the exact filename provided
4. Check off each item as you complete it

---

## About Section (4 images)

### public/images/about/

- [ ] `about_card.jpg` - Card image for "About" in recommended info section
  - Size: ~400x300px or similar
  - Used in: RecommendedInfo component

- [ ] `3f3c55b5c9845c62cbb1cd292b440e8a.png` - Main about page image
  - Size: ~500x500px or larger
  - Used in: About page, About component

- [ ] `goals.png` - Strategic goals image
  - Size: ~1200x600px or similar
  - Used in: Goals component

- [ ] `strategy.png` - Strategy display image
  - Size: ~2000x545px or similar
  - Used in: AboutPage strategic section

---

## Advantages Section (2 images)

### public/images/advantages/

- [ ] `advantages_card.png` - Card image for "Advantages" in recommended info
  - Size: ~800x300px or similar
  - Used in: RecommendedInfo component

- [ ] `8f226f03e5057087c6f3c6a6baae8933.png` - Main advantages page image
  - Size: ~500x500px or larger
  - Used in: Advantages page, Advantages component

---

## Brands Section (1 image)

### public/images/brands/

- [ ] `brands_card.png` - Card image for "Brands" in recommended info
  - Size: ~400x300px or similar
  - Used in: RecommendedInfo component

---

## Contact Section (2 images)

### public/images/contact/

- [ ] `contact_card.png` - Card image for "Contact" in recommended info
  - Size: ~800x300px or similar
  - Used in: RecommendedInfo component

- [ ] `c5ebbecf52f4e43bedc31e0ac37caf5c.png` - Map/location image
  - Size: ~1200x400px or similar
  - Used in: Contact page

---

## News Section (2 images)

### public/images/news/

- [ ] `magazines_card.png` - Card image for "Magazines" in recommended info
  - Size: ~400x300px or similar
  - Used in: RecommendedInfo component

- [ ] `51c82055299b9766f693c8d7ce5b1ccc.png` - News and Events banner
  - Size: ~1920x550px or similar
  - Used in: NewsAndEvents component

---

## QR Code Section (1 image)

### public/images/qr/

- [ ] `69ef2cb8cf15e904f5366f36d4cce7e7.png` - QR code image
  - Size: ~400x400px or similar
  - Used in: Contact page QR code section

---

## Hero/Logo Section (5 images)

### public/images/hero/

- [ ] `logo.png` - Website logo
  - Size: ~200x200px or similar
  - Used in: Navbar

- [ ] `wechat.png` - WeChat icon
  - Size: ~64x64px or similar
  - Used in: Footer social links

- [ ] `douyin.png` - Douyin/TikTok icon
  - Size: ~64x64px or similar
  - Used in: Footer social links

- [ ] `weibo.png` - Weibo icon
  - Size: ~64x64px or similar
  - Used in: Footer social links

- [ ] `xiaohongshu.png` - Xiaohongshu icon
  - Size: ~64x64px or similar
  - Used in: Footer social links

---

## Magazine Covers (13 images)

### public/images/magazines/

**Overseas Editions (2 images)**

- [ ] `overseas_2023.png` - 2023 Overseas Edition cover
  - Size: ~425x639px (3:4 aspect ratio)
  - Used in: Magazines page

- [ ] `overseas_2024.png` - 2024 Overseas Edition cover
  - Size: ~425x639px (3:4 aspect ratio)
  - Used in: Magazines page

**Special Editions (5 images)**

- [ ] `special_5.png` - Special Edition 5 cover
  - Size: ~425x639px (3:4 aspect ratio)
  - Used in: Magazines page

- [ ] `special_6.png` - Special Edition 6 cover
  - Size: ~425x639px (3:4 aspect ratio)
  - Used in: Magazines page

- [ ] `special_6_a.png` - Special Edition 6 Version A cover
  - Size: ~425x639px (3:4 aspect ratio)
  - Used in: Magazines detail page (sub-version)

- [ ] `special_6_b.png` - Special Edition 6 Version B cover
  - Size: ~425x639px (3:4 aspect ratio)
  - Used in: Magazines detail page (sub-version)

- [ ] `special_7.png` - Special Edition 7 cover
  - Size: ~425x639px (3:4 aspect ratio)
  - Used in: Magazines page

- [ ] `special_8.png` - Special Edition 8 cover
  - Size: ~425x639px (3:4 aspect ratio)
  - Used in: Magazines page

- [ ] `special_9.png` - Special Edition 9 cover
  - Size: ~425x639px (3:4 aspect ratio)
  - Used in: Magazines page

**Monthly Editions (3 images)**

- [ ] `monthly_1.png` - Monthly Edition 1 cover
  - Size: ~425x639px (3:4 aspect ratio)
  - Used in: Magazines page

- [ ] `monthly_2.png` - Monthly Edition 2 cover
  - Size: ~425x639px (3:4 aspect ratio)
  - Used in: Magazines page

- [ ] `monthly_3.png` - Monthly Edition 3 cover
  - Size: ~425x639px (3:4 aspect ratio)
  - Used in: Magazines page

---

## Summary

**Total Images Needed: 30**

- About: 4
- Advantages: 2
- Brands: 1
- Contact: 2
- News: 2
- QR: 1
- Hero/Logo: 5
- Magazines: 13

---

## Upload Instructions

### Method 1: Manual Upload (Recommended for first time)

1. Open file explorer
2. Navigate to `public/images/`
3. Create subdirectories if needed (already created)
4. Drag and drop images into appropriate folders
5. Verify filenames match exactly

### Method 2: Command Line (Advanced)

```bash
# Copy images to about folder
cp /path/to/images/about_card.jpg public/images/about/
cp /path/to/images/3f3c55b5c9845c62cbb1cd292b440e8a.png public/images/about/
# ... repeat for all images
```

### Method 3: Batch Upload

1. Prepare all images in a folder
2. Organize by subdirectory
3. Copy entire folder structure to `public/images/`

---

## Verification

After uploading all images:

1. Run: `npm run dev`
2. Open: `http://localhost:3000/`
3. Check each page:
   - [ ] Homepage - all cards show images
   - [ ] About page - images display
   - [ ] Advantages page - images display
   - [ ] Magazines page - all 13 covers show
   - [ ] Contact page - map and QR code show
   - [ ] Footer - social icons show

4. If any images missing:
   - Check browser console (F12) for 404 errors
   - Verify filename spelling
   - Verify file is in correct folder
   - Verify file format is supported

---

## Next Steps

1. ✅ Upload all 30 images
2. ✅ Test locally with `npm run dev`
3. ✅ Build with `npm run build`
4. ✅ Deploy to Zeabur
5. ✅ Test live website

Good luck!
