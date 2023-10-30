'use client'

import { FC } from 'react'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/contexts/cart-context'

export const CartWidget: FC = () => {
  const { items } = useCart()

  return (
    <div className="flex items-center gap-2">
      <ShoppingBag className="h-4 w-4" />
      <span className="text-sm">Cart ({items.length})</span>
    </div>
  )
}
