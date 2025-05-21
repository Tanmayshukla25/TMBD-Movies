import React from 'react'
import Row from "./Row";

function Movie({ urls, heading, btn1, btn2 }) {
  return (
    <>
    <div className='flex justify-center items-center my-2 text-white '>
        <div>
            <img src="" alt="" />
        </div>
        <div>
            <h1></h1>
            <p></p>

            <button></button>
            <button></button>
            <h3></h3>
            <p></p>
            <div>
                <span>Status:{}</span>
                <span>Release Date:{}</span>
                <span>Runtime:{}</span>
                <hr />
                <span>Director:{}</span>
                <hr />
                <span>Writer:{}</span>
                <hr />
            </div>
        </div>
    </div>
    </>
  )
}

export default Movie