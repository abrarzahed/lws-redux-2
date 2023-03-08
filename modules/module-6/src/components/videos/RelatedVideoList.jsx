import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideosAsync } from "../../features/relatedVideos/relatedVideosSlice";
import Error from "../utils/Error";
import Loader from "../utils/Loader";
import RelatedVideoItem from "./RelatedVideoItem";

export default function RelatedVideoList({ video = {} }) {
  const dispatch = useDispatch();
  const { id, tags } = video;

  const { isLoading, isError, error, videos } = useSelector(
    (state) => state.relatedVideos
  );

  useEffect(() => {
    dispatch(fetchRelatedVideosAsync({ tags, id }));
  }, [dispatch, id, tags]);

  // decide what to render
  let content;
  if (isLoading) content = <Loader />;
  if (!isLoading && isError) content = <Error error={error} />;
  if (!isLoading && !isError && videos.length === 0)
    content = <Error error="No Video Found" />;
  if (!isLoading && !isError && videos.length > 0) {
    content = videos.map((video) => (
      <RelatedVideoItem key={video.id} video={video} />
    ));
  }

  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {content}
    </div>
  );
}
