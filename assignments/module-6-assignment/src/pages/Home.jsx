import BlogList from "../components/BlogList";
import SideBar from "../components/SideBar";

export default function Home() {
  return (
    <section className="wrapper">
      <SideBar />
      <BlogList />
    </section>
  );
}
