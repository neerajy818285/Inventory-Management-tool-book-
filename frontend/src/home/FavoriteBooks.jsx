import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

const FavoriteBooks = () => {
    const {books,setBooks}=useState([]);

    useEffect( ()=>{
        fetch("http://localhost:4001/all-books").then(res=>res.json()).then(data=>setBooks(data.slice(0,6)));
    })
  return (
    <div><BookCards books={books} heading="Best Seller book"/>
        </div>
  )
}

export default FavoriteBooks