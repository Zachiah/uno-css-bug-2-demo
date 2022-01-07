// THIS FILE IS JUST FOR UNOCSS VSCODE TO RECOGNIZE THAT UNO IS USED
// PLEASE DON'T REMOVE IT

import { defineConfig } from "vite";
import Unocss from "unocss/vite";
import { presetAttributify, presetUno } from "unocss";

export default defineConfig({
  plugins: [
    Unocss({
      presets: [
        presetAttributify({}),
        presetUno({}),
      ],
    }),
  ],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
    outDir: "../docs",
  },
}); 