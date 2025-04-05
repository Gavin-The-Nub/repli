"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col gap-6 py-6">
          <Link href="/" className="text-xl font-bold" onClick={() => setOpen(false)}>
            BikeRevive
          </Link>
          <nav className="flex flex-col gap-4">
            <Link href="/" className="text-lg font-medium hover:underline" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="/services" className="text-lg font-medium hover:underline" onClick={() => setOpen(false)}>
              Services
            </Link>
            <Link href="/contact" className="text-lg font-medium hover:underline" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </nav>
          <Link href="/contact" onClick={() => setOpen(false)}>
            <Button className="w-full bg-gray-900 text-white hover:bg-gray-800">Get a Quote</Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}

