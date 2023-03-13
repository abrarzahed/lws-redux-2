import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobsAsync } from "../features/jobs/jobsSlice";
import Error from "../utils/Error";

import Loader from "../utils/Loader";
import Job from "./Job";

export default function JobList() {
  const dispatch = useDispatch();
  const { isLoading, isError, error, jobs } = useSelector(
    (state) => state.jobs
  );

  const { type, salaryRange, searchTerm } = useSelector(
    (state) => state.filters
  );

  useEffect(() => {
    dispatch(getJobsAsync());
  }, [dispatch]);

  // decide what to render
  let content;
  if (isLoading) content = <Loader />;

  if (!isLoading && isError) content = <Error error={error} />;

  if (!isLoading && !isError && jobs?.length === 0) {
    content = <Error error="No jobs found" />;
  }

  // filter by type
  const filterByType = (job) => {
    if (type === "All") {
      return true;
    } else if (type === "Full Time") {
      return job.type === "Full Time";
    } else if (type === "Internship") {
      return job.type === "Internship";
    } else {
      return job.type === "Remote";
    }
  };

  // filter by searchTerm
  const filterSearchTerm = (job) => {
    if (searchTerm === "") {
      return true;
    } else if (
      job.title.toUpperCase().includes(searchTerm) ||
      job.title.toLowerCase().includes(searchTerm) ||
      job.title.includes(searchTerm)
    ) {
      return true;
    } else {
      return false;
    }
  };

  // sort by salary range
  const sortBySalaryRange = (a, b) => {
    if (salaryRange === "Default") {
      return true;
    } else if (salaryRange === "High to Low") {
      return Number(b.salary) - Number(a.salary);
    } else {
      return Number(a.salary) - Number(b.salary);
    }
  };

  if (!isLoading && !isError && jobs?.length > 0) {
    content = jobs
      .filter(filterByType)
      .filter(filterSearchTerm)
      .sort(sortBySalaryRange)
      .map((job) => <Job key={job.id} job={job} />);
  }

  return <div className="jobs-list">{content}</div>;
}
