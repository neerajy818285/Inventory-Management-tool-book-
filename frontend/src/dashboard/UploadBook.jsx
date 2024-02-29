import React, { useState } from 'react'
import { Button, Checkbox, Label, TextInput, Textarea } from 'flowbite-react';
const UploadBook = () => {
    const bookCategories=[
     "Fiction",
     "Non.fiction",
     "Mistery",
     "prgramming",
     "History",
     "Autobiography",
     "travel",
     "Horror",
     "Science Fiction"
    ]
    const [selectedBookCategory,setSelectedBookCategory]=useState(bookCategories[0]);
    const handleChangesSelectedValue=(Event)=>{
      console.log(Event.target.value); 
        setSelectedBookCategory(Event.target.value);
    }
    const handleBookSubmit=(Event)=>{
        Event.preventDefault();
        const form =Event.target;

        const bookTitle=form.bookTitle.value;
         const authorName=form.authorName.value;
         const imageURL=form.imageURL.value;
         const category=form.categoryName.value;
         const bookDescription=form.bookDescription.value;

        
         const bookObj={
            bookTitle,authorName,imageURL,category,bookDescription}
         
         console.log(bookObj) 
         fetch ("http://localhost:4001/upload-book",{
            method:"POST",
            header:{
                "Content-type":"application/json",

            },
            body:JSON.stringify(bookObj)
         }).then(res=>res.json()).then(data=>{
            alert("Book uploaded Successfully!!!")
          form.reset ();
        })
    }
  return (

    <div className='px-4 my-12'>
        <h2 className='mb-8 text-3x1 font-bold'>Upload A books</h2>
        <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px]max-w-md flex-col gap-4">
         <div className='flex gap-8'>
            
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title" />
        </div>
        <TextInput id="bookTitle" name='bookTitle' type="text" placeholder="Book name" required />
      </div>

      <div className='lg:w-1/2'>
        <div className='mb-2 block'>
      <Label htmlFor="authorName" value="Author Name" />
        </div>
        <TextInput id="authorName" name='authorName' type="text" placeholder="Author Name" required />
      </div>
      </div>

      <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value="Book Image URL" />
        </div>
        <TextInput id="imageURL" name='imageURL' type="text" placeholder="Book Image URL" required />
      </div>

      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="inputState" value="Book Category" />
        </div>
       <Select id='inputState' name='catergoryName' className='w-full rounded' value={selectedBookCategory} 
       onChange={handleChangesSelectedValue}>
        {
            bookCategories.map((option)=><option key={option} value={option}>{option}</option>)
        }

        </Select>
      </div>
      <div>
        <div className='mb-2 block'>
            <Label htmlFor="bookDescription"
            value='bookDescription'/>

        </div>
        </div>
        <Textarea id='bookDescription' name='bookDescription' placeholder='bookDescription'required rows={4}
        />
      </div>
      <Button type="submit" className='mt-5'>Upload book</Button>
    </form>
    </div>
  )
}

export default UploadBook