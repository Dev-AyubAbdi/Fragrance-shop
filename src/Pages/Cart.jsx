import React from 'react'
import { CartItems } from '../Components/CartItems'

export const Cart = () => {
  return (
    <div className='flex border rounded-2xl p-4'>
      <CartItems />
      {/* peyment */}
      <h2>Pay with</h2>
    </div>
  )
}
