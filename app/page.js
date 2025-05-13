import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Paintbrush,
  Wrench,
  ShoppingCart,
  Gift,
  Check,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen mt-[-100px]">
      {/* Hero Section */}
      <section className="w-full relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 h-full">
            <div className="relative h-full">
              <Image
                src="/work4.jpg"
                alt="Bike repair tools"
                fill
                className="object-cover brightness-50"
                priority
              />
            </div>
            <div className="relative h-full">
              <Image
                src="/work8.jpg"
                alt="Carbon bike frame"
                fill
                className="object-cover brightness-50"
                priority
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <div className="space-y-4 max-w-4xl bg-black/60 p-10 ">
            <Image
              src="/logo11.png"
              alt="Repli Painting"
              width={450}
              height={150}
              className="mx-auto"
              priority
            />
            <h2 className="text-2xl md:text-2xl font-medium uppercase tracking-wider">
              BICYCLE
            </h2>
            <h1 className="text-3xl md:text-3xl font-bold">
              <span className="text-violet-300">CARBON</span> REPAIR &{" "}
              <span className="text-violet-300">CUSTOM</span> PAINT
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="/get-a-quote">
                <Button
                  className="bg-gradient-to-r from-blue-500 to-purple-600
 text-white hover:bg-yellow-500  font-bold px-8 py-6 rounded-full text-sm"
                >
                  GET A QUOTE <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button className="bg-transparent hover:bg-white/20 border-2 border-white text-white font-bold px-8 py-6 rounded-full text-sm">
                  OUR SERVICES
                </Button>
              </Link>
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
                About Us
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We offer professional bike repainting services and premium
                quality rims for all types of bikes.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex items-center space-x-4 rounded-lg bg-gray-50 p-4">
                <Paintbrush className="h-10 w-10 text-violet-700" />
                <div className="space-y-1">
                  <h3 className="text-xl    text-violet-700">
                    Custom Repainting
                  </h3>
                  <p className="text-gray-500">
                    Professional bike repainting with custom colors, designs,
                    and finishes.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4 rounded-lg bg-gray-50 p-4">
                <Wrench className="h-10 w-10 text-violet-700" />
                <div className="space-y-1">
                  <h3 className="text-xl  text-violet-700">
                    Frame Restoration
                  </h3>
                  <p className="text-gray-500">
                    Complete frame restoration including rust removal and
                    surface preparation.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4 rounded-lg bg-gray-50 p-4">
                <ShoppingCart className="h-8 w-8  text-violet-700" />
                <div className="space-y-1">
                  <h3 className="text-xl   text-violet-700">Premium Rims</h3>
                  <p className="text-gray-500">
                    High-quality rims for road bikes, mountain bikes, and more.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/home.jpg"
                alt="Bike rim selection"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="space-y-8 max-w-2xl mx-auto p-4">
          {/* Facebook Profile */}
          <div className="border rounded-lg shadow-sm overflow-hidden">
            <div className="bg-white p-4">
              <div className="flex items-center gap-4">
                <Link
                  href="https://www.facebook.com/RepliPainting1218CA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 flex items-center justify-center">
                    <div className="w-[92%] h-[92%] rounded-full overflow-hidden border-2 border-white">
                      <img
                        src="/sm1.jpg"
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </Link>
                <div className="flex-1">
                  <div className="flex flex-col">
                    <Link
                      href="https://www.facebook.com/RepliPainting1218CA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:underline"
                    >
                      <h3 className="font-bold text-lg">REPLI Painting</h3>
                    </Link>
                    <div className="text-sm text-gray-500">
                      @RepliPainting1218CA
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Link
                    href="https://www.facebook.com/RepliPainting1218CA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white rounded-md px-4 py-1.5 text-sm font-medium"
                  >
                    Follow
                  </Link>
                  <Link
                    href="https://www.facebook.com/RepliPainting1218CA/messages"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-200 text-black rounded-md px-4 py-1.5 text-sm font-medium hidden md:block"
                  >
                    Message
                  </Link>
                </div>
              </div>

              <div className="flex gap-6 mt-4 text-sm">
                <div className="flex items-center gap-1">
                  <div className="font-semibold">260K </div>
                  <div className="text-gray-500">Followers</div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="font-semibold">9</div>
                  <div className="text-gray-500">Following</div>
                </div>
              </div>

              <div className="mt-4 text-sm">
                <div className="text-gray-700">Custom bike painting</div>
                <div className="text-gray-700">
                  Blk 171 Lot 1 Calachuchi St. Pembo, Taguig City
                </div>
              </div>
            </div>
          </div>

          {/* TikTok Profile */}
          <div className="border rounded-lg shadow-sm overflow-hidden">
            <div className="bg-white p-4">
              <div className="flex items-start gap-4">
                <Link
                  href="https://www.tiktok.com/@repliworx?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative"
                >
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200">
                    <img
                      src="/sm2.jpeg"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Link>
                <div className="flex-1">
                  <Link
                    href="https://www.tiktok.com/@repliworx?lang=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    <h3 className="font-bold text-lg">@repliworx</h3>
                  </Link>
                  <div className="text-sm font-medium text-gray-500">
                    REPLI Painting
                  </div>

                  <div className="flex gap-4 mt-3">
                    <Link
                      href="https://www.tiktok.com/@repliworx?lang=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#fe2c55] text-white rounded-md px-6 py-1.5 text-sm font-medium"
                    >
                      Follow
                    </Link>
                    <button className="bg-transparent border border-gray-300 rounded-md px-2 py-1.5">
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex gap-6 mt-4 text-sm">
                <div>
                  <div className="font-semibold">226</div>
                  <div className="text-gray-500">Following</div>
                </div>
                <div>
                  <div className="font-semibold">132K</div>
                  <div className="text-gray-500">Followers</div>
                </div>
                <div>
                  <div className="font-semibold">1.7M</div>
                  <div className="text-gray-500">Likes</div>
                </div>
              </div>

              <div className="mt-4 text-sm">
                <div className="text-gray-700">
                  Custom bike painting from the Philippines
                </div>
                <div className="text-gray-700">📩 DM for quote 📩</div>
                <div className="text-gray-700">📞 0995 164 8978</div>
              </div>
            </div>

            <div className="flex border-t">
              <button className="flex-1 py-2 font-medium text-center border-b-2 border-black">
                Videos
              </button>
              <button className="flex-1 py-2 font-medium text-center text-gray-500">
                Liked
              </button>
            </div>
          </div>
        </div>
      </section>

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
            {/* Testimonial 1 */}
            <div className="flex flex-col justify-between rounded-lg border bg-white p-6 shadow-sm">
              <div className="space-y-4">
                <p className="text-sm font-medium leading-none  text-yellow-400">
                  ★★★★★
                </p>
                <h3 className="text-lg font-bold">Great Experience</h3>
                <p className="text-sm text-gray-500">
                  "Great experience, on time ang expected finish ng project.
                  Communication is there. Maganda rin magsuggest. Finished
                  product exceeds your expectations."
                </p>
              </div>
              <div className="flex items-center space-x-4 pt-4">
                <img
                  src="/c1.jpg"
                  alt="Francis Anthoney Bautista Tizon"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium">
                    Francis Anthoney Bautista Tizon
                  </p>
                  <p className="text-xs text-gray-500">a year ago</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="flex flex-col justify-between rounded-lg border bg-white p-6 shadow-sm">
              <div className="space-y-4">
                <p className="text-sm font-medium leading-none  text-yellow-400">
                  ★★★★★
                </p>
                <h3 className="text-lg font-bold">Exceeded Expectations</h3>
                <p className="text-sm text-gray-500">
                  "Sobrang napahanga ako sa gawa ni Sir Neil, Ang ganda ng
                  kinalabasan kahit inabot ng ilang weeks sulit na sulit naman,
                  wala akong masabi kundi WOWWW galing mo sir 'REPLI PAINTING' I
                  highly recommend 100%"
                </p>
              </div>
              <div className="flex items-center space-x-4 pt-4">
                <img
                  src="/c2.jpg"
                  alt="Lua Azol"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium">Lua Azol</p>
                  <p className="text-xs text-gray-500">a year ago</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="flex flex-col justify-between rounded-lg border bg-white p-6 shadow-sm">
              <div className="space-y-4">
                <p className="text-sm font-medium leading-none text-yellow-400">
                  ★★★★★
                </p>
                <h3 className="text-lg font-bold">Pulido at Quality</h3>
                <p className="text-sm text-gray-500">
                  "Highly recommended! Sobra pulido at quality ng gawa! Kung
                  puede lang pa repaint every month haha!"
                </p>
              </div>
              <div className="flex items-center space-x-4 pt-4">
                <img
                  src="/c3.jpg"
                  alt="Arnold Samson"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium">Arnold Samson</p>
                  <p className="text-xs text-gray-500">a year ago</p>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews Link */}
          <div className="text-center mt-8">
            <a
              href="https://www.facebook.com/RepliPainting1218CA/reviews" // Replace with your actual link
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-medium hover:underline"
            >
              Read more reviews on Facebook →
            </a>
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
                <h3 className="font-semibold"></h3>
                <p className="text-sm text-gray-500"></p>
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
                <h3 className="font-semibold"></h3>
                <p className="text-sm text-gray-500"></p>
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
                <h3 className="font-semibold"></h3>
                <p className="text-sm text-gray-500"></p>
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
                <h3 className="font-semibold"></h3>
                <p className="text-sm text-gray-500"></p>
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
                <h3 className="font-semibold"></h3>
                <p className="text-sm text-gray-500"></p>
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
                <h3 className="font-semibold"></h3>
                <p className="text-sm text-gray-500"></p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <Link href="/get-a-quote">
              <Button className=" bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:bg-gray-800">
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
                <Button className=" bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:bg-gray-800">
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
