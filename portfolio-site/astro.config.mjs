// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: "https://gergelyhorvath.com",

  image: {
      responsiveStyles: true
  },

  fonts: [{
    provider: fontProviders.local(),
    name: "Inter",
    cssVariable: "--font-inter",
    options: {
      variants: [{
        src: ['./src/assets/fonts/Inter-Variable.ttf'],
        weight: "100 900",
        style: 'normal'
      }]
    },
    fallbacks: ["sans-serif"]
  }]
});