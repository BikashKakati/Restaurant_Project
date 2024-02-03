import { Suspense, lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const Home = lazy(() => import("./pages/Home/Home"));
const LogInForm = lazy(() => import("./pages/Log/LogInForm"));
const SignupForm = lazy(() => import("./pages/Log/SignupForm"));
const Profile = lazy(() => import("./pages/Profile/Profile"));
const MealsCart = lazy(() => import("./pages/Cart/MealsCart"));
const MealDetails = lazy(() => import("./pages/Details/MealDetails"));
const ExploreCategory = lazy(() => import("./pages/ExploreCategory/ExploreCategory"));

import { Loader } from "./components/Ui/Loader";
import Modal from "./components/Ui/Modal";
import { getAllMeals } from "./services/redux/api/cartThunks";
import Footer from "./components/Footer/Footer";


function App() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(getAllMeals());
  }, [currentUser])

  return (
    <div className="relative w-full">
      <Navbar />
      <Modal/>
      <Suspense fallback={<Loader initial={true}/>}>
        <Routes>
          <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/cart" element={<PrivateRoute><MealsCart /></PrivateRoute>} />
          <Route path="/login" element={<LogInForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path="/details/:id" element={<PrivateRoute><MealDetails /></PrivateRoute>} />
          <Route path="/categories/:catvarient" element={<PrivateRoute><ExploreCategory /></PrivateRoute>} />
        </Routes>
      </Suspense>
      <Footer/>
    </div>
  )
}
export default App