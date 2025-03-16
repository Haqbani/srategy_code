import { NextFont } from 'next/dist/compiled/@next/font';
import localFont from 'next/font/local';

export const atlasGrotesk = localFont({
  src: [
    {
      path: '../../public/fonts/AtlasGrotesk-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/AtlasGrotesk-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-atlas-grotesk',
  display: 'swap',
});

export const atlasTypewriter = localFont({
  src: [
    {
      path: '../../public/fonts/AtlasTypewriter-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-atlas-typewriter',
  display: 'swap',
});

export const tiemposText = localFont({
  src: [
    {
      path: '../../public/fonts/TiemposTextWeb-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/TiemposTextWeb-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-tiempos-text',
  display: 'swap',
});
