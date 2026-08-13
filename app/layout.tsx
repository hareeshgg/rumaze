import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import StaggeredMenu from "@/components/StaggeredMenu";
import Aurora from "@/components/Aurora";
import CTA from "@/components/CTA";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: "300",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  title: "Rumaze Design Studio | Interior Design",
  description: "The Art of Thoughtful Living",
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
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <div className="fixed inset-0 -z-50 bg-[#000000]">
          <Aurora />
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
