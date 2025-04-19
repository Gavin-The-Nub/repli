import Image from "next/image";
import Link from "next/link";
import {
  ClipboardList,
  DollarSign,
  Bike,
  Store,
  Wrench,
  TruckIcon as TruckDelivery,
} from "lucide-react";

export default function HowItWorksPage() {
  const steps = [
    {
      number: 1,
      title: "Quotation Form",
      description:
        "Fill out a quotation form with information on the bike, the job required, and upload some images too!",
      icon: <ClipboardList className="w-12 h-12 text-yellow-500" />,
    },
    {
      number: 2,
      title: "Down Payment",
      description:
        "Once you approve the quotation, we will transact a down payment to initialize the repair process.",
      icon: <DollarSign className="w-12 h-12 text-yellow-500" />,
    },
    {
      number: 3,
      title: "Getting Us the Bike",
      description: "There are various ways that they can get us their bike",
      icon: <Bike className="w-12 h-12 text-yellow-500" />,
      options: [
        {
          title: "Local or Satellite Drop Off",
          description:
            "You can drop off your bike right at our doorstep, or at one of our drop off locations.",
          icon: <Store className="w-8 h-8 text-yellow-500" />,
        },
        {
          title: "Affiliated Bike Shop Drop Off",
          description:
            "You can also drop off at an affiliated bike shop. They can offer you assembly/disassembly services if you required, and the bike shop will also handle the logistics of transporting the bike to us for paint or repair.",
          icon: <Store className="w-8 h-8 text-yellow-500" />,
        },
        {
          title: "Direct Shipment",
          description: "You can ship your bike directly to us.",
          icon: <TruckDelivery className="w-8 h-8 text-yellow-500" />,
        },
      ],
    },
    {
      number: 4,
      title: "Receiving the Bike",
      description:
        "Once we receive the bike, we will inform you of the delivery, and we will set up your bike on our work queue.",
      icon: <Store className="w-12 h-12 text-yellow-500" />,
    },
    {
      number: 5,
      title: "Working on the Bike",
      description:
        "We begin working on the bike, and periodically send you updates on the status of the repair or paint job. This typically takes 2 to 3 weeks.",
      icon: <Wrench className="w-12 h-12 text-yellow-500" />,
    },
    {
      number: 6,
      title: "Returning Your Bike",
      description:
        "After the job is complete, we will reach out to you to settle the remaining balance, after which we will arrange the return of your bike via: Shipment or pick up.",
      icon: <Bike className="w-12 h-12 text-yellow-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-gray-900">
        <Image
          src="/work6.jpg"
          alt="Carbon Repair & Custom Paint"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-4xl text-center md:text-5xl font-bold text-white tracking-wide mb-6">
            CARBON REPAIR & CUSTOM PAINT
          </h1>
          <div className="text-white text-lg">
            <Link href="/" className="hover:text-yellow-400">
              HOME
            </Link>
            <span className="mx-2 text-yellow-300">{">"}</span>
            <span>HOW IT WORKS</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-16 px-4 md:px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
          HOW IT WORKS
        </h2>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="mb-24">
              {/* Step Box with Yellow Border */}
              <div className="border-2 border-yellow-400 p-8 rounded-lg flex flex-col items-center">
                <div className="bg-yellow-100 rounded-full p-4 mb-4">
                  {step.icon}
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-yellow-500">
                    STEP {step.number}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 max-w-xl">{step.description}</p>
                </div>

                {/* Options inside the same yellow border */}
                {step.options && (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 w-full">
                    {step.options.map((option, optIndex) => (
                      <div
                        key={optIndex}
                        className="bg-yellow-50 p-6 rounded-lg"
                      >
                        <div className="flex justify-center mb-4">
                          {option.icon}
                        </div>
                        <h4 className="text-xl font-bold text-center mb-3">
                          {option.title}
                        </h4>
                        <p className="text-gray-600 text-center">
                          {option.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Arrow pointing down except for the last step */}
              {index < steps.length - 1 && (
                <div className="flex justify-center my-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-yellow-500"
                  >
                    <path d="M12 5v14M19 12l-7 7-7-7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Contact us today to discuss your project and get a personalized
            quote for our professional services.
          </p>
          <Link
            href="/contact"
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-8 py-4 rounded-full inline-flex items-center"
          >
            GET A QUOTE
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2 h-5 w-5"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
