import type { Metadata } from "next";
import "./globals.css";
import '@fontsource/epilogue/400.css';
import '@fontsource/epilogue/700.css';

export const metadata: Metadata = {
  title: "NHT - Engenharia Mecânica",
  description: "NHT - Engenharia Mecânica e Projetos Mecânicos",
  icons: {
    icon: [
      { url: '/favicon.ico' },
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
