import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addJobAsync, editJobAsync } from "../features/jobs/jobsSlice";

export default function AddAndEditForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { jobToEdit } = useSelector((state) => state.jobs);
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    salary: "",
    deadline: "",
  });

  useEffect(() => {
    if (jobToEdit?.id) {
      setFormData(jobToEdit);
    }
  }, [jobToEdit]);

  // reset form
  const resetForm = () => {
    setFormData({
      title: "",
      type: "",
      salary: "",
      deadline: "",
    });
  };

  // handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (jobToEdit?.id) {
      dispatch(editJobAsync(formData));
    } else {
      dispatch(addJobAsync(formData));
    }
    resetForm();
    navigate("/");
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="fieldContainer">
        <label
          htmlFor="lws-JobTitle"
          className="text-sm font-medium text-slate-300"
        >
          Job Title
        </label>
        <select
          id="lws-JobTitle"
          name="title"
          required
          value={formData.title}
          onChange={handleInputChange}
        >
          <option defaultValue="" hidden>
            Select Job
          </option>
          <option value="Software Engineer">Software Engineer</option>
          <option value="Software Developer">Software Developer</option>
          <option value="Full Stack Developer">Full Stack Developer</option>
          <option value="MERN Stack Developer">MERN Stack Developer</option>
          <option value="DevOps Engineer">DevOps Engineer</option>
          <option value="QA Engineer">QA Engineer</option>
          <option value="Product Manager">Product Manager</option>
          <option value="Social Media Manager">Social Media Manager</option>
          <option value="Junior Executive">Junior Executive</option>
          <option value="Senior Executive">Senior Executive</option>
          <option value="Android App Developer">Android App Developer</option>
          <option value="IOS App Developer">IOS App Developer</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Frontend Engineer">Frontend Engineer</option>
        </select>
      </div>

      <div className="fieldContainer">
        <label htmlFor="lws-JobType">Job Type</label>
        <select
          id="lws-JobType"
          name="type"
          required
          value={formData.type}
          onChange={handleInputChange}
        >
          <option defaultValue="" hidden>
            Select Job Type
          </option>
          <option value="Full Time">Full Time</option>
          <option value="Internship">Internship</option>
          <option value="Remote">Remote</option>
        </select>
      </div>

      <div className="fieldContainer">
        <label htmlFor="lws-JobSalary">Salary</label>
        <div className="flex border rounded-md shadow-sm border-slate-600">
          <span className="input-tag">BDT</span>
          <input
            type="number"
            name="salary"
            id="lws-JobSalary"
            required
            className="!rounded-l-none !border-0"
            placeholder="20,00,000"
            value={formData.salary}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="fieldContainer">
        <label htmlFor="lws-JobDeadline">Deadline</label>
        <input
          type="date"
          name="deadline"
          id="lws-JobDeadline"
          required
          value={formData.deadline}
          onChange={handleInputChange}
        />
      </div>

      <div className="text-right">
        <button
          type="submit"
          id="lws-submit"
          className="cursor-pointer btn btn-primary w-fit"
        >
          {jobToEdit?.id ? "Edit" : "Add"}
        </button>
      </div>
    </form>
  );
}
