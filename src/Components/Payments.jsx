import React from 'react'

export const Payments = () => {
  return (
    <div className='ml-2'>
        <h2 className='mb-3'>Pay With</h2>
       <form>
         <div className=''>
            <div className='w-70 text-center p-4 rounded-2xl border mb-2 hover:bg-blue-500 text-base font-bold'>
           <h2>ZAAD SERVICE</h2>
        </div>
         <div className='w-70 text-center p-4 rounded-2xl border mb-2 hover:bg-blue-500  text-base font-bold'>
           <h2>EVC plus</h2>
        </div>
         <div className='w-70 text-center p-4 rounded-2xl border mb-2 hover:bg-blue-500  text-base font-bold'>
           <h2>Sahal</h2>
        </div>
       <div>
         <input className='w-70  p-4 rounded-2xl  mb-2 border text-2xl' type="text" placeholder='25261...' />
       </div>
        <button className=' w-full p-4 rounded-lg bg-blue-600'>Procced!</button>
         </div>
       </form>
    </div>
  )
}
