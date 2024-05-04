import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from "react"
import Home from "./pages/home/Home"
import SingleBook from "./pages/singleBook/SingleBook"
import AddBook from "./pages/addBook/AddBook"
import EditBook from "./pages/editBook/EditBook"

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/book/:id" element={<SingleBook/>} />
          <Route path="/addBook" element={<AddBook />} />
          <Route path="/editBook/:id" element={<EditBook />} /> {/* this is a dynamic path/route. so hamile esma useParams use garna sakinxa */}
        </Routes>
      </BrowserRouter>
  )
}


export default App 
