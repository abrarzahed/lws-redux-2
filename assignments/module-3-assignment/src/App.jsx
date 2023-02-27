import { Provider } from "react-redux";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <MainPage />
    </Provider>
  );
}

export default App;
