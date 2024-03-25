import './dotted.js';

declare global {
  let dottedTexture: any;
  let dottedTextureSemitransparent: any;

  function createDottedTexture(): void;
}
