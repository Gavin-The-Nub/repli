import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Paintbrush,
  Wrench,
  ShoppingCart,
  Phone,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Premium Bike Repainting & Quality Rims
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Transform your ride with our professional bike repainting
                  service and premium quality bike rims.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/services">
                  <Button className="bg-gray-900 text-white hover:bg-gray-800">
                    Our Services
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline">
                    Contact Us
                    <Phone className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/home.jpg"
                alt="Freshly painted bike"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Specialties
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We offer professional bike repainting services and premium
                quality rims for all types of bikes.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex items-center space-x-4 rounded-lg bg-gray-100 p-4">
                <Paintbrush className="h-10 w-10 text-gray-900" />
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Custom Repainting</h3>
                  <p className="text-gray-500">
                    Professional bike repainting with custom colors, designs,
                    and finishes.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4 rounded-lg bg-gray-100 p-4">
                <Wrench className="h-10 w-10 text-gray-900" />
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Frame Restoration</h3>
                  <p className="text-gray-500">
                    Complete frame restoration including rust removal and
                    surface preparation.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4 rounded-lg bg-gray-100 p-4">
                <ShoppingCart className="h-10 w-10 text-gray-900" />
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Premium Rims</h3>
                  <p className="text-gray-500">
                    High-quality rims for road bikes, mountain bikes, and more.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/special2.jpg"
                alt="Bike rim selection"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rim Product Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Premium Bike Rims
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                High-quality carbon fiber rims and wheelsets for optimal
                performance
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
            {/* Set A */}
            <div className="flex flex-col rounded-lg border bg-white overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold">
                  Set A - Asymmetric Profile
                </h3>
                <div className="mt-4 space-y-4">
                  <div className="rounded-lg bg-gray-50 p-4">
                    <p className="font-semibold">Set A1 - Pair of Rims Only</p>
                    <p className="text-xl font-bold text-gray-900 mt-1">
                      ₱5,499 only
                    </p>
                    <ul className="mt-2 text-sm text-gray-500 space-y-1">
                      <li>Front: 40mm depth, 20 holes</li>
                      <li>Rear: 50mm depth, 24 holes</li>
                    </ul>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <p className="font-semibold">Set A2 - Complete Wheelset</p>
                    <p className="text-xl font-bold text-gray-900 mt-1">
                      ₱12,999 only
                    </p>
                    <ul className="mt-2 text-sm text-gray-500 space-y-1">
                      <li>Front: 40mm depth, 20 holes</li>
                      <li>Rear: 50mm depth, 24 holes</li>
                      <li>NOVATECH HUB</li>
                      <li>Boost and QR available</li>
                      <li>For disc or rim brakes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Set B */}
            <div className="flex flex-col rounded-lg border bg-white overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold">Set B - Symmetric Profile</h3>
                <div className="mt-4 space-y-4">
                  <div className="rounded-lg bg-gray-50 p-4">
                    <p className="font-semibold">Set B1 - Pair of Rims Only</p>
                    <p className="text-xl font-bold text-gray-900 mt-1">
                      ₱5,499 only
                    </p>
                    <ul className="mt-2 text-sm text-gray-500 space-y-1">
                      <li>Front: 50mm depth, 24 holes</li>
                      <li>Rear: 50mm depth, 24 holes</li>
                    </ul>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <p className="font-semibold">Set B2 - Complete Wheelset</p>
                    <p className="text-xl font-bold text-gray-900 mt-1">
                      ₱12,999 only
                    </p>
                    <ul className="mt-2 text-sm text-gray-500 space-y-1">
                      <li>Front: 50mm depth, 24 holes</li>
                      <li>Rear: 50mm depth, 24 holes</li>
                      <li>NOVATECH HUB</li>
                      <li>Boost and QR available</li>
                      <li>For disc or rim brakes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/contact">
              <Button className="bg-gray-900 text-white hover:bg-gray-800">
                Contact Us to Order
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                What Our Customers Say
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Don't just take our word for it. Here's what our customers have
                to say about our services.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex flex-col justify-between rounded-lg border bg-white p-6 shadow-sm"
              >
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm font-medium leading-none">★★★★★</p>
                    <h3 className="text-lg font-bold">Amazing Results</h3>
                    <p className="text-sm text-gray-500">
                      "My bike looks brand new after the repaint. The attention
                      to detail was incredible and the color is exactly what I
                      wanted."
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 pt-4">
                  <div className="rounded-full bg-gray-200 h-10 w-10"></div>
                  <div>
                    <p className="text-sm font-medium">Customer {i}</p>
                    <p className="text-xs text-gray-500">Bike Enthusiast</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Work
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Check out some of our previously repainted bikes and custom
                projects.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden rounded-lg">
              <div className="relative h-80 w-full">
                <Image
                  src="/work1.jpg"
                  alt="Custom painted mountain bike with red and black design"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">Mountain Bike Restoration</h3>
                <p className="text-sm text-gray-500">
                  Complete frame restoration with custom red and black paint
                  scheme
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg">
              <div className="relative h-80 w-full">
                <Image
                  src="/work8.jpg"
                  alt="Vintage road bike with metallic blue finish"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">Vintage Road Bike</h3>
                <p className="text-sm text-gray-500">
                  Metallic blue finish with chrome accents and custom decals
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg">
              <div className="relative h-80 w-full">
                <Image
                  src="/work3.jpg"
                  alt="BMX bike with graffiti style custom paint"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">Custom BMX Design</h3>
                <p className="text-sm text-gray-500">
                  Urban graffiti inspired design with protective clear coat
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg">
              <div className="relative h-80 w-full">
                <Image
                  src="/work4.jpg"
                  alt="Gravel bike with gradient paint scheme"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">Gravel Bike Makeover</h3>
                <p className="text-sm text-gray-500">
                  Sunset gradient paint scheme with matte finish
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg">
              <div className="relative h-80 w-full">
                <Image
                  src="/work5.jpg"
                  alt="Racing bike with team colors"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">Racing Team Build</h3>
                <p className="text-sm text-gray-500">
                  Custom team colors with sponsor logos and high-gloss finish
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg">
              <div className="relative h-80 w-full">
                <Image
                  src="/work7.jpg"
                  alt="Commuter bike with minimalist design"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">Urban Commuter</h3>
                <p className="text-sm text-gray-500">
                  Minimalist design with scratch-resistant coating for daily use
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <Link href="/contact">
              <Button className="bg-gray-900 text-white hover:bg-gray-800">
                Get Your Bike Repainted
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Transform Your Bike?
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today to schedule a consultation or inquire about our
                premium bike rims.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button className="bg-gray-900 text-white hover:bg-gray-800">
                  Get a Quote
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline">Our Services</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
