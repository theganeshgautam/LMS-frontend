import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import axios from 'axios'

const SingleBook = () => {
  const navigate = useNavigate()
  const [book, setBook]= useState({})
  const {id} = useParams()
  
  const fetchBook = async()=>{
    const response = await axios.get(`http://localhost:3000/book/${id}`)
    if(response.status===200){
      setBook(response.data.data)
    }
  }

  useEffect(()=>{
    fetchBook()
  },[])

  const deleteBook = async () => {
    try {
      const isConfirmed = window.confirm("Are you sure you want to delete this book?");
      if (isConfirmed) {
        const response = await axios.delete(`http://localhost:3000/book/${id}`);
        if (response.status === 200) {
          navigate("/");
          console.log("Book deleted successfully!");
        } else {
          console.log("Failed to delete book:", response.statusText);
        }
      } else {
        console.log("Delete operation cancelled.");
      }
    } catch (error) {
      console.error("An error occurred during book deletion:", error);
    }
  };
  
  return (
    <>
      <Navbar />
      <div>
        <img
          className="w-fit mt-20"
          src={book.imageUrl ? book.imageUrl : "https://s26162.pcdn.co/wp-content/uploads/sites/2/2022/05/Book.jpg"
          }
          alt="Book image"
          />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{book.bookName}</div>
          <p className="text-gray-700 text-base">Rs. {book.bookPrice}</p>
          <p className="text-gray-700 text-base">{book.isbnNumber}</p>
          <p className="text-gray-700 text-base">Author: {book.authorName}</p>
          <p className="text-gray-700 text-base">Publication: {book.publication}</p>
          <p className="text-gray-700 text-base">publishedAt: {book.publishedAt}</p>
        </div>
        <button onClick={deleteBook} className="bg-blue-300 p-2 ml-3">Delete</button>
        <Link to={`/editBook/${book._id}`}><button className="bg-blue-300 p-2 ml-3">Edit</button> </Link>
        
      </div>
    </>
  );
};

export default SingleBook;

//navbar vitra ko main div ko class className="max-w-sm rounded overflow-hidden shadow-lg my-7 "

//
// const deleteBook= async()=>{
//   const isConfirmed = window.confirm("Are you sure you want to delete this book?");

//   // Check if user confirmed
//   if (isConfirmed) {
//     // Perform the delete operation
//     const response = await axios.delete(`http://localhost:3000/book/${id}`)
//     if(response.status===200){
//       navigate("/") 
//     }
//     console.log("Book deleted successfully!");
//   } else {
//     // Handle the case when the user cancels the operation
//     console.log("Delete operation cancelled.");
//   }

// }