import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { typeChanged } from "../features/filters/filterSlice";
import { jobToEditDeselected } from "../features/jobs/jobsSlice";

export default function SideBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleNavigateToAddJob = () => {
    dispatch(jobToEditDeselected());
    navigate("/addJob");
  };

  // handle select type
  const handleSelectType = (type) => {
    navigate("/");
    dispatch(typeChanged(type));
  };
  return (
    <div className="sidebar">
      <nav>
        <ul className="space-y-4">
          <li>
            <button
              className="main-menu menu-active"
              id="lws-alljobs-menu"
              onClick={() => handleSelectType("All")}
            >
              <i className="fa-solid fa-briefcase mr-1"></i>
              <span> All Available Jobs</span>
            </button>
            <ul className="space-y-6 lg:space-y-2">
              <li>
                <button
                  className="sub-menu"
                  id="lws-internship-menu"
                  onClick={() => handleSelectType("Internship")}
                >
                  <i className="fa-solid fa-stop !text-[#FF5757] mr-2"></i>
                  Internship
                </button>
              </li>
              <li>
                <button
                  className="sub-menu"
                  id="lws-fulltime-menu"
                  onClick={() => handleSelectType("Full Time")}
                >
                  <i className="fa-solid fa-stop !text-[#FF8A00] mr-2"></i>
                  Full Time
                </button>
              </li>
              <li>
                <button
                  className="sub-menu"
                  id="lws-remote-menu"
                  onClick={() => handleSelectType("Remote")}
                >
                  <i className="fa-solid fa-stop !text-[#56E5C4] mr-2"></i>
                  Remote
                </button>
              </li>
            </ul>
          </li>
          <li>
            <button
              className="main-menu"
              id="lws-addJob-menu"
              onClick={handleNavigateToAddJob}
            >
              <i className="fa-solid fa-file-circle-plus mr-2"></i>
              <span>Add NewJob</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
