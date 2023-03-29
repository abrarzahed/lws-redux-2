import { useSelector } from "react-redux";
import { selectFilters } from "../features/filters/filterSelectors";
import {
  selectAllVideos,
  selectUnwatchedVideos,
  selectWatchVideos,
} from "../features/videos/videoSelectors";
import VideoItem from "./VideoItem";

export default function AllVideos() {
  const filter = useSelector(selectFilters);

  const videos = useSelector((state) => {
    if (filter === "all") {
      return selectAllVideos(state);
    } else if (filter === true) {
      return selectWatchVideos(state);
    } else {
      return selectUnwatchedVideos(state);
    }
  });

  console.log("[AllVideos] renders");

  return (
    <div>
      <ul className="divide-y divide-slate-200">
        {videos.map((video) => (
          <VideoItem key={video.id} video={video} />
        ))}
      </ul>
    </div>
  );
}
