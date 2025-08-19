import React from 'react'
import Button from './Button'

const list = [
  "All", "Songs", "Live", "BGMI", "Football", 
  "La Liga", "Premiere League", "Machine learning", 
  "AI", "Gen AI", "Python", "Movies", 
  "Travel", "News", "Fashion"
]

const ButtonList = () => {
  return (
    <div className='flex'>
      {list.map((item, index)=>
        <Button key={index} name={item} />
       )}
    </div>
  )
}

export default ButtonList
