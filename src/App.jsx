import { useContext} from "react";
import { CartContext } from "./context/ContextProvider";
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import MealsCart from "./pages/Cart/MealsCart"
import MealDetails from "./pages/Details/MealDetails"
import ExploreCategory from "./pages/ExploreCategory/ExploreCategory"
import Home from "./pages/Home/Home"
import Modal from "./components/Ui/Modal"
import Log from "./pages/Log/Log";


function App() {
  const { addToCartPopup} = useContext(CartContext);

  return (
      <div className="relative bg-slate-50 w-full min-h-dvh">
        <Navbar />
        {addToCartPopup.show && <Modal>{addToCartPopup.msg}</Modal>}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<MealsCart/>} />
          <Route path="/login" element={<Log/>} />
          <Route path="/details/:id" element={<MealDetails />} />
          <Route path="/categories/:catvarient" element={<ExploreCategory />} />
        </Routes>
      </div>
  )
}
export default App