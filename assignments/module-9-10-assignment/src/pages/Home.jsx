import AddNewButton from "../components/AddNewButton";
import Sidebar from "../components/Sidebar";
import TaskList from "../components/TaskList";

export default function Home() {
  return (
    <div className="container relative">
      <Sidebar />
      <div className="lg:pl-[16rem] 2xl:pl-[23rem]">
        <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
          <AddNewButton />
          <TaskList />
        </main>
      </div>
    </div>
  );
}
