import { Skeleton } from './skeleton'

export function ProductSkeleton() {
  return (
    <div className="grid h-full grid-cols-9 grid-rows-6 gap-6">
      <Skeleton className="col-span-2" />
      <Skeleton className="col-span-1" />
    </div>
  )
}
