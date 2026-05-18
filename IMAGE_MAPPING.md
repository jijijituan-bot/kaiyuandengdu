# Image Files Required for Local Deployment

This document lists all image files that need to be placed in the `public/images/` folders for the website to display correctly after deployment.

## Directory Structure

```
public/images/
├── about/
│   ├── about_card.jpg          # About section card image (RecommendedInfo)
│   ├── 3f3c55b5c9845c62cbb1cd292b440e8a.png  # About page main image
│   ├── goals.png               # Strategic goals image (AboutPage)
│   └── strategy.png            # Strategy display image (AboutPage)
├── advantages/
│   ├── advantages_card.png     # Advantages card image (RecommendedInfo)
│   └── 8f226f03e5057087c6f3c6a6baae8933.png  # Advantages page main image
├── brands/
│   └── brands_card.png         # Brands card image (RecommendedInfo)
├── contact/
│   ├── contact_card.png        # Contact card image (RecommendedInfo)
│   └── c5ebbecf52f4e43bedc31e0ac37caf5c.png  # Contact page map image
├── news/
│   ├── magazines_card.png      # Magazines card image (RecommendedInfo)
│   └── 51c82055299b9766f693c8d7ce5b1ccc.png  # News and Events banner
├── qr/
│   └── 69ef2cb8cf15e904f5366f36d4cce7e7.png  # QR code image (Contact page)
├── hero/
│   ├── logo.png                # Website logo (Navbar)
│   ├── wechat.svg              # WeChat icon (Footer)
│   ├── douyin.png              # Douyin icon (Footer) - Brand logo
│   ├── weibo.png               # Weibo icon (Footer) - Brand logo
│   ├── xiaohongshu.png         # Xiaohongshu icon (Footer) - Brand logo
│   ├── 0ed4c2210c0d5981865288d41d4d02ba.png  # Hero carousel image 1
│   └── a4b85fb2755ecb75ea3e76f9dc8223f9.png  # Hero carousel image 2
└── magazines/
    ├── overseas_2023.png       # 2023 Overseas Edition cover
    ├── overseas_2024.png       # 2024 Overseas Edition cover
    ├── special_5.png           # Special Edition 5 cover
    ├── special_6.png           # Special Edition 6 cover
    ├── special_6_a.png         # Special Edition 6 Version A cover
    ├── special_6_b.png         # Special Edition 6 Version B cover
    ├── special_7.png           # Special Edition 7 cover
    ├── special_8.png           # Special Edition 8 cover
    ├── special_9.png           # Special Edition 9 cover
    ├── monthly_1.png           # Monthly Edition 1 cover
    ├── monthly_2.png           # Monthly Edition 2 cover
    └── monthly_3.png           # Monthly Edition 3 cover

```

## Instructions

1. Download or prepare all required images
2. Place them in the corresponding subdirectories under `public/images/`
3. Ensure filenames match exactly as listed above
4. Supported formats: PNG, JPG, JPEG, GIF
5. Recommended image sizes:
   - Card images: 400x300px or similar aspect ratio
   - Magazine covers: 425x639px (3:4 aspect ratio)
   - Logo: 200x200px or similar
   - Icons: 64x64px or similar
   - Full-width images: 1920x1080px or similar

## Current Status

- ✅ Directory structure created
- ✅ Social media icon SVG files added (wechat.svg, douyin.svg, weibo.svg, xiaohongshu.svg)
- ✅ Hero carousel images added
- ✅ Magazine cover images added
- ✅ About, Advantages, Contact, and News images added
- ✅ QR code image added
- ⏳ Website deployed and tested

## How to Add Images

1. Navigate to the `public/images/` folder in your project
2. Create subdirectories if they don't exist (already created)
3. Place image files in the appropriate subdirectories
4. Ensure filenames match exactly
5. Run `npm run dev` to test locally
6. Run `npm run build` to build for production
7. Deploy to Zeabur

## Notes

- All image paths in the code have been updated to use local paths (`/images/...`)
- External URLs have been replaced with local paths
- This ensures images will display correctly after deployment
- No CORS issues or expired signatures with local images
