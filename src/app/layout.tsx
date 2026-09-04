import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#080c14",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://pavankumar-portfolio.vercel.app"),
  title: {
    default: "Jaya Chandra Prakash Pavan Kumar Putta | Full Stack Web Developer",
    template: "%s | Pavan Kumar Putta",
  },
  description:
    "Full Stack Web Developer specializing in Next.js, React, Node.js, PostgreSQL, and scalable cloud-ready architectures. View production projects (EH_CART, Job Portal) and download resume.",
  keywords: [
    "Jaya Chandra Prakash Pavan Kumar Putta",
    "Pavan Kumar",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js",
    "PostgreSQL",
    "Tailwind CSS",
    "Frontend Engineer",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Jaya Chandra Prakash Pavan Kumar Putta", url: "https://github.com/PavanKumar2004-hub" }],
  creator: "Jaya Chandra Prakash Pavan Kumar Putta",
  publisher: "Jaya Chandra Prakash Pavan Kumar Putta",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pavankumar-portfolio.vercel.app",
    siteName: "Pavan Kumar Putta - Portfolio",
    title: "Jaya Chandra Prakash Pavan Kumar Putta | Full Stack Web Developer",
    description:
      "Full Stack Web Developer specializing in Next.js, React, Node.js, and scalable cloud-ready web architectures. Explore production-ready projects and download resume.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jaya Chandra Prakash Pavan Kumar Putta - Full Stack Web Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaya Chandra Prakash Pavan Kumar Putta | Full Stack Web Developer",
    description:
      "Building scalable, high-performance web applications with clean component architecture and production-ready technologies.",
    images: ["/og-image.png"],
    creator: "@pavankumar",
  },
  alternates: {
    canonical: "https://pavankumar-portfolio.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-[#080c14] text-slate-100 antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
