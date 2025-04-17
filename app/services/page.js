import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function Service2Page() {
  const services = [
    {
      id: "carbon-repair",
      title: "CARBON REPAIR",
      titleHighlight: "CARBON",
      description:
        "We are the leading carbon repair specialists, we have seen it all and can fix it. Broken, cracked, nicked, or chipped, no problem. We provide the highest quality of workmanship and professional customer service in all our work. We ensure your carbon bicycle frames are safely repaired and while the paint might not be a perfect match, we'll do our best to make it blend in seamlessly. Our repairs are guaranteed with our limited lifetime warranty.",
      image: "/work1.jpg",
      imageAlt: "Carbon fiber repair close-up",
      imagePosition: "left",
    },
    {
      id: "custom-paint",
      title: "CUSTOM PAINT",
      titleHighlight: "CUSTOM",
      description:
        "Our experienced team will work with you to design your custom bike, the way you've always wanted. We will paint any bike manufacturers frame and any frame material or bicycle part. We specialize in custom projects.\n\nWith years of custom paint experience in various industries and it's his talent, techniques and attention to detail that sets us apart from our competitors. We are the best in the business!\n\nWe paint bikes directly for bike manufactuers. We do custom paint for limited edition sales, pro cycling teams, clubs, athletes and individuals. There is no limit on what we can do.",
      image: "/work3.jpg",
      imageAlt: "Custom painted bike frame",
      imagePosition: "right",
    },
    {
      id: "production-paint",
      title: "PRODUCTION PAINT",
      titleHighlight: "PRODUCTION",
      description:
        "We specialize in production painting in large quanities. We can manage all your needs of design and production, making it easy and simple for you and your team.\n\nHave your raw frames shipped straight from manufacturing and we will paint, apply decals and finishing touches ready for your warehouse and retailers.\n\nWhether its a small fleet of custom bikes or a run of hundreds, we guarantee our work just the same. We set turn around times and deliver on time.",
      image: "/work4.jpg",
      imageAlt: "Production paint process",
      imagePosition: "left",
    },
    {
      id: "in-house-designers",
      title: "IN HOUSE DESIGNERS",
      titleHighlight: "IN",
      description:
        "Not sure where to start? Leave it to us. Our in-house designers can create just about anything. Our talented designers specialize in color and the team will work with you to select the perfect color palette to compliment your vision.\n\nWant an original one of a kind masterpiece, we can do it. Have a idea, but not sure how to make it a reality, we can create it. Sky is the limit, matching components, patterns, colors, We create custom designs everyday to suit personal style & esthetic.",
      image: "/work5.jpg",
      imageAlt: "Designer working on bike design",
      imagePosition: "right",
    },
    {
      id: "paint-touch-up",
      title: "PAINT TOUCH UP",
      titleHighlight: "PAINT",
      description:
        "Does it bother you that your expensive bike was mishandled and scratched at the coffee shop? Perhaps you forgot to put frame protector tape on to stop cable rub on the head tube? What about an errant stone flying up and hitting your frame chipping the paint?\n\nThese examples along with and general rub marks and scratches from daily use that occur when you use your bicycle. All these can be repaired to make your bicycle unblemished again.\n\nWe will touch up your chips, scratches and other paint blemishes to look brand new again.",
      image: "/work7.jpg",
      imageAlt: "Paint touch up process",
      imagePosition: "left",
    },
    {
      id: "graphics-decals",
      title: "GRAPHICS & DECALS",
      titleHighlight: "GRAPHICS",
      description:
        "We can source decals of manufacturer, company or team and create custom graphics for decals so your custom bike will stand out from the pack.\n\nOur designers will work with you to develop custom graphics just for you. The sky is the limit. Handle bars to match your wheels, wheels to match your frame and a frame to suit you.\n\nSpeak with our design experts for inspiration.",
      image: "/work8.jpg",
      imageAlt: "Custom graphics and decals",
      imagePosition: "right",
    },
    {
      id: "restorations",
      title: "RESTORATIONS",
      titleHighlight: "RESTORATIONS",
      description:
        "As experts in bicycle restoration, we will completely restore and/or repaint your bicycle to your specifications. We are specialists in stripping, rebuilding and repairing vintage steel bicycles to their original appeal. Custom paint is great way to give your bike a brand new look. We can create any color imaginable. We can design custom decals and/or supply vintage decal packs to create a brand new looking bike from yester year.\n\nOccassionally during the restoration process the components on the bike are found to be damaged or worn beyond repair, as we hold a large stock of second hand components, we can quickly find a suitable replacement, most often of better quality, the end result giving you a ride you never thought possible.\n\nIf you have an old frame you've never been able to let go and want to bring it back to life. Element 6 can help.",
      image: "/rims2.jpg",
      imageAlt: "Vintage bike restoration",
      imagePosition: "left",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Matching the first image */}
      <div className="relative h-[50vh] bg-gray-900">
        <Image
          src="/s1.jpg"
          alt="Full Service Workshop"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-4xl text-center md:text-5xl font-bold text-white tracking-wide mb-6">
            FULL SERVICE WORKSHOP
          </h1>
          <div className="text-white text-lg">
            <Link href="/" className="hover:text-yellow-400">
              HOME
            </Link>
            <span className="mx-2 text-yellow-300">{">"}</span>
            <span>SERVICES</span>
          </div>
        </div>
      </div>

      {/* Services Intro */}
      <div className="container mx-auto py-16 px-4 md:px-6">
        <h2 className="text-4xl md:text-4xl font-bold text-center mb-20">
          Explore Our <span className="text-violet-500">Services</span>
        </h2>

        {/* Services List */}
        {services.map((service, index) => (
          <div
            key={index}
            id={service.id}
            className={`flex flex-col ${
              service.imagePosition === "left"
                ? "md:flex-row"
                : "md:flex-row-reverse"
            } items-center mb-24 gap-8 scroll-mt-32`}
          >
            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 flex flex-col items-start px-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-violet-500">
                  {service.titleHighlight}
                </span>{" "}
                {service.title.replace(service.titleHighlight, "")}
              </h2>
              {service.description.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-gray-700 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-8 py-6 rounded-full mt-4">
                VIEW PRICING <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Bike?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Contact us today to discuss your project and get a personalized
            quote for our professional services.
          </p>
          <Link href="/contact">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-8 py-6 rounded-full">
              GET A QUOTE <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
