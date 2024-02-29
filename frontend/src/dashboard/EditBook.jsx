import React,{ useLoaderData, useParams,useState } from 'react'
import { Button, Checkbox, Label, TextInput, Textarea } from 'flowbite-react';
    const EditBook=()=>{
        const {id}=useParams();
        const {bookTitle, authorName, imgURL,category,BookDescription}=useLoaderData();
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
           const handleChangesSelectedValue=(event)=>{
             console.log(event.target.value); 
               setSelectedBookCategory(event.target.value);
           }
           const handleUpdate=(event)=>{
               event.preventDefault();
               const form =event.target;
       
               const bookTitle=form.bookTitle.value;
                const authorName=form.authorName.value;
                const imageURL=form.imageURL.value;
                const category=form.categoryName.value;
                const bookDescription=form.bookDescription.value;
       
               
                const updateBookObj={
                   bookTitle,authorName,imageURL,category,bookDescription
                }
                
               // console.log(bookObj) 
               fetch(`http://localhost:4001/book/${id}`,{
                method:"PATCH",
                headers:{
                    "Content-Type":"application/json"
                },body:JSON.stringify(updateBookObj)
               })
               .then(res=>res.json()).then(data=>{
                alert("Book update Successfully!!!")
                })
            }
         return (
       
           <div className='px-4 my-12'>
               <h2 className='mb-8 text-3x1 font-bold'>Update the books data</h2>
               <form onSubmit={handleUpdate} className="flex lg:w-[1180px]max-w-md flex-col gap-4">
                <div className='flex gap-8'>
                   
             <div className='lg:w-1/2'>
               <div className="mb-2 block">
                 <Label htmlFor="bookTitle" value="Book Title" />
               </div>
               <TextInput id="bookTitle" name='bookTitle' type="text" placeholder="Book name" required defaultValue={bookTitle} />
             </div>
       
             <div className='lg:w-1/2'>
               <div className='mb-2 block'>
             <Label htmlFor="authorName" value="Author Name" />
               </div>
               <TextInput id="authorName" name='authorName' type="text" placeholder="Author Name" required defaultValue={authorName}/>
             </div>
             </div>
       
             <div className='flex gap-8'>
             <div className='lg:w-1/2'>
               <div className="mb-2 block">
                 <Label htmlFor="imageURL" value="Book Image URL" />
               </div>
               <TextInput id="imageURL" name='imageURL' type="text" placeholder="Book Image URL" required defaultValue={imageURL} />
             </div>
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
               <Textarea id='bookDescription' name='bookDescription' placeholder='bookDescription'required rows={4}
               />
             </div>
             <Button type="submit" className='mt-5'>Update book</Button>
           </form>
</div>
)
}
export default EditBook;