import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Shield, CheckCircle, AlertCircle } from "lucide-react";

export default function WarrantyPage() {
  const warrantyItems = [
    {
      title: "Limited Lifetime Warranty",
      description:
        "Our carbon repairs come with a limited lifetime warranty against defects in workmanship.",
      icon: <Shield className="h-8 w-8 text-green-500" />,
    },
    {
      title: "Paint Warranty",
      description:
        "All paint work is warranted against peeling, cracking, or bubbling for a period of 2 years from the date of service.",
      icon: <CheckCircle className="h-8 w-8 text-green-500" />,
    },
    {
      title: "Rim Warranty",
      description:
        "Our rims come with a 1-year warranty against manufacturing defects.",
      icon: <CheckCircle className="h-8 w-8 text-green-500" />,
    },
  ];

  const exclusions = [
    "Damage from crashes, accidents, or improper use",
    "Normal wear and tear",
    "Damage from improper maintenance",
    "Modifications made by anyone other than Repli-Painting/Works",
    "Damage from exposure to extreme conditions",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-gray-900">
        <Image
          src="/work5.jpg"
          alt="Warranty Information"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-4xl text-center md:text-5xl font-bold text-white tracking-wide mb-6">
            WARRANTY
          </h1>
          <div className="text-white text-lg">
            <Link href="/" className="hover:text-yellow-400">
              HOME
            </Link>
            <span className="mx-2 text-yellow-300">{">"}</span>
            <span>WARRANTY</span>
          </div>
        </div>
      </div>

      <div className="container px-4 py-12 md:px-6 md:py-24">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Warranty Policy
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We stand behind our work with comprehensive warranty coverage.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            {warrantyItems.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <CardTitle className="text-center">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-500">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <AlertCircle className="h-8 w-8 text-amber-500" />
              </div>
              <CardTitle className="text-center">Warranty Exclusions</CardTitle>
              <CardDescription className="text-center">
                Our warranty does not cover the following conditions:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2">
                {exclusions.map((item, index) => (
                  <li key={index} className="text-gray-500">
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="mt-12">
            <CardHeader>
              <CardTitle>How to Make a Warranty Claim</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-500">
                If you believe your product is eligible for warranty service,
                please follow these steps:
              </p>
              <ol className="list-decimal pl-6 space-y-4">
                <li className="text-gray-500">
                  <span className="font-medium text-gray-900">Contact Us:</span>{" "}
                  Reach out to our customer service team at
                  info@repli-painting.com or call 09951648978.
                </li>
                <li className="text-gray-500">
                  <span className="font-medium text-gray-900">
                    Provide Details:
                  </span>{" "}
                  Be ready to provide your order number, photos of the issue,
                  and a description of the problem.
                </li>
                <li className="text-gray-500">
                  <span className="font-medium text-gray-900">Evaluation:</span>{" "}
                  Our team will evaluate your claim and determine if it's
                  covered under warranty.
                </li>
                <li className="text-gray-500">
                  <span className="font-medium text-gray-900">Resolution:</span>{" "}
                  If approved, we'll provide instructions for returning the item
                  for repair or replacement.
                </li>
              </ol>
              <p className="text-gray-500 mt-4">
                Please note that shipping costs for warranty claims may be the
                responsibility of the customer, depending on the circumstances.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
