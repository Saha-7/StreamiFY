import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='px-4 py-2 m-1 mt-3 rounded-xl bg-gray-200'>{name}</button>
    </div>
  )
}

export default Button
