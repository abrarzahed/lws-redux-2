import { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectMemoisedFilteredVideos } from "../features/videos/videoSelectors";
import VideoItem from "./VideoItem";

export default function UnwatchedVideos() {
  const selectUnwatchedVideos = useMemo(selectMemoisedFilteredVideos, []);
  const UnwatchedVideos = useSelector((state) =>
    selectUnwatchedVideos(state, false)
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
