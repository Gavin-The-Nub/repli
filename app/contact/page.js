"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    bikeType: "",
    rimType: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would send this data to your server
    console.log("Form submitted:", formData)
    alert("Thank you for your inquiry! We'll get back to you soon.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      bikeType: "",
      rimType: "",
      message: "",
    })
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Get in touch with us for a quote or to schedule a consultation.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Get a Quote</CardTitle>
            <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
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
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="service">Service Interested In</Label>
                <Select value={formData.service} onValueChange={(value) => handleSelectChange("service", value)}>
                  <SelectTrigger id="service">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic-repaint">Basic Repaint</SelectItem>
                    <SelectItem value="premium-repaint">Premium Repaint</SelectItem>
                    <SelectItem value="pro-repaint">Pro Repaint</SelectItem>
                    <SelectItem value="rim-purchase">Rim Purchase</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Bike Type</Label>
                <RadioGroup
                  defaultValue={formData.bikeType}
                  onValueChange={(value) => handleSelectChange("bikeType", value)}
                  className="flex flex-wrap gap-4"
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
                    onValueChange={(value) => handleSelectChange("rimType", value)}
                    className="flex flex-wrap gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="set-a1" id="set-a1" />
                      <Label htmlFor="set-a1">Set A1 (Rims Only)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="set-a2" id="set-a2" />
                      <Label htmlFor="set-a2">Set A2 (Complete Wheelset)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="set-b1" id="set-b1" />
                      <Label htmlFor="set-b1">Set B1 (Rims Only)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="set-b2" id="set-b2" />
                      <Label htmlFor="set-b2">Set B2 (Complete Wheelset)</Label>
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
                />
              </div>
              <Button type="submit" className="w-full bg-gray-900 text-white hover:bg-gray-800">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="flex flex-col gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Reach out to us directly through any of these channels.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-gray-500" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-sm text-gray-500">(123) 456-7890</p>
                  <p className="text-sm text-gray-500">Monday - Friday, 9am - 6pm</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-gray-500" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-sm text-gray-500">info@bikerevive.com</p>
                  <p className="text-sm text-gray-500">support@bikerevive.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-gray-500" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-sm text-gray-500">123 Bike Street</p>
                  <p className="text-sm text-gray-500">Cycle City, BC 12345</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Business Hours</CardTitle>
              <CardDescription>When you can visit our workshop or call us.</CardDescription>
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
        </div>
      </div>
    </div>
  )
}

