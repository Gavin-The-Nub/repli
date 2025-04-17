import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section Skeleton */}
      <div className="relative h-[40vh]">
        <Skeleton className="h-full w-full" />
      </div>

      {/* Services List Skeleton */}
      <div className="container mx-auto py-16 px-4 md:px-6">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="flex flex-col md:flex-row items-center mb-24 gap-8">
            {/* Image Skeleton */}
            <div className="w-full md:w-1/2">
              <Skeleton className="h-[300px] md:h-[400px] w-full" />
            </div>

            {/* Content Skeleton */}
            <div className="w-full md:w-1/2 flex flex-col items-start">
              <Skeleton className="h-10 w-3/4 mb-4" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4 mb-6" />
              <Skeleton className="h-10 w-32" />
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section Skeleton */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Skeleton className="h-10 w-64 mx-auto mb-4" />
          <Skeleton className="h-4 w-full max-w-2xl mx-auto mb-2" />
          <Skeleton className="h-4 w-full max-w-2xl mx-auto mb-8" />
          <Skeleton className="h-12 w-32 mx-auto" />
        </div>
      </div>
    </div>
  )
}
