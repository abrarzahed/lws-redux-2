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

  if (!isLoading && !isError && jobs?.length > 0) {
    content = jobs.map((job) => <Job key={job.id} job={job} />);
  }

  return <div className="jobs-list">{content}</div>;
}
