import React, { useEffect } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constant'

const VideoContainer = () => {
  useEffect(()=>{
    getVideos()
  },[])

  const getVideos = async()=>{
    const response = await fetch(YOUTUBE_VIDEO_API)
    const data = await response.json()
    console.log(data)
  }


  return (
    <div>
      VideoContainer
    </div>
  )
}

export default VideoContainer
