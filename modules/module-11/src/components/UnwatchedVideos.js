import { useSelector } from "react-redux";
import { selectMemoisedUnwatchedVideos } from "../features/videos/videoSelectors";
import VideoItem from "./VideoItem";

export default function UnwatchedVideos() {
  const UnwatchedVideos = useSelector(selectMemoisedUnwatchedVideos);

  console.log("[UnWatchedVideos] renders");

  return (
    <div>
      <ul className="divide-y divide-slate-200">
        {UnwatchedVideos.map((video) => (
          <VideoItem key={video.id} video={video} />
        ))}
      </ul>
    </div>
  );
}
