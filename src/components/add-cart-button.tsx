'use client'

import { useCart } from '@/contexts/cart-context'
import { FC } from 'react'

interface AddCartButtonProps {
  productId: number
}

export const AddCartButton: FC<AddCartButtonProps> = ({ productId }) => {
  const { addToCart } = useCart()

  function handleAddProductToCart() {
    addToCart(productId)
  }

  return (
    <button
      type="button"
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
      onClick={handleAddProductToCart}
    >
      Adicionar ao carrinho
    </button>
  )
}
