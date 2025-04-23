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
import { CheckCircle, Gift } from "lucide-react";

export default function RimsPage() {
  const rimSets = [
    {
      title: "Set A - Asymmetric Profile",
      description: "40mm front x 50mm rear / 20x24 holes",
      variants: [
        {
          name: "SET A1 - Rims Only",
          price: "₱6,299",
          specs: ["40mm front depth, 20 holes", "50mm rear depth, 24 holes"],
        },
        {
          name: "SET A2 - Wheelset for Rim Brakes",
          price: "₱11,999",
          specs: [
            "40mm front depth, 20 holes",
            "50mm rear depth, 24 holes",
            "Novatec Hub 20x24 (A3612BT/F362TSBT)",
          ],
        },
        {
          name: "SET A3 - Wheelset for Fixed Gear",
          price: "₱11,999",
          specs: [
            "40mm front depth, 20 holes",
            "50mm rear depth, 24 holes",
            "Novatec hub 20x24",
          ],
        },
        {
          name: "SET A4 - Wheelset for Fixed Gear",
          price: "₱10,999",
          specs: [
            "40mm front depth, 20 holes",
            "50mm rear depth, 24 holes",
            "Polso hubs 20x24 FH001",
          ],
        },
      ],
      image: "/rims2.jpg",
    },
    {
      title: "Set B - Symmetric Profile",
      description: "50mm front x 50mm rear / 24x24 holes",
      variants: [
        {
          name: "SET B1 - Rims Only",
          price: "₱6,999",
          specs: ["50mm front depth, 24 holes", "50mm rear depth, 24 holes"],
        },
        {
          name: "SET B2 - Wheelset for Rim Brakes",
          price: "₱12,999",
          specs: [
            "50mm front depth, 24 holes",
            "50mm rear depth, 24 holes",
            "Novatec Hub 24x24 (A3612BT/F362TSBT)",
          ],
        },
        {
          name: "SET B3 - Wheelset for Disc Brakes",
          price: "₱15,499",
          specs: [
            "50mm front depth, 24 holes",
            "50mm rear depth, 24 holes",
            "Novatec Hub 24x24 (D791SB/D792SB)",
          ],
        },
      ],
      image: "/rim1.jpg",
    },
  ];

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            REPLI High-Gloss Rims
          </h1>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Premium carbon fiber rims and wheelsets for optimal performance
          </p>
        </div>
      </div>

      {/* Promotional Banner */}
      <div className="mx-auto max-w-5xl mt-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-6 shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Gift className="h-10 w-10 text-yellow-300" />
            <div>
              <h3 className="text-xl font-bold">Special Promotion!</h3>
              <p>Every purchase gives you a chance to win prizes!</p>
            </div>
          </div>
          <div className="text-sm md:text-base">
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Spin the wheel and win up to 50% discount on REPLI painting
              </li>
              <li>Cash back via GCash up to ₱1,000</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 mt-12">
        {rimSets.map((rim, index) => (
          <Card key={index}>
            <CardHeader>
              <Image
                src={rim.image || "/placeholder.svg"}
                alt={rim.title}
                width={400}
                height={300}
                className="rounded-t-lg object-cover w-full h-48"
              />
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle>{rim.title}</CardTitle>
              <CardDescription className="mt-2">
                {rim.description}
              </CardDescription>

              <div className="mt-6 space-y-4">
                {rim.variants.map((variant, i) => (
                  <div key={i} className="rounded-lg bg-gray-50 p-4">
                    <h4 className="font-semibold">{variant.name}</h4>
                    <p className="text-xl font-bold text-gray-900 mt-1">
                      {variant.price}
                    </p>
                    <ul className="mt-2 space-y-2">
                      {variant.specs.map((spec, j) => (
                        <li key={j} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/contact" className="w-full">
                <Button className="w-full bg-gradient-to-r from-gray-900 to-gray-700  text-white hover:bg-gray-800">
                  Order Now
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16">
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="text-2xl font-bold mb-4">
            REPLI High-Gloss Rim Features
          </h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Our high-quality carbon fiber rims offer superior performance,
              weight savings, and durability. Each set is carefully manufactured
              to exacting specifications, providing optimal stiffness and
              aerodynamic properties for an enhanced riding experience.
            </p>

            <h3 className="text-xl font-semibold mt-6">
              Why Choose REPLI Rims?
            </h3>
            <ul className="grid md:grid-cols-2 gap-3 mt-4">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Premium carbon fiber construction</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Lightweight design for improved acceleration</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Aerodynamic profile reduces drag</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>High-gloss finish for premium appearance</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Compatible with various hub types</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Excellent braking surface (for rim brake models)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Durable construction for long-term use</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Precision-engineered spoke holes</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <Link href="/contact">
          <Button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:bg-gray-800 px-8 py-6 text-lg">
            Contact Us to Order
          </Button>
        </Link>
      </div>
    </div>
  );
}
