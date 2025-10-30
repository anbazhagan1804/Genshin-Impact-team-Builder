# Image Assets Structure

## Directory Structure
```
public/
├── characters/
│   ├── splash/      # Full character artwork (1920x1080)
│   ├── portraits/   # Character face portraits (256x256)
│   ├── cards/       # Character cards (512x768)
│   └── icons/       # Small character icons (128x128)
└── elements/
    └── icons/       # Element icons (64x64)
```

## Image Requirements

### Character Splash Art
- Location: `/characters/splash/`
- Resolution: 1920x1080 pixels
- Format: PNG or WEBP
- Naming: `character-name.png` (e.g., `raiden-shogun.png`)
- Transparent background preferred

### Character Portraits
- Location: `/characters/portraits/`
- Resolution: 256x256 pixels
- Format: PNG
- Naming: `character-name.png`
- Transparent background required

### Character Cards
- Location: `/characters/cards/`
- Resolution: 512x768 pixels
- Format: PNG
- Naming: `character-name.png`
- Maintain 2:3 aspect ratio

### Character Icons
- Location: `/characters/icons/`
- Resolution: 128x128 pixels
- Format: PNG
- Naming: `character-name.png`
- Transparent background required

### Element Icons
- Location: `/elements/icons/`
- Resolution: 64x64 pixels
- Format: PNG
- Naming: `element-name.png` (e.g., `pyro.png`, `hydro.png`)
- Transparent background required

## Naming Conventions

### Characters
Convert character names to lowercase, replace spaces with hyphens:
- raiden-shogun.png
- hu-tao.png
- kamisato-ayaka.png

### Elements
Use lowercase element names:
- pyro.png
- hydro.png
- anemo.png
- electro.png
- dendro.png
- cryo.png
- geo.png

## Image Optimization
- Use PNG format for best quality
- Consider WEBP format for better compression
- Optimize images before adding to reduce file size
- Maintain transparency where needed
- Keep consistent aspect ratios