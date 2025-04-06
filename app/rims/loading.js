import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <Skeleton className="h-12 w-[250px]" />
        <Skeleton className="h-6 w-[350px]" />
      </div>

      <Skeleton className="h-24 w-full max-w-5xl mx-auto mt-8 rounded-lg" />

      <div className="grid gap-6 md:grid-cols-2 mt-12">
        {[1, 2].map((i) => (
          <Skeleton key={i} className="h-[600px] w-full rounded-lg" />
        ))}
      </div>

      <Skeleton className="h-64 w-full max-w-3xl mx-auto mt-16 rounded-lg" />

      <div className="flex justify-center mt-12">
        <Skeleton className="h-14 w-48 rounded-md" />
      </div>
    </div>
  );
}
