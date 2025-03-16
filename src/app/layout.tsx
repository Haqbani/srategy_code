import "./globals.css";
import { atlasGrotesk, atlasTypewriter, tiemposText } from "@/lib/fonts";
import ClientBody from "./ClientBody";

export const metadata = {
  title: "The Pudding",
  description: "The Pudding explains ideas with visual essays.",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "32x32",
        type: "image/x-icon",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${atlasGrotesk.variable} ${atlasTypewriter.variable} ${tiemposText.variable} font-atlas-grotesk bg-pudding-light min-h-screen`}
      >
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
