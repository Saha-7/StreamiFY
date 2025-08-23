import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constant'
import VideoCard from './VideoCard'

const VideoContainer = () => {
  const [videos, setVideos] = useState([])
  useEffect(()=>{
    getVideos()
  },[])

  const getVideos = async()=>{
    const response = await fetch(YOUTUBE_VIDEO_API)
    const data = await response.json()
    console.log(data)
    setVideos(data.items)
  }


  return (
    <div className='flex flex-wrap justify-center w-full'>
      {videos.map(video=> <VideoCard key={video?.contentDetails?.id} info={video} />) }
    </div>
  )
}

export default VideoContainer
