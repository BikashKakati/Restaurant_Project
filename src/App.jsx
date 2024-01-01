import Navbar from "./components/Navbar/Navbar"
import ContextProvider from "./context/ContextProvider"
import MealsCart from "./pages/Cart/MealsCart"
import MealDetails from "./pages/Details/MealDetails"
import ExploreCategory from "./pages/ExploreCategory/ExploreCategory"
import Home from "./pages/Home/Home"
import { Routes, Route } from "react-router-dom"


function App() {
  
  return (
    <ContextProvider>
      <div className="relative bg-slate-50 w-full min-h-dvh">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<MealsCart/>} />
          <Route path="/details/:id" element={<MealDetails />} />
          <Route path="/categories/:catvarient" element={<ExploreCategory />} />
        </Routes>
      </div>
    </ContextProvider>
  )
}
export default App