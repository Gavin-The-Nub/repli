import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle } from "lucide-react";

export default function ServicesPage() {
  const rimTypes = [
    {
      title: "Set A - Asymmetric Profile",
      description:
        "Premium carbon fiber rims with different front/rear specifications",
      variants: [
        {
          name: "Set A1 - Pair of Rims Only",
          price: "₱5,499 only",
          specs: ["Front: 40mm depth, 20 holes", "Rear: 50mm depth, 24 holes"],
        },
        {
          name: "Set A2 - Complete Wheelset",
          price: "₱12,999 only",
          specs: [
            "Front: 40mm depth, 20 holes",
            "Rear: 50mm depth, 24 holes",
            "NOVATECH HUB",
            "Boost and QR available",
            "For disc or rim brakes",
          ],
        },
      ],
      image: "/rim2.jpg",
    },
    {
      title: "Set B - Symmetric Profile",
      description:
        "Premium carbon fiber rims with matching front/rear specifications",
      variants: [
        {
          name: "Set B1 - Pair of Rims Only",
          price: "₱5,499 only",
          specs: ["Front: 50mm depth, 24 holes", "Rear: 50mm depth, 24 holes"],
        },
        {
          name: "Set B2 - Complete Wheelset",
          price: "₱12,999 only",
          specs: [
            "Front: 50mm depth, 24 holes",
            "Rear: 50mm depth, 24 holes",
            "NOVATECH HUB",
            "Boost and QR available",
            "For disc or rim brakes",
          ],
        },
      ],
      image: "/rim1.webp",
    },
  ];

  return (
    <div className="container px-4 py-8 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Services
          </h1>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Professional bike repainting services and premium quality rims.
          </p>
        </div>
      </div>

      <Tabs defaultValue="frame-painting" className="mt-8 md:mt-12">
        <div className="overflow-x-auto pb-2">
          <TabsList className="inline-flex w-auto min-w-full md:grid md:w-full md:max-w-4xl md:mx-auto md:grid-cols-5">
            <TabsTrigger value="frame-painting" className="whitespace-nowrap">
              Frame Painting
            </TabsTrigger>
            <TabsTrigger value="touch-up" className="whitespace-nowrap">
              Touch-Up
            </TabsTrigger>
            <TabsTrigger value="ppf" className="whitespace-nowrap">
              PPF Bike Skin
            </TabsTrigger>
            <TabsTrigger value="parts" className="whitespace-nowrap">
              Parts Painting
            </TabsTrigger>
            <TabsTrigger value="rims" className="whitespace-nowrap">
              Bike Rims
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Frame Painting Tab */}
        <TabsContent value="frame-painting" className="mt-6 md:mt-8">
          <div className="space-y-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-xl md:text-2xl font-bold">
                Frame Painting Services
              </h2>
              <p className="mt-2 text-sm md:text-base text-gray-500">
                Professional frame painting with options for basic, advance, and
                decorative finishes.
              </p>
            </div>

            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-2 md:p-3 text-left text-sm md:text-base">
                      Frame Type
                    </th>
                    <th className="border p-2 md:p-3 text-center text-sm md:text-base">
                      Basic
                    </th>
                    <th className="border p-2 md:p-3 text-center text-sm md:text-base">
                      Advance
                    </th>
                    <th className="border p-2 md:p-3 text-center text-sm md:text-base">
                      Decorative
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2 md:p-3 text-sm md:text-base">
                      Road Bike (Carbon)
                    </td>
                    <td className="border p-2 md:p-3 text-center text-sm md:text-base">
                      ₱8,999
                    </td>
                    <td className="border p-2 md:p-3 text-center text-sm md:text-base">
                      ₱12,999
                    </td>
                    <td className="border p-2 md:p-3 text-center text-sm md:text-base">
                      ₱18,999
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border p-2 md:p-3 text-sm md:text-base">
                      Road Bike (Alloy/Steel)
                    </td>
                    <td className="border p-2 md:p-3 text-center text-sm md:text-base">
                      ₱5,999
                    </td>
                    <td className="border p-2 md:p-3 text-center text-sm md:text-base">
                      ₱9,999
                    </td>
                    <td className="border p-2 md:p-3 text-center text-sm md:text-base">
                      ₱13,999
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-2 md:p-3 text-sm md:text-base">
                      MTB (Carbon)
                    </td>
                    <td className="border p-2 md:p-3 text-center text-sm md:text-base">
                      ₱9,999
                    </td>
                    <td className="border p-2 md:p-3 text-center text-sm md:text-base">
                      ₱12,999
                    </td>
                    <td className="border p-2 md:p-3 text-center text-sm md:text-base">
                      ₱18,999
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border p-2 md:p-3 text-sm md:text-base">
                      MTB (Alloy/Steel)
                    </td>
                    <td className="border p-2 md:p-3 text-center text-sm md:text-base">
                      ₱5,999
                    </td>
                    <td className="border p-2 md:p-3 text-center text-sm md:text-base">
                      ₱9,999
                    </td>
                    <td className="border p-2 md:p-3 text-center text-sm md:text-base">
                      ₱15,999
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-2 md:p-3 text-sm md:text-base">
                      Full Suspension (Carbon)
                    </td>
                    <td className="border p-2 md:p-3 text-center text-sm md:text-base">
                      ₱10,999
                    </td>
                    <td className="border p-2 md:p-3 text-center text-sm md:text-base">
                      ₱14,999
                    </td>
                    <td className="border p-2 md:p-3 text-center text-sm md:text-base">
                      ₱19,999
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border p-2 md:p-3 text-sm md:text-base">
                      Full Suspension (Alloy)
                    </td>
                    <td className="border p-2 md:p-3 text-center text-sm md:text-base">
                      ₱8,999
                    </td>
                    <td className="border p-2 md:p-3 text-center text-sm md:text-base">
                      ₱13,999
                    </td>
                    <td className="border p-2 md:p-3 text-center text-sm md:text-base">
                      ₱18,999
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-6 md:mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Basic</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm md:text-base">
                    Single color with painted decals
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm md:text-base">
                        Single color application
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm md:text-base">
                        Painted decals
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm md:text-base">
                        Standard finish
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Advance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm md:text-base">
                    Multi-color with medium designs
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm md:text-base">
                        Multi-color application
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm md:text-base">
                        Medium complexity designs
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm md:text-base">
                        Matte/gloss finish options
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm md:text-base">
                        Hypershifting colors (Chameleon, Pearl)
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="sm:col-span-2 md:col-span-1">
                <CardHeader>
                  <CardTitle>Decorative</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm md:text-base">
                    Super detailed designs and special techniques
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm md:text-base">
                        Super detailed designs
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm md:text-base">
                        Airbrush techniques
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm md:text-base">
                        Hydro graphics
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm md:text-base">
                        Premium finish
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center mt-6 md:mt-8">
              <Link href="/contact">
                <Button className="bg-gray-900 text-white hover:bg-gray-800">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
        </TabsContent>

        {/* Touch-Up Tab */}
        <TabsContent value="touch-up" className="mt-6 md:mt-8">
          <div className="space-y-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-xl md:text-2xl font-bold">
                Paint Touch-Up Services
              </h2>
              <p className="mt-2 text-sm md:text-base text-gray-500">
                Professional touch-up services to repair paint damage and
                restore your bike's appearance.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-6 md:mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Basic Touch-Up</CardTitle>
                  <CardDescription>Spot touch-up</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mt-4 text-xl md:text-2xl font-bold">
                    ₱4,999
                  </div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm md:text-base">
                        Small area repair
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm md:text-base">
                        Color matching
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm md:text-base">
                        Seamless blending
                      </span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/contact" className="w-full">
                    <Button className="w-full bg-gray-900 text-white hover:bg-gray-800">
                      Book Now
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Advance Touch-Up</CardTitle>
                  <CardDescription>Multiple touch-ups</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mt-4 text-xl md:text-2xl font-bold">
                    ₱8,999
                  </div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm md:text-base">
                        Multiple area repair
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm md:text-base">
                        Precise color matching
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm md:text-base">
                        Surface preparation
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm md:text-base">
                        Clear coat application
                      </span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/contact" className="w-full">
                    <Button className="w-full bg-gray-900 text-white hover:bg-gray-800">
                      Book Now
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="sm:col-span-2 md:col-span-1">
                <CardHeader>
                  <CardTitle>Complex Touch-Up</CardTitle>
                  <CardDescription>Major paint damage</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mt-4 text-xl md:text-2xl font-bold">
                    ₱12,999
                  </div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm md:text-base">
                        Major damage repair
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm md:text-base">
                        Extensive surface preparation
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm md:text-base">
                        Complete color restoration
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm md:text-base">
                        Multiple clear coat layers
                      </span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/contact" className="w-full">
                    <Button className="w-full bg-gray-900 text-white hover:bg-gray-800">
                      Book Now
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* PPF Bike Skin Tab */}
        <TabsContent value="ppf" className="mt-6 md:mt-8">
          <div className="space-y-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-xl md:text-2xl font-bold">PPF Bike Skin</h2>
              <p className="mt-2 text-sm md:text-base text-gray-500">
                Protect your bike's paint with our premium Paint Protection Film
                (PPF).
              </p>
            </div>

            <div className="max-w-2xl mx-auto mt-6 md:mt-8">
              <Card className="border-2 border-gray-900">
                <CardHeader>
                  <CardTitle className="text-center text-xl md:text-2xl">
                    PPF Bike Skin Protection
                  </CardTitle>
                  <CardDescription className="text-center text-base md:text-lg">
                    Premium paint protection for all bike types
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mt-4 text-2xl md:text-3xl font-bold">
                    ₱4,999
                  </div>
                  <p className="mt-2 text-sm md:text-base text-gray-500">
                    Available for all bike types:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm md:text-base">Hardtail</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm md:text-base">
                        Full Suspension
                      </span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm md:text-base">
                        MTB (Time Trial Bikes)
                      </span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm md:text-base">
                        Road Bike (RB)
                      </span>
                    </div>
                    <div className="flex items-center gap-2 justify-center sm:col-span-2">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm md:text-base">Gravel</span>
                    </div>
                  </div>

                  <div className="mt-6 md:mt-8 space-y-4">
                    <h3 className="font-semibold text-base md:text-lg">
                      Benefits of PPF Bike Skin:
                    </h3>
                    <ul className="space-y-2 max-w-md mx-auto text-left">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm md:text-base">
                          Protects against scratches and chips
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm md:text-base">
                          UV protection prevents fading
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm md:text-base">
                          Self-healing properties for minor scratches
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm md:text-base">
                          Preserves resale value
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm md:text-base">
                          Virtually invisible protection
                        </span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="justify-center">
                  <Link href="/contact">
                    <Button className="bg-gray-900 text-white hover:bg-gray-800">
                      Book PPF Installation
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Parts Painting Tab */}
        <TabsContent value="parts" className="mt-6 md:mt-8">
          <div className="space-y-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-xl md:text-2xl font-bold">
                Other Parts Painting
              </h2>
              <p className="mt-2 text-sm md:text-base text-gray-500">
                Customize individual bike components with our professional
                painting services.
              </p>
            </div>

            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-2 md:p-3 text-left text-sm md:text-base">
                      Part
                    </th>
                    <th className="border p-2 md:p-3 text-center text-sm md:text-base">
                      Basic
                    </th>
                    <th className="border p-2 md:p-3 text-center text-sm md:text-base">
                      Advance
                    </th>
                    <th className="border p-2 md:p-3 text-center text-sm md:text-base">
                      Decorative
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2 md:p-3 text-sm md:text-base">
                      Fork
                    </td>
                    <td className="border p-2 md:p-3 text-center text-sm md:text-base">
                      ₱3,499
                    </td>
                    <td className="border p-2 md:p-3 text-center text-sm md:text-base">
                      ₱4,499
                    </td>
                    <td className="border p-2 md:p-3 text-center text-sm md:text-base">
                      ₱7,499
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border p-2 md:p-3 text-sm md:text-base">
                      Wheels
                    </td>
                    <td className="border p-2 md:p-3 text-center text-sm md:text-base">
                      ₱8,999
                    </td>
                    <td className="border p-2 md:p-3 text-center text-sm md:text-base">
                      ₱12,999
                    </td>
                    <td className="border p-2 md:p-3 text-center text-sm md:text-base">
                      ₱18,999
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-2 md:p-3 text-sm md:text-base">
                      Handlebar
                    </td>
                    <td className="border p-2 md:p-3 text-center text-sm md:text-base">
                      ₱1,499
                    </td>
                    <td className="border p-2 md:p-3 text-center text-sm md:text-base">
                      ₱1,499
                    </td>
                    <td className="border p-2 md:p-3 text-center text-sm md:text-base">
                      ₱2,499
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border p-2 md:p-3 text-sm md:text-base">
                      Stem
                    </td>
                    <td className="border p-2 md:p-3 text-center text-sm md:text-base">
                      ₱999
                    </td>
                    <td className="border p-2 md:p-3 text-center text-sm md:text-base">
                      ₱1,499
                    </td>
                    <td className="border p-2 md:p-3 text-center text-sm md:text-base">
                      ₱1,999
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-2 md:p-3 text-sm md:text-base">
                      Dropbar (Full Integrated)
                    </td>
                    <td className="border p-2 md:p-3 text-center text-sm md:text-base">
                      ₱2,499
                    </td>
                    <td className="border p-2 md:p-3 text-center text-sm md:text-base">
                      ₱2,999
                    </td>
                    <td className="border p-2 md:p-3 text-center text-sm md:text-base">
                      ₱4,499
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border p-2 md:p-3 text-sm md:text-base">
                      Crankset
                    </td>
                    <td className="border p-2 md:p-3 text-center text-sm md:text-base">
                      ₱3,999
                    </td>
                    <td className="border p-2 md:p-3 text-center text-sm md:text-base">
                      ₱5,999
                    </td>
                    <td className="border p-2 md:p-3 text-center text-sm md:text-base">
                      ₱7,999
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 md:mt-8 max-w-3xl mx-auto">
              <h3 className="text-lg md:text-xl font-bold mb-4">
                Paint Types Explained
              </h3>
              <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-3">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold">Basic</h4>
                  <p className="mt-2 text-sm text-gray-600">
                    Single color with painted decals
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold">Advance</h4>
                  <p className="mt-2 text-sm text-gray-600">
                    Multi-color with medium designs, matte/gloss, hypershifting
                    colors (Chameleon, Pearl)
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold">Decorative</h4>
                  <p className="mt-2 text-sm text-gray-600">
                    Super detailed designs, airbrush, hydro graphics
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-6 md:mt-8">
              <Link href="/contact">
                <Button className="bg-gray-900 text-white hover:bg-gray-800">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
        </TabsContent>

        {/* Bike Rims Tab */}
        <TabsContent value="rims" className="mt-6 md:mt-8">
          <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2">
            {rimTypes.map((rim, index) => (
              <Card key={index}>
                <CardHeader>
                  <Image
                    src={rim.image || "/placeholder.svg"}
                    alt={rim.title}
                    width={400}
                    height={300}
                    className="rounded-t-lg object-cover w-full h-36 md:h-48"
                  />
                </CardHeader>
                <CardContent className="p-4 md:p-6">
                  <CardTitle className="text-lg md:text-xl">
                    {rim.title}
                  </CardTitle>
                  <CardDescription className="mt-2 text-sm md:text-base">
                    {rim.description}
                  </CardDescription>

                  <div className="mt-4 md:mt-6 space-y-3 md:space-y-4">
                    {rim.variants.map((variant, i) => (
                      <div key={i} className="rounded-lg bg-gray-50 p-3 md:p-4">
                        <h4 className="font-semibold text-sm md:text-base">
                          {variant.name}
                        </h4>
                        <p className="text-lg md:text-xl font-bold text-gray-900 mt-1">
                          {variant.price}
                        </p>
                        <ul className="mt-2 space-y-1 md:space-y-2">
                          {variant.specs.map((spec, j) => (
                            <li key={j} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                              <span className="text-xs md:text-sm">{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/contact" className="w-full">
                    <Button className="w-full bg-gray-900 text-white hover:bg-gray-800">
                      Order Now
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-8 md:mt-12 text-center">
            <h3 className="text-xl md:text-2xl font-bold">
              Premium Carbon Rim Features
            </h3>
            <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-500 max-w-3xl mx-auto">
              Our high-quality carbon fiber rims offer superior performance,
              weight savings, and durability. Each set is carefully manufactured
              to exacting specifications, providing optimal stiffness and
              aerodynamic properties for an enhanced riding experience.
            </p>
            <Link href="/contact" className="mt-4 md:mt-6 inline-block">
              <Button className="bg-gray-900 text-white hover:bg-gray-800">
                Contact to Order
              </Button>
            </Link>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
