"""Turn the original brand logos (_project/logos-original) into black, transparent PNGs (logos/*.png).
Each logo needs its own masking rule because the originals sit on different backgrounds.
Run from repo root: python3 _project/tools/process_logos.py"""
from PIL import Image, ImageFilter
import numpy as np, os
SRC = '_project/logos-original/'; OUT = 'logos/'
def save(name, m):
    m = np.clip(m, 0, 1); a = Image.fromarray((m * 255).astype('uint8'), 'L')
    a = a.crop(a.point(lambda v: 255 if v > 40 else 0).getbbox())
    w, h = a.size; s = min(1, 1000 / max(w, h)); a = a.resize((max(1, round(w * s)), max(1, round(h * s))), Image.LANCZOS)
    rgba = Image.new('RGBA', a.size, (11, 11, 11, 0)); rgba.putalpha(a); rgba.save(OUT + name + '.png', optimize=True)
def rgb(f): return np.asarray(Image.open(SRC + f).convert('RGB')).astype(float) / 255
def alpha(f): return np.asarray(Image.open(SRC + f).convert('RGBA')).astype(float)[..., 3] / 255
save('bichvan', alpha('bichvan.png')); save('dogduck', alpha('dog-and-duck.png')); save('kaza', alpha('kaza.png'))
a = rgb('kimmy.jpg'); d = np.sqrt(((a - np.array([12, 21, 36]) / 255) ** 2).sum(-1)); m = (d - .15) / .3
m[:40] = 0; m[-40:] = 0; m[:, :40] = 0; m[:, -40:] = 0; save('kimmy', m)
a = rgb('com-natural.jpg'); m = (a.max(-1) - a.min(-1) - .1) / .15; m[:40] = 0; save('com', m)
a = rgb('meow-billiards.jpg'); sat = a.max(-1) - a.min(-1); save('meow', np.maximum((sat - .25) / .25, (0.42 - a.mean(-1)) / .2))
im = Image.open(SRC + 'embe.jpg').convert('L'); L = np.asarray(im).astype(float)
bl = np.asarray(im.filter(ImageFilter.GaussianBlur(14))).astype(float); m = (L - bl - 4) / 8
mask = np.zeros_like(m); mask[370:590, 225:735] = 1; m *= mask
save('embe', np.asarray(Image.fromarray((np.clip(m, 0, 1) * 255).astype('uint8')).filter(ImageFilter.MedianFilter(3))).astype(float) / 255)
print('done')
