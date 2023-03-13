import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

import AddJob from "./pages/AddJob";
import EditJob from "./pages/EditJob";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8">
          <SideBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addJob" element={<AddJob />} />
            <Route path="/editJob/:jobId" element={<EditJob />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
