import { useSelector } from "react-redux";
import CartPage from "./CartPage";
import HomePage from "./HomePage";

export default function MainPage() {
  const route = useSelector((state) => state.route.path);

  return <>{route === "home" ? <HomePage /> : <CartPage />}</>;
}
