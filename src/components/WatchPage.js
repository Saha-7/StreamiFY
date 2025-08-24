import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  
  console.log("Video ID:", videoId); // a0Bg0srLKGU
  
  return (
    <div>
      <h1>Watching video: {videoId}</h1>
      {/* Your video player here */}
    </div>
  );
};


export default WatchPage;