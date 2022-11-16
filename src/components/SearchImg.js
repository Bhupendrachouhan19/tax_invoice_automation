import React from 'react'

function SearchImg(props) {

    const img  = `https://source.unsplash.com/400x300/?${props.name}`;
  return (
    <>
        <img src={img} alt="_Ajeet"></img>
    </>
  )
}

export default SearchImg;