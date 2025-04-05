import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <Skeleton className="h-12 w-[200px]" />
        <Skeleton className="h-6 w-[350px]" />
      </div>
      <div className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-2">
        <Skeleton className="h-[600px] w-full rounded-lg" />
        <div className="space-y-8">
          <Skeleton className="h-[250px] w-full rounded-lg" />
          <Skeleton className="h-[200px] w-full rounded-lg" />
        </div>
      </div>
    </div>
  )
}

