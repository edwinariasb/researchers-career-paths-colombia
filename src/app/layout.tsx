import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Researchers’ trajectories in the Colombian STI system",
  description: "Longitudinal sequence analysis of researchers in Colombia's STI system, 2013–2025.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
