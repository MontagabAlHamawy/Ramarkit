import type { Metadata } from "next";
import { Cairo, Roboto_Mono, Meow_Script } from "next/font/google";
import "../styles/globals.css"
import { ThemeProvider } from "@/components/provider/theme-provider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { MobileNav } from "@/components/layout/MobileNav";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});
const meowScript = Meow_Script({
  variable: "--font-meow-script",
  subsets: ["latin"],
  weight: "400"
});


export const metadata: Metadata = {
  metadataBase: new URL('https://ramarkit.com'),
  title: "Ramarkit",
  description:
    "Ramarkit is a revolutionary accounting system that makes a big difference in managing your store's finances.",
  openGraph: {
    title: "Ramarkit",
    description:
      "Ramarkit is a revolutionary accounting system that makes a big difference in managing your store's finances.",
    url: "https://ramarkit.com",
    type: "website",
    images: [
      {
        url: "./logo.png",
        width: 800,
        height: 600,
        alt: "Ramarkit Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramarkit",
    description:
      "Ramarkit is a revolutionary accounting system that makes a big difference in managing your store's finances.",
    images: ["./logo.png"],
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
        className={`${cairo.variable} ${robotoMono.variable} ${meowScript.variable} antialiased min-h-screen font-cairo`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-[calc(100vh-64px)]">
            <Navbar />
            {children}
          </div>
          <MobileNav/>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
