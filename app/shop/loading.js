import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <Skeleton className="h-12 w-[200px]" />
        <Skeleton className="h-6 w-[300px]" />
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-4">
        <div className="space-y-6">
          <Skeleton className="h-[200px] w-full" />
          <Skeleton className="h-[150px] w-full" />
          <Skeleton className="h-[100px] w-full" />
        </div>
        <div className="md:col-span-3">
          <div className="mb-6 flex items-center justify-between">
            <Skeleton className="h-6 w-[100px]" />
            <Skeleton className="h-10 w-[180px]" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Skeleton key={i} className="h-[300px] w-full rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

