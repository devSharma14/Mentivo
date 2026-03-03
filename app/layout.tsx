import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mentivo — Learn from people a few steps ahead",
  description: "Connect with peer mentors for 1-on-1 sessions. No fluff, just real conversations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}