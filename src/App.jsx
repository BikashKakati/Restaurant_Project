import { Suspense, lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const Home = lazy(() => import("./pages/userLayout/Home/Home"));
const LogInForm = lazy(() => import("./pages/Log/LogInForm"));
const SignupForm = lazy(() => import("./pages/Log/SignupForm"));
const Profile = lazy(() => import("./pages/userLayout/Profile/Profile"));
const MealsCart = lazy(() => import("./pages/userLayout/Cart/MealsCart"));
const MealDetails = lazy(() => import("./pages/userLayout/Details/MealDetails"));
const ExploreCategory = lazy(() => import("./pages/userLayout/ExploreCategory/ExploreCategory"));

import { Loader } from "./components/Ui/Loader";
import Modal from "./components/Ui/Modal";
import UserLayout from "./pages/userLayout/UserLayout";
import { getAllMeals } from "./services/redux/api/cartThunks";
import { Toaster } from "react-hot-toast";
import { Dialog } from "./components/Ui/Dialog";


function App() {
  const dispatch = useDispatch();
  const { currentUser, authModelOn } = useSelector(state => state.auth);
  console.log(authModelOn);

  useEffect(() => {
    handleGetAllMeal();
    async function handleGetAllMeal() {
      await dispatch(getAllMeals()).unwrap();
    }
  }, [currentUser])

  return (
    <div className="relative w-full">
      <Modal >
        <Toaster position="top-center" />
      </Modal>
      {
        authModelOn &&
        <Modal>
          <Dialog />
        </Modal>
      }
      <Suspense fallback={<Loader initial={true} />}>
        <Routes>
          <Route path="/login" element={<LogInForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="cart" element={<PrivateRoute><MealsCart /></PrivateRoute>} />
            <Route path="profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
            <Route path="details/:id" element={<MealDetails />} />
            <Route path="categories/:catvarient" element={<ExploreCategory />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  )
}
export default App