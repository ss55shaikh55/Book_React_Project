import React from 'react'
import "./BookPage.css"

function BookPage() {
  return (
    <div className='containerDiv'>

      <div style={{ flexDirection: 'column' }}>
        <div className='imgaeDiv'>Image Here</div>

        {/* Add To Cart Button Div*/}
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <button style={{ flex: 1, margin: '7px' }} type="submit">Add to cart </button>
          <button style={{ flex: 1, margin: '7px' }} type="submit">Buy Now ff</button>
        </div>
      </div>

      <div className='bookInfoDiv'>

        {/* Title */}
        <h2 style={{ fontSize: "35px" }}>LET US JAVA  (English, Paperback, Kanetkar Yashavant P.)</h2>
        {/* Discription */}
        <p style={{ fontSize: "20px" }}>java is a easy language that any one can learn and do amazing project using it. It is also used to develop backend of the web development also.</p>

        <h4>S.P. Kanitkar</h4>

        <h3>Rs.259</h3>
        <h3>Rs.259</h3>

      </div>

    </div>
  )
}

export default BookPage