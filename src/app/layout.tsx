import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HomeOS",
  description: "Zentrale Startseite und Verwaltungsoberflaeche fuer Self-Hosted-Server",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
