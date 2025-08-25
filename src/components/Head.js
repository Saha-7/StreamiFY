import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'

const Head = () => {
  const dispatch = useDispatch()
  const toggleMenuHandler = ()=>{
    dispatch(toggleMenu())
  }
  return (
    <div className='grid grid-flow-col p-5 shadow-lg mb-2'>
      <div className="header-section col-span-1 bg-white text-black p-2 flex">
        <img 
          className='h-10 cursor-pointer' 
          src="https://img.icons8.com/ios-filled/50/menu--v6.png" 
          alt="hamburger-menu"
          onClick={()=>toggleMenuHandler()}
        />
        <div className='flex items-center mx-2'>
          <a className='cursor-pointer' href='/'>
          <img 
          className='h-10 px-2' 
          src="https://img.icons8.com/nolan/64/online.png" 
          alt="logo"
        />
        </a>
        <h1 className="header text-3xl font-light font-mono">Streamify</h1>
        </div>
      </div>
      <div className='col-span-10 px-10'>
        <input 
          className='w-1/2 p-2 border border-gray-700 rounded-l-full'
          placeholder='Search'
          type='text' />
        <button className='p-2 bg-gray-300 border border-gray-700 rounded-r-full'>🔍</button>
      </div>
      <div className='col-span-1'>
        <img 
          className=''
          alt='user-icon'
          src='https://img.icons8.com/ios-filled/50/user-male-circle.png'  
        />
      </div>
    </div>
  )
}

export default Head
