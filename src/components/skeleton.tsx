import { FC, ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

const skeleton = tv({
  base: 'bg-zinc-50/10 animate-pulse rounded-md',
  variants: {},
})

type SkeletonProps = ComponentProps<'div'>

export const Skeleton: FC<SkeletonProps> = ({ className, ...rest }) => {
  return (
    <>
      <div className={skeleton({ className })} {...rest} />
    </>
  )
}
