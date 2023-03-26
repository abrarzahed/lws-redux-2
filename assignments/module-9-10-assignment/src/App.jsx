import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddTask from "./pages/AddTask";
import EditTask from "./pages/EditTask";
import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="add-task" element={<AddTask />} />
        <Route path="/tasks/edit-task/:taskId" element={<EditTask />} />
      </Routes>
    </Router>
  );
}

export default App;
