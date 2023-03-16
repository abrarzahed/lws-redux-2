// import Success from "../ui/Success";
import { useState } from "react";
import { useAddVideoMutation } from "../../features/api/apiSlice";
import TextArea from "../ui/TextArea";
import TextInput from "../ui/TextInput";
import Success from "../ui/Success";
import Error from "../ui/Error";

export default function Form() {
  const [addVideo, { data: video, isLoading, isError, error, isSuccess }] =
    useAddVideoMutation();

  const [formData, setFormData] = useState({
    title: "",
    thumbnail: "",
    description: "",
    link: "",
    author: "",
    date: "",
    duration: "",
    views: "",
  });

  const resetForm = () => {
    setFormData({
      title: "",
      thumbnail: "",
      description: "",
      link: "",
      author: "",
      date: "",
      duration: "",
      views: "",
    });
  };

  //  handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    resetForm();
  };

  //   handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    addVideo(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <TextInput
                title="Video Title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <TextInput
                title="Author"
                name="author"
                value={formData.author}
                onChange={handleInputChange}
              />
            </div>

            <div className="col-span-6">
              <TextArea
                name="description"
                title="Description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>

            <div className="col-span-6">
              <TextInput
                name="link"
                title="YouTube Video link"
                value={formData.link}
                onChange={handleInputChange}
              />
            </div>

            <div className="col-span-6">
              <TextInput
                name="thumbnail"
                title="Thumbnail link"
                value={formData.thumbnail}
                onChange={handleInputChange}
              />
            </div>

            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <TextInput
                name="date"
                title="Upload Date"
                value={formData.date}
                onChange={handleInputChange}
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <TextInput
                name="duration"
                title="Video Duration"
                value={formData.duration}
                onChange={handleInputChange}
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <TextInput
                name="views"
                title="Video no of views"
                value={formData.views}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            disabled={isLoading}
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>

        {isSuccess && <Success message="Video was added successfully" />}
        {isError && <Error message="There was an error adding the video" />}
      </div>
    </form>
  );
}
