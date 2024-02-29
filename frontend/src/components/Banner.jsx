import React from 'react'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center' >
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
            <div className='md:w-1/2 space-y-8 h-full'>
                <h2 className='text-6x1 font-bold leading-snug text-black'>
                 Buy and Sell Your Books<span className='text-blue-700 '>for the best prices</span>
                </h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias omnis culpa laudantium obcaecati esse rerum veritatis natus, consequuntur, dolore iusto ratione aliquam reiciendis. Reprehenderit rerum libero, soluta odio vel dolore!</p>
             <div>
                <input type="search"name='search'id='search'placeholder='Search a book' className='py-2 px-2 rounded-s-sm outline-none'/>
                <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bf-black transition-all ease-in duration-200'>Search</button>
             </div>
            </div>
            <div>Right Sides</div>
        </div>


    </div>
  )
}

export default Banner