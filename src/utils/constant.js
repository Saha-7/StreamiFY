const GOOGLE_API_KEY =process.env.REACT_APP_API_KEY

//console.log("API Key:", process.env.REACT_APP_API_KEY); // Should show your key

export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key="+ GOOGLE_API_KEY

