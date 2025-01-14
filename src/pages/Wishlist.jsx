import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const Wishlist = () => {
  return (
    <div>
      <Header/>
      <div style={{paddingTop:'100px'}} className='px-5'>
      <>
        <h1 className='text-red-600 text-4xl font-bold'>My Wishlist</h1>

        <div className='grid grid-cols-4 gap-4'>
        <div className='rounded border p-2 shadow'>
          <img src="https://img.uline.com/is/image/uline/H-4568?$Mobile_Zoom$" alt="" />
          <div className='text-center'>
            <h3 className='text-xl font-bold'>title</h3>
            <Link to={'/id/view'} className='bg-violet-600 rounded p-1 mt-3 text-white inline-block'>View More...</Link>
            <div className='flex justify-evenly mt-3'>
              <button className='text-xl'><i className='fa-solid fa-heart-circle-xmark text-red-500'></i></button>
              <button className='text-xl'><i className='fa-solid fa-cart-plus text-red-500'></i></button>
            </div>
          </div>
        </div>

      </div>
      </>
      </div>
    </div>
  )
}

export default Wishlist
