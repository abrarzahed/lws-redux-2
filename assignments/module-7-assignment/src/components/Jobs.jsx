import React from "react";
import FilterAndSearch from "./FilterAndSearch";
import JobList from "./JobList";

export default function Jobs() {
  return (
    <div className="lg:pl-[14rem] mt-[5.8125rem]">
      <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10">
          <h1 className="lws-section-title">All Available Jobs</h1>
          <FilterAndSearch />
        </div>
        <JobList />
      </main>
    </div>
  );
}
