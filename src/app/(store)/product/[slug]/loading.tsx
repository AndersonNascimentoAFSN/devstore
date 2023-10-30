import { Skeleton } from '@/components/skeleton'

export default function Loading() {
  return (
    <>
      <div className="grid h-full grid-cols-9 grid-rows-6 gap-6">
        <Skeleton className="col-span-2 row-span-1" />
        <Skeleton className="col-span-1 row-span-1" />
      </div>
    </>
  )
}
