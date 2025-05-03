"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
// Fix: Remove one of the duplicate imports - keep only one sendEmail import
import { sendEmail } from "../actions/send-email.js";
import { useToast } from "../hooks/use-toast.js";
// Remove this duplicate import: import { sendEmail } from "@/actions/send-email.js"

export default function GetAQuotePage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState({
    message: "",
    type: "", // "success" or "error"
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    bikeType: "",
    rimType: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ message: "", type: "" });

    try {
      const result = await sendEmail(formData);

      if (result.success) {
        setFormStatus({
          message: result.message,
          type: "success",
        });

        // Reset form on success
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          bikeType: "",
          rimType: "",
          message: "",
        });

        toast({
          title: "Success!",
          description: result.message,
          variant: "default",
        });
      } else {
        setFormStatus({
          message: result.message,
          type: "error",
        });

        toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus({
        message: "An unexpected error occurred. Please try again.",
        type: "error",
      });

      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-gray-900">
        <Image
          src="/work7.jpg"
          alt="Get a Quote"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-4xl text-center md:text-5xl font-bold text-white tracking-wide mb-6">
            GET A QUOTE
          </h1>
          <div className="text-white text-lg">
            <Link href="/" className="hover:text-yellow-400">
              HOME
            </Link>
            <span className="mx-2 text-yellow-300">{">"}</span>
            <span>GET A QUOTE</span>
          </div>
        </div>
      </div>

      <div className="container px-4 py-12 md:px-6 md:py-24">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Request a Quote
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Tell us about your project and we'll provide you with a custom
              quote.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <Card>
            <CardHeader>
              <CardTitle>Get a Quote</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as
                possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {formStatus.type === "success" ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                  <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
                  <p className="text-gray-600 mb-6">{formStatus.message}</p>
                  <Button
                    onClick={() => setFormStatus({ message: "", type: "" })}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:bg-gray-800"
                  >
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interested In</Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) =>
                        handleSelectChange("service", value)
                      }
                      disabled={isSubmitting}
                    >
                      <SelectTrigger id="service">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basic-repaint">
                          Basic Repaint
                        </SelectItem>
                        <SelectItem value="premium-repaint">
                          Premium Repaint
                        </SelectItem>
                        <SelectItem value="pro-repaint">Pro Repaint</SelectItem>
                        <SelectItem value="rim-purchase">
                          Rim Purchase
                        </SelectItem>
                        <SelectItem value="touch-up">Paint Touch-Up</SelectItem>
                        <SelectItem value="ppf">PPF Bike Skin</SelectItem>
                        <SelectItem value="parts-painting">
                          Parts Painting
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Bike Type</Label>
                    <RadioGroup
                      defaultValue={formData.bikeType}
                      onValueChange={(value) =>
                        handleSelectChange("bikeType", value)
                      }
                      className="flex flex-wrap gap-4"
                      disabled={isSubmitting}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="road" id="road" />
                        <Label htmlFor="road">Road Bike</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="mountain" id="mountain" />
                        <Label htmlFor="mountain">Mountain Bike</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="bmx" id="bmx" />
                        <Label htmlFor="bmx">BMX</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="gravel" id="gravel" />
                        <Label htmlFor="gravel">Gravel Bike</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other-bike" />
                        <Label htmlFor="other-bike">Other</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  {formData.service === "rim-purchase" && (
                    <div className="space-y-2">
                      <Label>Rim Type</Label>
                      <RadioGroup
                        defaultValue={formData.rimType}
                        onValueChange={(value) =>
                          handleSelectChange("rimType", value)
                        }
                        className="flex flex-wrap gap-4"
                        disabled={isSubmitting}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="set-a1" id="set-a1" />
                          <Label htmlFor="set-a1">Set A1 (Rims Only)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="set-a2" id="set-a2" />
                          <Label htmlFor="set-a2">
                            Set A2 (Complete Wheelset)
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="set-b1" id="set-b1" />
                          <Label htmlFor="set-b1">Set B1 (Rims Only)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="set-b2" id="set-b2" />
                          <Label htmlFor="set-b2">
                            Set B2 (Complete Wheelset)
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  )}
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project or inquiry"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                  </div>

                  {formStatus.type === "error" && (
                    <div className="flex items-center p-4 text-sm border rounded-md border-red-200 bg-red-50 text-red-600">
                      <AlertCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                      <p>{formStatus.message}</p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:bg-gray-800"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
