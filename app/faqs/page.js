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
      question: "How long does a typical bike paint job take?",
      answer:
        "A standard paint job typically takes 2-3 weeks from the time we receive your bike. Custom designs or more complex work may take longer. We'll provide you with a specific timeline when you submit your quote request.",
    },
    {
      question: "Do you offer pickup and delivery services?",
      answer:
        "Yes, we offer several options for getting your bike to us and back to you. You can drop off and pick up directly at our workshop, use one of our affiliated bike shops, or arrange for shipping. See our 'How It Works' page for more details.",
    },
    {
      question: "What types of bikes do you work on?",
      answer:
        "We work on all types of bikes including road bikes, mountain bikes, BMX, gravel bikes, and more. Our services are suitable for carbon, aluminum, steel, and titanium frames.",
    },
    {
      question: "How much does a custom paint job cost?",
      answer:
        "The cost varies depending on the complexity of the design, the type of paint used, and the amount of prep work required. Basic repaints start at ₱15,000, while more complex custom designs can range from ₱25,000 to ₱50,000+. Contact us for a personalized quote.",
    },
    {
      question: "Can you match a specific color or design?",
      answer:
        "Yes! We can match virtually any color or recreate specific designs. Our in-house designers can also help you create a completely custom look for your bike.",
    },
    {
      question: "Do you offer frame repairs?",
      answer:
        "Yes, we specialize in carbon fiber frame repairs. We can fix cracks, chips, and other damage to restore the structural integrity of your frame.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept bank transfers, GCash, PayMaya, and cash payments. For custom projects, we typically require a 50% deposit to begin work, with the remaining balance due upon completion.",
    },
    {
      question: "Is my bike insured while in your possession?",
      answer:
        "Yes, all bikes in our care are covered by our workshop insurance policy against damage, theft, or loss while on our premises.",
    },
    {
      question: "Can I get just parts of my bike painted?",
      answer:
        "We can paint individual components like forks, stems, handlebars, or any other part you'd like to customize.",
    },
    {
      question: "Do you offer any guarantees on your work?",
      answer:
        "Yes, we offer warranties on all our services. Carbon repairs come with a limited lifetime warranty, paint work is warranted for 2 years against peeling or cracking, and rim purchases have a 1-year warranty. See our Warranty page for full details.",
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
