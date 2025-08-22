import React from 'react'

const VideoCard = ({info}) => {

  const {snippet, statistics} = info
  const {channelTitle, thumbnails, title}=snippet
  const {likeCount, viewCount} = statistics
  console.log(info)

  return (
    <div className='p-2 m-2 w-52 shadow-lg'>
      <img className='rounded-lg' src={thumbnails.standard.url} alt='thumbnail' />
      <ul>
        <li className='py-2 font-bold'>{title}</li>
        <li className='font-semibold'>{channelTitle}</li>
        <li>{viewCount} views</li>
      </ul>
    </div>
  )
}

export default VideoCard
