import TagList from "../components/tag/TagList";
import VideoGrid from "../components/videos/VideoGrid";
import Pagination from "../components/utils/Pagination";

export default function Home() {
  return (
    <>
      <TagList />
      <VideoGrid />
      <Pagination />
    </>
  );
}
