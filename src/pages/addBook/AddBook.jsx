import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddBook = () => {

    //second wala method yo ho (first wala chai coAddBook.jsx ho)
    const navigate = useNavigate()
    const [data, setData]= useState({
        setBookName: '',
        bookPrice: '',
        isbnNumber: null,
        authorName: '',
        publishedAt: '',
        publication: ''
    })
    const [image, setImage]= useState(null)

    const handleChange = (e)=>{
        const name= e.target.name
        const value = e.target.value
        setData({
            ...data,
            [name]: value
        })   
    }

    const handleSubmit= async(e)=>{
        
        e.preventDefault()
        const formData = new FormData()

        Object.entries(data).forEach(([key,value])=>{
            formData.append(key,value)
        })
        formData.append('image',image)

        const response= await axios.post('http://localhost:3000/book',formData)
        if(response.status === 200){
            navigate("/")
        }else{
            alert("Something went wrong")
        }
    }

  return (
    <>
      <Navbar/>
    <div className="bg-white rounded-lg shadow-md p-8 w-full mx-auto my-16 max-w-md mt-20">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6">Add Book</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-600">Book Name</label>
                <input type="text" id="bookName" name="bookName" className="mt-1 p-2 w-full border rounded-md text-gray-800" onChange={handleChange} />
            </div>
            <div className="mb-4">
                <label htmlFor="bookPrice" className="block text-sm font-medium text-gray-600">Book Price</label>
                <input type="number" id="bookPrice" name="bookPrice" className="mt-1 p-2 w-full border rounded-md text-gray-800" onChange={handleChange}/>
            </div>
            <div className="mb-6">
                <label htmlFor="isbnNumber" className="block text-sm font-medium text-gray-600">ISBN Number</label>
                <input type="number" id="isbnNumber" name="isbnNumber" className="mt-1 p-2 w-full border rounded-md text-gray-800" onChange={handleChange}/>
            </div>
            <div className="mb-6">
                <label htmlFor="authorName" className="block text-sm font-medium text-gray-600">Author Name</label>
                <input type="text" id="authorName" name="authorName" className="mt-1 p-2 w-full border rounded-md text-gray-800" onChange={handleChange}/>
            </div>
            <div className="mb-6">
                <label htmlFor="publication" className="block text-sm font-medium text-gray-600">Publication</label>
                <input type="text" id="publication" name="publication" className="mt-1 p-2 w-full border rounded-md text-gray-800" onChange={handleChange}/>
            </div>
            <div className="mb-6">
                <label htmlFor="publishedAt" className="block text-sm font-medium text-gray-600">publishedAt</label>
                <input type="date" id="publishedAt" name="publishedAt" className="mt-1 p-2 w-full border rounded-md text-gray-800" onChange={handleChange}/>
            </div>
            <div className="mb-6">
                <label htmlFor="bookImage" className="block text-sm font-medium text-gray-600">Book Image</label>
                <input type="file" id="bookImage" name="image" className="mt-1 p-2 w-full border rounded-md text-gray-800" onChange={(e)=>setImage(e.target.files[0])} />
            </div>
            <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Add Book</button>
        </form>
    </div>
    </>
  )
}

export default AddBook


//another method
    // const navigate = useNavigate()
    // const [data, setData]= useState({
    //     setBookName: '',
    //     bookPrice: '',
    //     isbnNumber: null,
    //     authorName: '',
    //     publishedAt: '',
    //     publication: ''
    // })
    // const [image, setImage]= useState(null)

    // const handleChange = (e)=>{
    //     const name= e.target.name
    //     const value =  e.target.value
    //     setData({
    //         ...data,
    //         [name]: value
    //     })   
    // }

    // const handleSubmit= async(e)=>{
    //     e.preventDefault()
    //     const formData = new FormData()

    //     Object.entries(data).forEach(([key,value])=>{
    //         formData.append(key,value)
    //     })
    //     formData.append('image',image)

    //     const response= await axios.post('http://localhost:3000/book',formData)
    //     if(response.status === 201){
    //         navigate("/")
    //     }else{
    //         alert("Something went wrong")
    //     }
    // }