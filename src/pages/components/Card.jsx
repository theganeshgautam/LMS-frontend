import React from 'react'
import { Link } from 'react-router-dom'
const Card = ({book}) => {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg my-7" key={book._id}>
  <img className="w-full" src={book.imageUrl ? book.imageUrl : "https://s26162.pcdn.co/wp-content/uploads/sites/2/2022/05/Book.jpg"} alt="Book image" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{book.bookName}</div>
    <p className="text-gray-700 text-base">
      Rs. {book.bookPrice}
    </p>
    <p className="text-gray-700 text-base">
      ISBN {book.isbnNumber}
    </p>
    <Link to={`/book/${book._id}`}>See more</Link>
  </div>
</div>
    </>
  )
}

export default Card


//book image
//https://s26162.pcdn.co/wp-content/uploads/sites/2/2022/05/Book.jpg
//https://imageio.forbes.com/specials-images/imageserve/5f85be4ed0acaafe77436710/Stack-books-isolated-3d-rendering/960x0.jpg?height=507&width=711&fit=bounds

{/* <div className="px-6 pt-4 pb-2">
  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
</div> */}