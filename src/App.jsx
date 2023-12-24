import MealDetails from "./pages/Details/MealDetails"
import ExploreCategory from "./pages/ExploreCategory/ExploreCategory"
import Home from "./pages/Home/Home"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"


function App(){
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/details/:id" element={<MealDetails/>}/>
        <Route path="/categories/:catvarient" element={<ExploreCategory/>}/>
      </Routes>
    </Router>
    </>
  )
}
export default App