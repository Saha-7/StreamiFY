import React from 'react'

const Sidebar = () => {
  return (
    <div className='p-5 shadow-lg w-48'>
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className='pt-5 font-bold'>Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Gaming</li>
        <li>Sports</li>
        <li>Movies</li>
      </ul>
      <h1 className='pt-5 font-bold'>Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>News</li>
        <li>Podcasts</li>
      </ul>
      <h1 className='pt-5 font-bold'>More on Streamify</h1>
      <ul>
        <li>Streamify Premium</li>
        <li>Streamify Studio</li>
        <li>Streamify Music</li>
        <li>Streamify Kids</li>
      </ul>
      <h1 className='pt-5 font-bold'>Settings</h1>
      <h1 className='pt-2 font-bold'>Report history</h1>
      <h1 className='pt-2 font-bold'>Help</h1>
      <h1 className='pt-2 font-bold'>Send feedback</h1>
    </div>
  )
}

export default Sidebar
