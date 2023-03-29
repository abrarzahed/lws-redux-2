import { useSelector } from "react-redux";
import { selectWatchVideos } from "../features/videos/videoSelectors";
import VideoItem from "./VideoItem";

export default function WatchedVideos() {
  const watchedVideos = useSelector(selectWatchVideos);

  console.log("[WatchedVideos] renders");

  return (
    <div>
      <ul className="divide-y divide-slate-200">
        {watchedVideos.map((video) => (
          <VideoItem key={video.id} video={video} />
        ))}
      </ul>
    </div>
  );
}
