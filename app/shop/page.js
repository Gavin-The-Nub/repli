import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Search, Filter, ShoppingCart } from "lucide-react"

export default function ShopPage() {
  const products = [
    {
      id: 1,
      name: "Road Bike Rim - Lightweight",
      description: "Lightweight aluminum rim for road bikes. Perfect for speed and performance.",
      price: 89.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "road",
    },
    {
      id: 2,
      name: "Mountain Bike Rim - Durable",
      description: "Heavy-duty aluminum rim for mountain bikes. Built to withstand rough terrain.",
      price: 99.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "mountain",
    },
    {
      id: 3,
      name: "BMX Rim - Pro",
      description: "Professional grade BMX rim. Perfect for tricks and jumps.",
      price: 79.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "bmx",
    },
    {
      id: 4,
      name: "Gravel Bike Rim - All-Terrain",
      description: "Versatile rim for gravel bikes. Designed for mixed terrain riding.",
      price: 109.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "gravel",
    },
    {
      id: 5,
      name: "Road Bike Rim - Carbon",
      description: "Premium carbon fiber rim for road bikes. Ultralight and aerodynamic.",
      price: 199.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "road",
    },
    {
      id: 6,
      name: "Mountain Bike Rim - Carbon",
      description: "Premium carbon fiber rim for mountain bikes. Lightweight and strong.",
      price: 219.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "mountain",
    },
  ]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Shop Bike Rims</h1>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Browse our selection of high-quality bike rims for all types of bikes.
          </p>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-4">
        {/* Filters */}
        <div className="space-y-6">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Search</h3>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input type="search" placeholder="Search products..." className="pl-8" />
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Categories</h3>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                <span>Road Bike Rims</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                <span>Mountain Bike Rims</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                <span>BMX Rims</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                <span>Gravel Bike Rims</span>
              </label>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Price Range</h3>
            <Slider defaultValue={[0, 250]} max={250} step={1} />
            <div className="mt-2 flex items-center justify-between text-sm">
              <span>$0</span>
              <span>$250</span>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Material</h3>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                <span>Aluminum</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                <span>Carbon Fiber</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                <span>Steel</span>
              </label>
            </div>
          </div>

          <Button className="w-full bg-gray-900 text-white hover:bg-gray-800">
            <Filter className="mr-2 h-4 w-4" />
            Apply Filters
          </Button>
        </div>

        {/* Products */}
        <div className="md:col-span-3">
          <div className="mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">{products.length} products found</p>
            <div className="flex items-center gap-2">
              <span className="text-sm">Sort by:</span>
              <Select defaultValue="featured">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <CardHeader className="p-0">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="h-48 w-full object-cover"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription className="mt-2 line-clamp-2">{product.description}</CardDescription>
                  <div className="mt-4 text-xl font-bold">${product.price.toFixed(2)}</div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button className="w-full bg-gray-900 text-white hover:bg-gray-800">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <nav className="flex items-center space-x-2">
              <Button variant="outline" size="icon" disabled>
                <span className="sr-only">Previous page</span>
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
                  className="h-4 w-4"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </Button>
              <Button variant="outline" size="sm" className="bg-gray-900 text-white">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="icon">
                <span className="sr-only">Next page</span>
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
                  className="h-4 w-4"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

