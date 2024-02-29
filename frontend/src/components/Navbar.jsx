import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaBlog} from "react-icons/fa";
import { AuthContext } from '../contects/AuthProvider';
import { FaBarsStaggered } from 'react-icons/fa6';
const Navbar = () => {
    const [isMenuOpen,setIsMenuOpen]=useState(false);
    const [isSticky,setIsStricky]=useState(false);
    const {user}=useContext(AuthContext);
    console.log(user)
    const toggleMenu=()=>{
        setIsMenuOpen(!isMenuOpen);
    }
    useEffect(()=>{
        const handleScoll=()=>{
            if(window.scrollY>100){
                setIsStricky(true);
            }
            else{
                setIsStricky(false);
            }
          
        }
        window.addEventListener("scroll",handleScoll);
        return()=>{
            window.addEventListener("scroll",handleScoll);
        }
    },[])
  //nav items
 const navItem=[
    {link:"Home",path:"/"},
    {link:"About",path:"/about"},
    {link:"Shop",path:"/shop"},
    {link:"Sell Your book",path:"/admin/dashboard"},
    {link:"Blogs",path:"/blogs"},
 
 ]
  return (
    <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all duration-300'>
        <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-300":""}`}>
         <div className='flex justify-between items-center text-base gap-8'>
            <Link to="/" className='text-2x1 font-bold text-blue-700 flex items-center gap-2'><FaBlog className='inline-block'/>Books</Link>
         <ul className='md:flex space-x-12 hidden' >
            {
            navItem.map(({link,path})=><Link key={path} to={path} className='block text-base text-black uppercase cursor-pointer hover:text-blue-700'>{link}</Link>)
            }
         </ul>
         </div>
        
        </nav>
    </header>
  )
}

export default Navbar;