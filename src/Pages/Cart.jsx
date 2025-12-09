import React from 'react'
import { CartItems } from '../Components/CartItems'
import { Payments } from '../Components/Payments'

export const Cart = () => {
  return (
    <div className='flex border rounded-2xl p-4'>
      <CartItems />
      {/* peyment */}
    <Payments />
    </div>
  )
}
