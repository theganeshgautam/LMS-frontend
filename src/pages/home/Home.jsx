import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import axios from 'axios'

const Home = () => {
  const [books, setBooks]= useState([])
  const fetchBooks= async()=>{
    const response= await axios.get('https://lms-backend-q531.onrender.com/book/')
    if(response.status === 200){
      setBooks(response.data.data)
    }
  }

  useEffect(()=>{
    fetchBooks()
  },[])

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap mt-20 justify-evenly p-5">
        {
          books.length>0 && books.map((book)=>{
            return(
              <Card key={book._id} book={book} />
            )
          })
        }
      </div>
    </>
  )
}

export default Home

// key={book._id} prop added in the card component as stated by chatgpt.