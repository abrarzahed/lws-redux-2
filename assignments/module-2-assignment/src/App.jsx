import { Provider } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import Preview from "./components/Preview";
import TopForm from "./components/TopForm";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <TopForm />
      <Preview />
    </Provider>
  );
}

export default App;
