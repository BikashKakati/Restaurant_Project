import Navbar from "./components/Navbar/Navbar"
import ContextProvider from "./context/ContextProvider"
import MealDetails from "./pages/Details/MealDetails"
import ExploreCategory from "./pages/ExploreCategory/ExploreCategory"
import Home from "./pages/Home/Home"
import { Routes, Route } from "react-router-dom"


function App() {
  
  return (
    <ContextProvider>
      <div className="bg-slate-50 relative w-full min-h-dvh">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<MealDetails />} />
          <Route path="/categories/:catvarient" element={<ExploreCategory />} />
        </Routes>
      </div>
    </ContextProvider>
  )
}
export default App