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
      variants: [
        {
          src: ['./src/assets/fonts/Inter-Thin.woff2'],
          weight: "100",
          style: 'normal'
        },
        {
          src: ['./src/assets/fonts/Inter-ExtraLight.woff2'],
          weight: "200",
          style: 'normal'
        },
        {
          src: ['./src/assets/fonts/Inter-Light.woff2'],
          weight: "300",
          style: 'normal'
        },
        {
          src: ['./src/assets/fonts/Inter-Regular.woff2'],
          weight: "400",
          style: 'normal'
        },
        {
          src: ['./src/assets/fonts/Inter-Medium.woff2'],
          weight: "500",
          style: 'normal'
        },
        {
          src: ['./src/assets/fonts/Inter-SemiBold.woff2'],
          weight: "600",
          style: 'normal'
        },
        {
          src: ['./src/assets/fonts/Inter-Bold.woff2'],
          weight: "700",
          style: 'normal'
        },
      ]
    },
    fallbacks: ["sans-serif"]
  }]
});