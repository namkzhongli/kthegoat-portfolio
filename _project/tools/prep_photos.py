"""Resize original camera photos to web size (1800px long edge, JPEG q80, EXIF-rotated).
Usage: python3 _project/tools/prep_photos.py <input.jpg> <output.jpg>"""
import sys
from PIL import Image, ImageOps
Image.MAX_IMAGE_PIXELS = None
im = ImageOps.exif_transpose(Image.open(sys.argv[1])).convert('RGB'); w, h = im.size; s = 1800 / max(w, h)
if s < 1: im = im.resize((round(w * s), round(h * s)), Image.LANCZOS)
im.save(sys.argv[2], 'JPEG', quality=80, optimize=True, progressive=True)
