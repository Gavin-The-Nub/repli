import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Phone, Mail, MapPin, Navigation, Truck } from "lucide-react";

export default function LocationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-gray-900">
        <Image
          src="/work3.jpg"
          alt="Our Location"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-4xl text-center md:text-5xl font-bold text-white tracking-wide mb-6">
            OUR LOCATION
          </h1>
          <div className="text-white text-lg">
            <Link href="/" className="hover:text-yellow-400">
              HOME
            </Link>
            <span className="mx-2 text-yellow-300">{">"}</span>
            <span>LOCATION</span>
          </div>
        </div>
      </div>

      <div className="container px-4 py-12 md:px-6 md:py-24">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Visit Our Workshop
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find us in Taguig City or reach out through any of our contact
              channels.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                Reach out to us directly through any of these channels.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-gray-500" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-sm text-gray-500">09951648978</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-gray-500" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-sm text-gray-500">
                    info@repli-painting.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-gray-500" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-sm text-gray-500">
                    BLK 171 LOT 1 Calachuchi st.
                  </p>
                  <p className="text-sm text-gray-500">
                    Baranggay Pembo, Taguig City
                  </p>
                  <div className="mt-2">
                    <a
                      href="https://maps.app.goo.gl/TMj4ZoekmC11ruPi6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-gray-900 hover:underline"
                    >
                      <Navigation className="mr-1 h-4 w-4" />
                      View on Google Maps
                    </a>
                  </div>
                  <div className="mt-1">
                    <p className="text-sm text-gray-500 flex items-center">
                      <Truck className="mr-1 h-4 w-4" />
                      Lalamove: Repli-Painting/Works
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Business Hours</CardTitle>
              <CardDescription>
                When you can visit our workshop or call us.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Our Location</CardTitle>
              <CardDescription>
                Visit our workshop in Taguig City.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0 overflow-hidden rounded-b-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.2724304888824!2d121.05776!3d14.5367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8f8a0000001%3A0x7c0b7d2d1f1a1a1a!2sRepli-Painting%2FWorks!5e0!3m2!1sen!2sph!4v1617345678901!5m2!1sen!2sph"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Repli-Painting/Works Location"
              ></iframe>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
