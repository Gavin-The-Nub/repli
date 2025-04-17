"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Menu,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useMobile } from "@/app/hooks/use-mobile";

// Register the ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Header() {
  const isMobile = useMobile();
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);
  const prevScrollY = useRef(0);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const serviceItems = [
    { name: "Carbon Repair", href: "/services#carbon-repair" },
    { name: "Custom Paint", href: "/services#custom-paint" },
    { name: "Production Paint", href: "/services#production-paint" },
    { name: "In House Designers", href: "/services#in-house-designers" },
    { name: "Paint Touch Up", href: "/services#paint-touch-up" },
    { name: "Graphics & Decals", href: "/services#graphics-decals" },
    { name: "Restorations", href: "/services#restorations" },
  ];

  const shopItems = [
    { name: "Rims", href: "/rims" },
    { name: "Bikes", href: "/bikes" },
  ];

  const aboutItems = [
    { name: "Warranty", href: "/warranty" },
    { name: "FAQs", href: "/faqs" },
  ];

  const navigation = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      href: "/services",
      dropdown: true,
      items: serviceItems,
    },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Pricing", href: "/pricing" },
    { name: "Shop", href: "#", dropdown: true, items: shopItems },
    { name: "About Us", href: "#", dropdown: true, items: aboutItems },
    { name: "Get a Quote", href: "/get-a-quote" },
    { name: "Location", href: "/location" },
  ];

  useEffect(() => {
    const header = headerRef.current;

    // Set initial state
    gsap.set(header, {
      y: 0,
      position: "fixed",
      top: 0,
      width: "100%",
      zIndex: 50,
    });

    // Create a function to handle scroll
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // If scrolling down and past 100px, hide the header
      if (currentScrollY > prevScrollY.current && currentScrollY > 100) {
        gsap.to(header, {
          y: "-100%",
          duration: 0.3,
          ease: "power2.inOut",
        });
      }
      // If scrolling up, show the header
      else if (currentScrollY < prevScrollY.current) {
        gsap.to(header, {
          y: 0,
          duration: 0.3,
          ease: "power2.inOut",
        });
      }

      prevScrollY.current = currentScrollY;
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header ref={headerRef} className="w-full z-50">
        {/* Info Bar */}
        <div className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4">
          <div className="container mx-auto flex flex-row  justify-between items-center text-sm">
            <div className="flex flex-row gap-5   md:gap-6 items-center">
              <Link
                href="mailto:info@repli-painting.com"
                className="flex items-center  hover:text-gray-300"
              >
                <Mail className="h-4 w-4" />
                <span className="hidden md:block">info@repli-painting.com</span>
              </Link>
              <Link
                href="tel:09951648978"
                className="flex items-center gap-1 hover:text-gray-300"
              >
                <Phone className="h-4 w-4" />
                <span className="hidden md:block">09951648978</span>
              </Link>
            </div>

            <div className="flex gap-5 items-center">
              <Link href="#" className="hover:text-gray-300">
                <Facebook className="h-4 w-4" />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Instagram className="h-4 w-4" />
              </Link>
            </div>

            <div className="flex items-center gap-1 ">
              <MapPin className="h-4 w-4 flex-shrink-0" />
              <Link
                href="https://maps.app.goo.gl/TMj4ZoekmC11ruPi6"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <span className="hidden md:block">
                  BLK 171 LOT 1 Calachuchi st. Baranggay Pembo, Taguig City
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Main Navigation - Keeping your original design */}
        <div className=" bg-gradient-to-r from-gray-900 to-gray-700 backdrop-blur supports-[backdrop-filter]:bg-black/70">
          <div className="container flex h-16 md:h-20 items-center justify-between px-4 md:px-6">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/logo3.png"
                alt="Freshly painted bike"
                className="h-8 md:h-16"
              />
              <img
                src="/logo1.png"
                alt="Repli Painting"
                className="h-8 md:h-10"
              />
            </Link>

            {isMobile ? (
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant=""
                    size="icon"
                    className="md:hidden bg-transparent hover:bg-transparent"
                  >
                    <Menu className="h-6 w-6 text-white" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[300px] sm:w-[400px] overflow-y-auto max-h-screen"
                >
                  <nav className="flex flex-col gap-4 pt-16 pb-20">
                    {navigation.map((item) =>
                      item.dropdown ? (
                        <Collapsible key={item.name} className="w-full">
                          <CollapsibleTrigger className="flex w-full items-center justify-between px-2 py-1 text-lg font-medium hover:text-gray-600">
                            {item.name}
                            <ChevronRight className="h-5 w-5 transition-transform duration-200 ui-open:rotate-90" />
                          </CollapsibleTrigger>
                          <CollapsibleContent className="pl-4 border-l-2 border-gray-200 mt-2 space-y-2">
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block py-1 text-sm hover:text-gray-600"
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </CollapsibleContent>
                        </Collapsible>
                      ) : (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-2 py-1 text-lg font-medium hover:text-gray-600"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )
                    )}
                    <Button
                      className="mt-4 bg-gradient-to-r from-blue-500 to-purple-600"
                      asChild
                    >
                      <Link
                        href="/get-a-quote"
                        onClick={() => setIsOpen(false)}
                      >
                        Get a Quote
                      </Link>
                    </Button>
                  </nav>
                </SheetContent>
              </Sheet>
            ) : (
              <nav className="hidden gap-6 md:flex">
                {navigation.map((item) =>
                  item.dropdown ? (
                    <div
                      key={item.name}
                      className="relative group"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white"
                      >
                        {item.name} <ChevronDown className="h-4 w-4" />
                      </Link>
                      <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                        <div className="py-1">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-sm font-medium transition-colors text-gray-300 hover:text-white"
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </nav>
            )}

            <div className="hidden md:block">
              <Button
                asChild
                className="bg-gradient-to-r from-blue-500 to-purple-600"
              >
                <Link href="/get-a-quote">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>
      {/* Add a spacer to prevent content from jumping when header becomes fixed */}
      <div className="h-[calc(4rem+2.5rem)]"></div>
    </>
  );
}
