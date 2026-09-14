'use strict';
/*
 * Minimal stub for the native `canvas` package.
 * It is required at module-load time by konva's Node entry (cmj/index-node.js).
 * The real native module cannot be compiled on Vercel (no cairo / no Python distutils),
 * and APITable never renders Konva on the server, so these no-op shims are sufficient.
 */
class DOMMatrix {
  constructor(init) {
    this.a = 1; this.b = 0; this.c = 0; this.d = 1; this.e = 0; this.f = 0;
    if (Array.isArray(init) && init.length === 6) {
      [this.a, this.b, this.c, this.d, this.e, this.f] = init;
    }
  }
}
class Image { constructor() { this.width = 0; this.height = 0; } }
class ImageData { constructor() { this.width = 0; this.height = 0; this.data = []; } }
function createCanvas(width, height) {
  return {
    width: width || 300,
    height: height || 300,
    getContext() { return null; },
    toBuffer() { return Buffer.alloc(0); },
    toDataURL() { return ''; },
  };
}
function loadImage() { return Promise.reject(new Error('canvas is stubbed in this build')); }
function registerFont() {}
function deregisterAllFonts() {}
module.exports = {
  DOMMatrix,
  Image,
  ImageData,
  Canvas: createCanvas,
  createCanvas,
  loadImage,
  registerFont,
  deregisterAllFonts,
  version: '2.9.1',
};
