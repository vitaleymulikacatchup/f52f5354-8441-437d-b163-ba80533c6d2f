import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "RealXchess — AI Chess SaaS for training, play & analytics",
  description: "RealXchess delivers AI-driven coaching, game analysis, and seamless online play for clubs and players. Start free, scale your chess program.",
  keywords: ["realxchess", "ai chess", "chess training", "online chess", "chess analytics", "chess SaaS", "club management", "coaching"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "RealXchess",
    title: "RealXchess — AI Chess SaaS for training, play & analytics",
    description: "RealXchess delivers AI-driven coaching, game analysis, and seamless online play for clubs and players. Start free, scale your chess program.",
    images: [{ url: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32Sjpo9ZLWlVS5JxRw9EagJf0Fo/minimal-vector-mascot-for-realxchess-wai-1759608891775-708cbd69.jpg", width: 1200, height: 630, alt: 'RealXchess AI chess SaaS logo' }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RealXchess — AI Chess SaaS for training, play & analytics",
    description: "RealXchess delivers AI-driven coaching, game analysis, and seamless online play for clubs and players. Start free, scale your chess program.",
    images: [{ url: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32Sjpo9ZLWlVS5JxRw9EagJf0Fo/minimal-vector-mascot-for-realxchess-wai-1759608891775-708cbd69.jpg" }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${playfairDisplay.variable} antialiased`}> 
        {children}
      </body>
    </html>
  );
}
