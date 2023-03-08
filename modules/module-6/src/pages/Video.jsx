import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RelatedVideoList from "../components/videos/RelatedVideoList";
import SingleVideoView from "../components/videos/SingleVideoView";
import { fetchVideoAsync } from "../features/video/videoSlice";
import Loader from "../components/utils/Loader";
import Error from "../components/utils/Error";

export default function Video() {
  const dispatch = useDispatch();
  const { videoId } = useParams();

  const { isLoading, isError, error, video } = useSelector(
    (state) => state.video
  );

  // decide what to render
  let content;
  if (isLoading) content = <Loader />;
  if (!isLoading && isError) content = <Error error={error} />;
  if (!isLoading && !isError && !video?.id)
    content = <Error error="Video Not Found" />;
  if (!isLoading && !isError && video.id) {
    content = (
      <div className="grid grid-cols-3 gap-2 lg:gap-8">
        <SingleVideoView video={video} />
        <RelatedVideoList video={video} />
      </div>
    );
  }

  useEffect(() => {
    dispatch(fetchVideoAsync(videoId));
  }, [dispatch, videoId]);

  return (
    <section className="pt-6 pb-20">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        {content}
      </div>
    </section>
  );
}
