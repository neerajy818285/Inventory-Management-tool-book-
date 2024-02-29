import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Singlebook = () => {
    const {_id,bookTitle,imageURL,bookDescription,authorName,category}=useLoaderData();

  return (
    <div className='mt-28 px-4 lg:px-24'>
        <img src={imageURL}alt="" className='h-90' />
        <h2>
            {bookTitle}
            {bookDescription}
            {authorName}
            {category}
        </h2>
        Singlebook</div>
  )
}

export default Singlebook