import React from 'react'
import { Link } from 'react-router-dom'
import useShop from '../Context/ShopContext'

export const Header = () => {
  const {Products} = useShop()
  return (
       <div>
         {/* logo */}
       <div className='flex justify-around text-xl mb-4 mt-3'>
         <Link to={"/"}>Fragrance-shop</Link>
         {/* navbar */}
         <div className='space-x-6'>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/contact'}>Contact</Link>
            <Link to={'/cart'}>cart</Link>
         </div>
         <Link to={"/cart"} className=' bg-blue-600 flex justify-center items-center p-2 rounded-full w-10 h-10 text-white'>{Products.length}</Link>
       </div> 
       </div>
  )
}
