import React from 'react'
import Button from './Button'

const list = [
  "All", "Songs", "Live", "BGMI", "Football", 
  "La Liga", 
  "Trending", "Gen AI", "Python", "Movies", 
  "Travel", "News", "Fashion"
]

const ButtonList = () => {
  return (
    <div className='flex justify-center'>
      {/* <img className='h-8 w-8 p-1 mt-4' src='https://img.icons8.com/ios-glyphs/30/less-than.png' alt='arrow'/> */}
    <div className='flex '>
      {list.map((item, index)=>
        <Button key={index} name={item} />
       )}
    </div>
      {/* <img className='h-8 w-8 p-1 mt-4' src='https://img.icons8.com/ios-glyphs/30/more-than.png' alt='arrow'/> */}

    </div>
  )
}

export default ButtonList
