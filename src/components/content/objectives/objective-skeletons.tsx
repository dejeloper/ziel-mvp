import { Skeleton } from "@/components/ui/skeleton";

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function SkeletonObjectiveCard() {
  return (
    <div className={`${shimmer}`}>
      <div className="rounded-lg border text-card-gray-400 shadow-sm">
        <div className="space-y-1.5 p-6 flex flex-row justify-between">
          <Skeleton className="w-48 h-7" />
          <Skeleton className="w-8 h-4 " />
        </div>
        <div className="p-6 pt-0">
          <Skeleton className="w-80 h-20" />
          <Skeleton className="w-20 h-5 mt-2" />
        </div>
        <div className="items-center p-6 pt-0 flex gap-x-2 sm:gap-x-1 justify-between sm:px-2">
          <div className="flex gap-x-2 sm:gap-x-1 justify-end sm:justify-center">
            <Skeleton className="w-20 h-10 ml-4" />
          </div>
          <div className="flex gap-x-2 sm:gap-x-1 justify-end sm:justify-center">
            <Skeleton className="w-20 h-10 bg-blue-500/30 px-4 py-2" />
            <Skeleton className="w-20 h-10 bg-red-500/30 px-4 py-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function SkeletonObjectiveCardsAll() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <SkeletonObjectiveCard />
      <SkeletonObjectiveCard />
      <SkeletonObjectiveCard />
      <SkeletonObjectiveCard />
    </div>
  );
}
