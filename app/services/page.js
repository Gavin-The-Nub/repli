import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function Service2Page() {
  const services = [
    {
      id: "custom-paint",
      title: "DECORATIVE CUSTOM PAINT",
      titleHighlight: "DECORATIVE",
      description:
        "Your bike, your style — exactly how you imagined it. Our team works closely with you to bring custom designs to life, tailored to your vision from start to finish.\n\nWe paint frames and parts from any brand and material — carbon, alloy, steel, titanium — no limitations. Whether it’s a wild concept or a subtle colorway, we’re here to make it real.\n\nWith deep roots in the custom paint world and years of hands-on experience across different industries, we’ve refined our skills to deliver flawless results. What sets us apart is our eye for detail, creative process, and commitment to quality.\n\nWe’ve partnered with bike brands, painted for pros, and created show-stopping looks for collectors, clubs, teams, and everyday riders. If it rolls, we can make it look incredible.",
      image: "/ss2.jpg",
      imageAlt: "Custom painted bike frame",
      imagePosition: "left",
    },
    {
      id: "carbon-repair",
      title: "CARBON REPAIR",
      titleHighlight: "CARBON",
      description:
        "We’re specialists in carbon frame repair from cracks and breaks to chips and dings, we’ve seen it all and we can fix it. Our expert workmanship and professional service ensure your bike is returned safe, strong, and ride-ready. While paint match may not be exact, we’ll blend it as seamlessly as possible",
      image: "/ss1.jpg",
      imageAlt: "Carbon fiber repair close-up",
      imagePosition: "right",
    },

    {
      id: "production-paint",
      title: "MASS PRODUCTION PAINT",
      titleHighlight: "MASS",
      description:
        "Need consistent, high-quality paintwork at scale? We’ve got you covered. Our production paint services are built for volume — whether it’s dozens or hundreds of frames.\n\nSend your frames directly and we’ll handle the rest: priming, painting, decals, and all finishing details. Once complete, they’re ready to ship straight to your warehouse or retail partners.\n\nWe’re set up to keep things efficient and reliable, without cutting corners. You’ll get clear timelines, consistent quality, and on-time delivery — every time.",
      image: "/ss3.jpg",
      imageAlt: "Production paint process",
      imagePosition: "left",
    },
    {
      id: "in-house-designers",
      title: "REPLI DESIGN IDEAS",
      titleHighlight: "REPLI",
      description:
        "Not sure how you want your bike to look? We can help ir you want us to handle with our own creative design. REPLI are great at coming up with custom ideas and color schemes that match your style.\n\nWhether you want something clean and classic or bold and unique, we’ll work with you to bring your vision to life.\n\n We can match colors, add patterns, and design every detail to make your bike truly one of a kind.",
      image: "/ss4.jpg",
      imageAlt: "Designer working on bike design",
      imagePosition: "right",
    },
    {
      id: "paint-touch-up",
      title: "PAINT TOUCH UP",
      titleHighlight: "PAINT",
      description:
        "Scratches happen — whether it’s from leaning your bike at the café, forgetting frame protection, or getting hit by flying gravel on the road. Even regular use can leave marks over time.\n\nWe’ll fix those chips, scuffs, and scratches, restoring your frame to a fresh, like-new finish. Plus, we apply a new clear coat with extra paint protection to keep your bike looking great and safer from future damage.",
      image: "/ss5.jpg",
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
