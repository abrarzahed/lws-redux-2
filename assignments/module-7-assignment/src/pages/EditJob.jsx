import { useParams } from "react-router-dom";
import AddAndEditForm from "../components/AddAndEditForm";

export default function EditJob() {
  const { jobId } = useParams();
  console.log(jobId);
  return (
    <div className="lg:pl-[14rem] mt-[5.8125rem]">
      <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <h1 className="mb-10 text-center lws-section-title">Edit Job</h1>

        <div className="max-w-3xl mx-auto">
          <AddAndEditForm />
        </div>
      </main>
    </div>
  );
}
