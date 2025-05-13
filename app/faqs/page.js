import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQsPage() {
  const faqs = [
    {
      question: "What types of bikes or parts can you custom paint?",
      answer:
        "We paint frames and components from any brand and any material — carbon, alloy, steel, or titanium. Whether it's a flashy concept or a subtle tone, we work with you to make it real.",
    },
    {
      question: "Can you help design a custom look if I don't have one?",
      answer:
        "Absolutely! Our in-house REPLI designers can suggest styles, match colors, and come up with unique designs that match your personality or goals. We'll guide you from concept to final layout.",
    },
    {
      question: "Do you repair carbon fiber frames?",
      answer:
        "Yes, we specialize in carbon frame repairs — from cracks and breaks to chips and dings. While color matching may not be exact, we blend the repair to be as seamless as possible.",
    },
    {
      question: "Can you fix small scratches or chips in my bike's paint?",
      answer:
        "Yes, we offer paint touch-up services for chips, scuffs, and minor scratches. Your frame will be restored to a like-new finish.",
    },
    {
      question: "Do you handle high-volume paint jobs?",
      answer:
        "Yes! Our production paint service is built for scale — whether you're sending a few dozen or hundreds of frames. We handle everything from priming and painting to decals and finish work.",
    },
    {
      question: "How involved can I be in the custom paint process?",
      answer:
        "We work closely with you every step of the way — from selecting colors and finishes to choosing patterns and layout. Your input is key in bringing your vision to life.",
    },
    {
      question: "Is there a limit to the design complexity you can handle?",
      answer:
        "Not at all. From simple repaints to detailed custom art, our team has years of experience delivering flawless results. If you can imagine it, we'll find a way to paint it.",
    },
    {
      question: "How long does a typical service take?",
      answer:
        "It depends on the service. Custom paint jobs usually take 2–3 weeks. Touch-ups and minor repairs are faster. For production orders, we'll provide a clear timeline up front.",
    },
    {
      question: "Can you match specific colors or replicate designs I like?",
      answer:
        "Yes. We can match almost any color and recreate reference designs. Just send us the inspiration or photos, and we'll take it from there.",
    },
    {
      question: "Do you guarantee the quality of your work?",
      answer:
        "Yes. Our services are backed by warranties. Carbon repairs are covered by a limited lifetime warranty, and paint work is guaranteed against peeling or cracking for 2 years.",
    },

    // How It Works Section
    {
      question: "How do I start the repair or paint job process?",
      answer:
        "Simply fill out our online quotation form with your bike's details, the service you're looking for, and upload some reference images. It only takes a few minutes!",
    },
    {
      question: "What happens after I submit the quotation form?",
      answer:
        "We'll review your request and send you a personalized quotation. If you approve, a down payment will be needed to kick off the process.",
    },
    {
      question: "How do I get my bike to you?",
      answer:
        "You can choose to either drop it off locally at our shop or one of our drop-off locations, or ship it directly to us—whatever is easiest for you.",
    },
    {
      question: "Will I be notified when my bike arrives at your facility?",
      answer:
        "Yes! We'll confirm receipt of your bike and schedule it into our work queue right away.",
    },
    {
      question: "How long does the repair or paint job take?",
      answer:
        "It usually takes 2 to 3 weeks, depending on the complexity of the job. We'll send you periodic updates throughout the process.",
    },
    {
      question: "How do I get my bike back once it's finished?",
      answer:
        "Once the work is done and the remaining balance is paid, we'll coordinate with you for either pickup or return shipping—whichever works best for you.",
    },

    // New FAQs from pricing information
    {
      question: "What are your frame painting service prices?",
      answer:
        "Our frame painting prices vary by bike type and finish level. For carbon road bikes, prices range from ₱10,499 (Basic) to ₱20,499 (Decorative). For alloy/steel road bikes, prices range from ₱7,499 to ₱15,499. Carbon MTB frames range from ₱11,499 to ₱20,499, while alloy/steel MTB frames range from ₱7,499 to ₱17,499. For full suspension bikes, carbon frames range from ₱12,499 to ₱21,499, and alloy frames from ₱10,499 to ₱20,499.",
    },
    {
      question:
        "What's the difference between Basic, Advance, and Decorative paint services?",
      answer:
        "Basic includes single color application with painted decals and standard finish. Advance offers multi-color application, medium complexity designs, matte/gloss finish options, and hypershifting colors (Chameleon, Pearl). Decorative features super detailed designs, airbrush techniques, hydro graphics, and premium finish for the most distinctive look.",
    },
    {
      question: "What are your touch-up service options and prices?",
      answer:
        "We offer three levels of touch-up services: Basic Touch-Up (₱4,999) for spot repairs with color matching and seamless blending; Advance Touch-Up (₱8,999) for multiple area repairs with precise color matching, surface preparation, and clear coat application; and Complex Touch-Up (₱12,999) for major damage repair with extensive surface preparation, complete color restoration, and multiple clear coat layers.",
    },
    {
      question: "Do you offer paint protection film (PPF) for bikes?",
      answer:
        "Yes, we offer PPF Bike Skin Protection for ₱4,999, available for all bike types including Hardtail, Full Suspension, MTB, Road Bike, and Gravel bikes. PPF protects against scratches and chips, prevents UV fading, features self-healing properties for minor scratches, preserves resale value, and provides virtually invisible protection.",
    },
    {
      question:
        "Can you paint individual bike components and what are the prices?",
      answer:
        "Yes, we paint individual components with options for Basic, Advance, and Decorative finishes. Forks range from ₱3,499 to ₱7,499; wheels from ₱8,999 to ₱18,999; handlebars from ₱1,499 to ₱2,499; stems from ₱999 to ₱1,999; full integrated dropbars from ₱2,499 to ₱4,499; and cranksets from ₱3,999 to ₱7,999.",
    },
    {
      question:
        "Do you offer any special finishes or techniques for bike painting?",
      answer:
        "Yes, we offer a variety of special finishes and techniques depending on the service level. Our Advance paint service includes hypershifting colors like Chameleon and Pearl finishes, while our Decorative service features airbrush techniques and hydro graphics for truly unique designs.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-gray-900">
        <Image
          src="/work8.jpg"
          alt="Frequently Asked Questions"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-4xl text-center md:text-5xl font-bold text-white tracking-wide mb-6">
            FAQs
          </h1>
          <div className="text-white text-lg">
            <Link href="/" className="hover:text-yellow-400">
              HOME
            </Link>
            <span className="mx-2 text-yellow-300">{">"}</span>
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
        </div>
      </div>

      <div className="container px-4 py-12 md:px-6 md:py-24">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find answers to common questions about our services.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle>Common Questions</CardTitle>
              <CardDescription>
                Everything you need to know about our bike painting and repair
                services.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left hover:no-underline hover:text-violet-700">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-500 ">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-gray-500 mb-6">
              If you couldn't find the answer to your question, please don't
              hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/get-a-quote"
                className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-white hover:opacity-90"
              >
                Get a Quote
              </Link>
              <Link
                href="/location"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 px-6 py-3 hover:bg-gray-50"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
