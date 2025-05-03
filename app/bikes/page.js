import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function BikesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-gray-900">
        <Image
          src="/work7.jpg"
          alt="Bikes Coming Soon"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-4xl text-center md:text-5xl font-bold text-white tracking-wide mb-6">
            BIKES COLLECTION
          </h1>
          <div className="text-white text-lg">
            <Link href="/" className="hover:text-yellow-400">
              HOME
            </Link>
            <span className="mx-2 text-yellow-300">{">"}</span>
            <span>BIKES</span>
          </div>
        </div>
      </div>

      {/* Coming Soon Section */}
      <div className="container mx-auto py-32 px-4 md:px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-8">
          Coming <span className="text-violet-500">Soon</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
          We're working on our new collection of premium bikes. Stay tuned for
          an amazing selection of high-quality bicycles.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button
            asChild
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-8 py-6 rounded-full"
          >
            <Link href="/get-a-quote">
              GET NOTIFIED WHEN AVAILABLE{" "}
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-2 border-gray-300 font-semibold px-8 py-6 rounded-full"
          >
            <Link href="/rims">
              BROWSE RIMS COLLECTION <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
