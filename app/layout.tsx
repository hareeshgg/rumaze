import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import StaggeredMenu from "@/components/StaggeredMenu";
import CTA from "@/components/CTA";
import AuroraWrapper from "@/components/AuroraWrapper";
import SmoothScroll from "@/components/SmoothScroll";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  style: ["italic", "normal"],
});

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://rumazedesign.in"),
  title: {
    default: "Rumaze Design Studio | Luxury Interior Design",
    template: "%s | Rumaze Design Studio",
  },
  description:
    "Rumaze Design Studio - The Art of Thoughtful Living. Premium residential interior design, 3D visualization, and turnkey execution.",
  keywords: [
    "interior design",
    "luxury interior design",
    "residential interior design",
    "3D visualization",
    "turnkey interior execution",
    "rumaze design studio",
  ],
  authors: [{ name: "Rumaze Design Studio" }],
  openGraph: {
    title: "Rumaze Design Studio | Luxury Interior Design",
    description:
      "The Art of Thoughtful Living. Premium residential interior design, 3D visualization, and turnkey execution.",
    url: "https://rumazedesign.in",
    siteName: "Rumaze Design Studio",
    images: [
      {
        url: "/projects/img1.jpg",
        width: 1200,
        height: 630,
        alt: "Rumaze Design Studio Project",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rumaze Design Studio | Luxury Interior Design",
    description:
      "The Art of Thoughtful Living. Premium interior design & turnkey execution.",
    images: ["/projects/img1.jpg"],
  },
  icons: {
    icon: "/rumaze-logo.png",
    shortcut: "/rumaze-logo.png",
    apple: "/rumaze-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/" },
    { label: "Projects", ariaLabel: "Learn about us", link: "#projects" },
    { label: "Services", ariaLabel: "View our services", link: "#services" },
    { label: "FAQ", ariaLabel: "Frequently asked questions", link: "#faq" },
    { label: "Contact", ariaLabel: "Get in touch", link: "#contact" },
  ];

  const socialItems = [
    { label: "Instagram", link: "https://instagram.com" },
    { label: "LinkedIn", link: "https://linkedin.com" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "InteriorDesignStudio",
    "name": "Rumaze Design Studio",
    "url": "https://rumazedesign.in",
    "logo": "https://rumazedesign.in/rumaze-logo.png",
    "description": "Premium residential interior design, 3D visualization, and turnkey execution.",
    "email": "contact@rumazedesign.in",
    "sameAs": [
      "https://instagram.com",
      "https://linkedin.com"
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <SmoothScroll />
        <div className="fixed inset-0 -z-50 bg-[#000000]">
          <AuroraWrapper />
        </div>
        <StaggeredMenu
          isFixed={true}
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials
          displayItemNumbering={true}
          menuButtonColor="#ffffff"
          openMenuButtonColor="#000000"
          changeMenuColorOnOpen={true}
          colors={["#B19EEF", "#5227FF"]}
          accentColor="#5227FF"
        />
        <main className="relative z-10"> <Toaster position="top-right" richColors />{children}</main>
        <CTA />
        <Footer />
      </body>
    </html>
  );
}
