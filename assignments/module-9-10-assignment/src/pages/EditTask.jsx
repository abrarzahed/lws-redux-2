import EditTaskForm from "../components/EditTaskForm";

export default function AddTask() {
  return (
    <div className="container relative">
      <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
        <h1 className="mt-4 mb-8 text-3xl font-bold text-center text-gray-800">
          Update Task
        </h1>

        <div className="justify-center mb-10 space-y-2 md:flex md:space-y-0">
          <EditTaskForm />
        </div>
      </main>
    </div>
  );
}
