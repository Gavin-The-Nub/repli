import { Inter } from "next/font/google";
import Link from "next/link";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import {
  Phone,
  Mail,
  Instagram,
  Facebook,
  MapPin,
  Navigation,
} from "lucide-react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bike Repaint & Rim Shop",
  description: "Professional bike repainting services and premium quality rims",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <footer className="border-t text-white bg-black">
              <div className="container px-4 md:px-6 py-8 md:py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="space-y-4">
                    <img
                      src="/logo.png"
                      alt="Repli Painting"
                      className="h-8 md:h-10"
                    />
                    <p className="text-sm text-gray-500">
                      Professional bike repainting services and premium quality
                      rims for all types of bikes.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-sm font-bold">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-gray-500">
                      <li>
                        <Link href="/" className="hover:text-yellow-300">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services"
                          className="hover:text-yellow-300"
                        >
                          Services
                        </Link>
                      </li>

                      <li>
                        <Link href="/rims" className="hover:text-yellow-300">
                          Rims
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact" className="hover:text-yellow-300">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-sm font-bold">Contact</h3>
                    <ul className="space-y-2 text-sm  text-gray-500">
                      <li className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        <span>09951648978</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        <span>info@repli-painting.com</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 mt-0.5" />
                        <div>
                          <span>BLK 171 LOT 1 Calachuchi st.</span>
                          <br />
                          <span>Baranggay Pembo, Taguig City</span>
                        </div>
                      </li>
                      <li>
                        <a
                          href="https://maps.app.goo.gl/TMj4ZoekmC11ruPi6"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center  hover:text-yellow-300"
                        >
                          <Navigation className="mr-1 h-4 w-4 hover:text-yellow-300" />
                          Google Maps
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-sm font-bold">Follow Us</h3>
                    <div className="flex gap-4">
                      <Link
                        href="#"
                        className="text-gray-500 hover:text-yellow-300"
                      >
                        <Instagram className="h-5 w-5" />
                        <span className="sr-only">Instagram</span>
                      </Link>
                      <Link
                        href="#"
                        className="text-gray-500 hover:text-yellow-300"
                      >
                        <Facebook className="h-5 w-5" />
                        <span className="sr-only">Facebook</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="mt-8 border-t pt-8 text-center text-sm text-gray-500">
                  © {new Date().getFullYear()} Repli-Painting. All rights
                  reserved.
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
