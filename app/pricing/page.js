import Link from "next/link";
import Image from "next/image";
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
  return (
    <div className="min-h-screen bg-white mb-14">
      <div className="relative h-[50vh] bg-gray-900">
        <Image
          src="/work8.jpg"
          alt="Full Service Workshop"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-4xl text-center md:text-5xl font-bold text-white tracking-wide mb-6">
            OUR PRICING
          </h1>
          <div className="text-white text-lg">
            <Link href="/" className="hover:text-yellow-400">
              HOME
            </Link>
            <span className="mx-2 text-yellow-300">{">"}</span>
            <span>PRICING</span>
          </div>
        </div>
      </div>

      <Tabs defaultValue="frame-painting" className="mt-12 ">
        <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-2 sm:grid-cols-4 gap-2 mb-12">
          <TabsTrigger value="frame-painting">Frame Painting</TabsTrigger>
          <TabsTrigger value="parts">Parts Painting</TabsTrigger>
          <TabsTrigger value="touch-up">Touch-Up</TabsTrigger>
          <TabsTrigger value="ppf">PPF Bike Skin</TabsTrigger>
        </TabsList>

        {/* Frame Painting Tab */}
        <TabsContent value="frame-painting" className="mt-8 mx-4 md:mx-10">
          <div className="space-y-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold">Frame Painting Services</h2>
              <p className="mt-2 text-gray-500">
                Professional frame painting with options for basic, advance, and
                decorative finishes.
              </p>
            </div>

            <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
              <table className="w-full border-collapse min-w-[600px] sm:min-w-0">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-3 text-left">Frame Type</th>
                    <th className="border p-3 text-center">Basic</th>
                    <th className="border p-3 text-center">Advance</th>
                    <th className="border p-3 text-center">Decorative</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3">Road Bike (Carbon)</td>
                    <td className="border p-3 text-center">₱8,999</td>
                    <td className="border p-3 text-center">₱12,999</td>
                    <td className="border p-3 text-center">₱18,999</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border p-3">Road Bike (Alloy/Steel)</td>
                    <td className="border p-3 text-center">₱5,999</td>
                    <td className="border p-3 text-center">₱9,999</td>
                    <td className="border p-3 text-center">₱13,999</td>
                  </tr>
                  <tr>
                    <td className="border p-3">MTB (Carbon)</td>
                    <td className="border p-3 text-center">₱9,999</td>
                    <td className="border p-3 text-center">₱12,999</td>
                    <td className="border p-3 text-center">₱18,999</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border p-3">MTB (Alloy/Steel)</td>
                    <td className="border p-3 text-center">₱5,999</td>
                    <td className="border p-3 text-center">₱9,999</td>
                    <td className="border p-3 text-center">₱15,999</td>
                  </tr>
                  <tr>
                    <td className="border p-3">Full Suspension (Carbon)</td>
                    <td className="border p-3 text-center">₱10,999</td>
                    <td className="border p-3 text-center">₱14,999</td>
                    <td className="border p-3 text-center">₱19,999</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border p-3">Full Suspension (Alloy)</td>
                    <td className="border p-3 text-center">₱8,999</td>
                    <td className="border p-3 text-center">₱13,999</td>
                    <td className="border p-3 text-center">₱18,999</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Basic</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Single color with painted decals</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Single color application</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Painted decals</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Standard finish</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Advance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Multi-color with medium designs</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Multi-color application</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Medium complexity designs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Matte/gloss finish options</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Hypershifting colors (Chameleon, Pearl)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Decorative</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Super detailed designs and special techniques</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Super detailed designs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Airbrush techniques</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Hydro graphics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Premium finish</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center mt-8">
              <Link href="/contact">
                <Button className=" bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:bg-gray-800">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
        </TabsContent>

        {/* Touch-Up Tab */}
        <TabsContent value="touch-up" className="mt-8 ">
          <div className="space-y-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold">Paint Touch-Up Services</h2>
              <p className="mt-2 text-gray-500">
                Professional touch-up services to repair paint damage and
                restore your bike's appearance.
              </p>
            </div>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Basic Touch-Up</CardTitle>
                  <CardDescription>Spot touch-up</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mt-4 text-2xl font-bold">₱4,999</div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Small area repair</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Color matching</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Seamless blending</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/contact" className="w-full">
                    <Button className="w-full  bg-gradient-to-r from-gray-900 to-gray-700  text-white hover:bg-gray-800">
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
                  <div className="mt-4 text-2xl font-bold">₱8,999</div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Multiple area repair</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Precise color matching</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Surface preparation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Clear coat application</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/contact" className="w-full">
                    <Button className="w-full bg-gradient-to-r from-gray-900 to-gray-700  text-white hover:bg-gray-800">
                      Book Now
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Complex Touch-Up</CardTitle>
                  <CardDescription>Major paint damage</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mt-4 text-2xl font-bold">₱12,999</div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Major damage repair</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Extensive surface preparation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Complete color restoration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Multiple clear coat layers</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/contact" className="w-full">
                    <Button className="w-full bg-gradient-to-r from-gray-900 to-gray-700  text-white hover:bg-gray-800">
                      Book Now
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* PPF Bike Skin Tab */}
        <TabsContent value="ppf" className="mt-8">
          <div className="space-y-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold">PPF Bike Skin</h2>
              <p className="mt-2 text-gray-500">
                Protect your bike's paint with our premium Paint Protection Film
                (PPF).
              </p>
            </div>

            <div className="max-w-2xl mx-auto mt-8 px-4 sm:px-0">
              <Card className="border-2 border-gray-900">
                <CardHeader>
                  <CardTitle className="text-center text-xl sm:text-2xl">
                    PPF Bike Skin Protection
                  </CardTitle>
                  <CardDescription className="text-center text-base sm:text-lg">
                    Premium paint protection for all bike types
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mt-4 text-2xl sm:text-3xl font-bold">
                    ₱4,999
                  </div>
                  <p className="mt-2 text-gray-500">
                    Available for all bike types:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Hardtail</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Full Suspension</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>MTB (Time Trial Bikes)</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Road Bike (RB)</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Gravel</span>
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    <h3 className="font-semibold">
                      Benefits of PPF Bike Skin:
                    </h3>
                    <ul className="space-y-2 text-left max-w-md mx-auto">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span>Protects against scratches and chips</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span>UV protection prevents fading</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span>Self-healing properties for minor scratches</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span>Preserves resale value</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span>Virtually invisible protection</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="justify-center">
                  <Link href="/contact">
                    <Button className=" bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:bg-gray-800">
                      Book PPF Installation
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Parts Painting Tab */}
        <TabsContent value="parts" className="mt-8 mx-4 md:mx-10">
          <div className="space-y-6 ">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold">Other Parts Painting</h2>
              <p className="mt-2 text-gray-500">
                Customize individual bike components with our professional
                painting services.
              </p>
            </div>

            <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
              <table className="w-full border-collapse min-w-[600px] sm:min-w-0">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-3 text-left">Part</th>
                    <th className="border p-3 text-center">Basic</th>
                    <th className="border p-3 text-center">Advance</th>
                    <th className="border p-3 text-center">Decorative</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3">Fork</td>
                    <td className="border p-3 text-center">₱3,499</td>
                    <td className="border p-3 text-center">₱4,499</td>
                    <td className="border p-3 text-center">₱7,499</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border p-3">Wheels</td>
                    <td className="border p-3 text-center">₱8,999</td>
                    <td className="border p-3 text-center">₱12,999</td>
                    <td className="border p-3 text-center">₱18,999</td>
                  </tr>
                  <tr>
                    <td className="border p-3">Handlebar</td>
                    <td className="border p-3 text-center">₱1,499</td>
                    <td className="border p-3 text-center">₱1,499</td>
                    <td className="border p-3 text-center">₱2,499</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border p-3">Stem</td>
                    <td className="border p-3 text-center">₱999</td>
                    <td className="border p-3 text-center">₱1,499</td>
                    <td className="border p-3 text-center">₱1,999</td>
                  </tr>
                  <tr>
                    <td className="border p-3">Dropbar (Full Integrated)</td>
                    <td className="border p-3 text-center">₱2,499</td>
                    <td className="border p-3 text-center">₱2,999</td>
                    <td className="border p-3 text-center">₱4,499</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border p-3">Crankset</td>
                    <td className="border p-3 text-center">₱3,999</td>
                    <td className="border p-3 text-center">₱5,999</td>
                    <td className="border p-3 text-center">₱7,999</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 max-w-3xl mx-auto">
              <h3 className="text-xl font-bold mb-4">Paint Types Explained</h3>
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-3">
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

            <div className="flex justify-center mt-8">
              <Link href="/contact">
                <Button className=" bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:bg-gray-800">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-16 text-center px-4 sm:px-0">
        <h2 className="text-xl sm:text-2xl font-bold">
          Looking for Premium Bike Rims?
        </h2>
        <p className="mt-2 text-gray-500 max-w-2xl mx-auto">
          Check out our selection of high-quality carbon fiber rims and
          wheelsets for optimal performance.
        </p>
        <Link href="/rims" className="mt-6 inline-block">
          <Button className=" bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:bg-gray-800">
            View Our Rims
          </Button>
        </Link>
      </div>
    </div>
  );
}
