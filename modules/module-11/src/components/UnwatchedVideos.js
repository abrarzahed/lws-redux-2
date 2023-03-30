import { useSelector } from "react-redux";
import { selectMemoisedFilteredVideos } from "../features/videos/videoSelectors";
import VideoItem from "./VideoItem";

export default function UnwatchedVideos() {
  const UnwatchedVideos = useSelector((state) =>
    selectMemoisedFilteredVideos(state, false)
  );

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
