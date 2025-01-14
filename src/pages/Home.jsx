import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
const Home = () => {
  return (
    <>
    <Header/>

    <div className='container px-4 mx-auto' style={{paddingTop:'100px'}}>
      <div className='grid grid-cols-4 gap-4'>
        <div className='rounded border p-2 shadow'>
          <img src="https://img.uline.com/is/image/uline/H-4568?$Mobile_Zoom$" alt="" />
          <div className='text-center'>
            <h3 className='text-xl font-bold'>title</h3>
            <Link to={'/id/view'} className='bg-violet-600 rounded p-1 mt-3 text-white inline-block'>View More...</Link>
          </div>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default Home
