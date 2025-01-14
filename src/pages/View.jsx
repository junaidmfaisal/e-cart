import React from 'react'
import Header from '../components/Header'


const View = () => {
  return (
    <>
      <Header />

      <div className='flex flex-col mx-5'>
        <div className='grid grid-cols-2 items-center h-screen'>
          <img width={'350px'} height={'250px'} src="https://img.uline.com/is/image/uline/H-4568?$Mobile_Zoom$" alt="" />
          <div>
            <h3 className='font-bold'> PID: id</h3>
            <h1 className='text-5xl font-bold'>Title</h1>
            <h4 className='fond-bold text-red-600 text-2xl'>$ 250</h4>
            <h4>Brand :</h4>
            <h4>Catogory :</h4>
            <p>
              <span className='font-bold'>Description :</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi explicabo est inventore accusantium aperiam ipsam soluta molestias cupiditate, molestiae nemo facere enim perspiciatis corporis incidunt nam, maxime accusamus dolor officia!
              Qui consequatur, dicta blanditiis cupiditate sint deleniti incidunt ipsum minima. Numquam non sed cumque quia, rerum quod blanditiis facilis hic accusamus odit? Adipisci quis aliquam fuga hic illum maiores maxime!
              Exercitationem odio totam tempore possimus molestias velit ipsa tenetur ut temporibus. Minima nostrum adipisci, asperiores vero veniam fugiat? Odio aperiam laborum voluptatem enim iste eveniet iure soluta atque velit aspernatur!
            </p>
            <div className='flex justify-around mt-5'>
              <button className='bg-blue-600 rounded text-white p-2'>Add to Wishlist</button>
              <button className='bg-green-600 rounded text-white p-2'>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default View
