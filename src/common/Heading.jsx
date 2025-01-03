import React from 'react'

const Heading = ({ text, ClassStyle }) => {
  return (
    <h1 className={`font-bold sm:text-4xl text-3xl sm:leading-custom-3xl text-z-black text-center ${ClassStyle}`}>{text}</h1>
  )
}

export default Heading