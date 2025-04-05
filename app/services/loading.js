import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <Skeleton className="h-12 w-[200px]" />
        <Skeleton className="h-6 w-[300px]" />
      </div>
      <div className="mt-12">
        <Skeleton className="h-10 w-[300px] mx-auto mb-8" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-[400px] w-full rounded-lg" />
          ))}
        </div>
      </div>
    </div>
  )
}

