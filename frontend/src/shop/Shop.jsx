import React, { useEffect, useState } from 'react'
import {Card} from "flowbite-react"
const Shop = () => {
    const [books,setBooks]=useState([]);

    useEffect( ()=>{
        fetch("http://localhost:4001/all-books").then(res=>res.json()).then(data=>setBooks(data));

    },[])
  return (
    <div className='mt-28 px-4 lg:px-24'>
        <h2 className='text-5x1 font-bold text-center'>All Books are hare</h2>
        <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
            {books.map(book=><Card
                
                >
                    <img src={book.imageURL} alt="" className='h-96' />
                    <h5 className="text-2x1 font-bold tracking-tight text-gray-900 dark:text-white">
                        <p>
                            {book.bookTitle}
                        </p>
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        <p>
                           {book.bookDescription}
                        </p>
                       
                    </p>
                    <button className='bg-blue-700 font-semibold text-white py-2 rounded'>Buy Now</button>
                </Card>
                
                )}
        </div>

        </div>
  )
}

export default Shop