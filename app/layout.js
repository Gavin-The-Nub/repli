import { Inter } from "next/font/google";
import Link from "next/link";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { Instagram, Facebook } from "lucide-react";
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
            <footer className="border-t bg-gray-100">
              <div className="container px-4 md:px-6 py-8 md:py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold">BikeRevive</h3>
                    <p className="text-sm text-gray-500">
                      Professional bike repainting services and premium quality
                      rims for all types of bikes.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-sm font-bold">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link href="/" className="hover:underline">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link href="/services" className="hover:underline">
                          Services
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact" className="hover:underline">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-sm font-bold">Contact</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <span className="flex h-4 w-4 items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-phone"
                          >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                          </svg>
                        </span>
                        <span>(123) 456-7890</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="flex h-4 w-4 items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-mail"
                          >
                            <rect width="20" height="16" x="2" y="4" rx="2" />
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                          </svg>
                        </span>
                        <span>info@bikerevive.com</span>
                      </li>
                      <li>123 Bike Street, Cycle City</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-sm font-bold">Follow Us</h3>
                    <div className="flex gap-4">
                      <Link
                        href="#"
                        className="text-gray-500 hover:text-gray-900"
                      >
                        <Instagram className="h-5 w-5" />
                        <span className="sr-only">Instagram</span>
                      </Link>
                      <Link
                        href="#"
                        className="text-gray-500 hover:text-gray-900"
                      >
                        <Facebook className="h-5 w-5" />
                        <span className="sr-only">Facebook</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="mt-8 border-t pt-8 text-center text-sm text-gray-500">
                  © {new Date().getFullYear()} BikeRevive. All rights reserved.
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
