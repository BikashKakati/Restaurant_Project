import { Suspense, lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const Home = lazy(() => import("./pages/userLayout/Home/Home"));
const Profile = lazy(() => import("./pages/userLayout/Profile/Profile"));
const MealsCart = lazy(() => import("./pages/userLayout/Cart/MealsCart"));
const MealDetails = lazy(() =>
  import("./pages/userLayout/Details/MealDetails")
);
const ExploreCategory = lazy(() =>
  import("./pages/userLayout/ExploreCategory/ExploreCategory")
);

import { Toaster } from "react-hot-toast";
import { Loader } from "./components/Ui/Loader";
import Modal from "./components/Ui/Modal";
import AuthDialog from "./pages/Log/AuthDialog";
import UserLayout from "./pages/userLayout/UserLayout";
import { getAllMeals } from "./services/redux/api/cartThunks";

function App() {
  const dispatch = useDispatch();
  const { currentUser, authModelOn } = useSelector((state) => state.auth);

  useEffect(() => {
    if (currentUser) {
      handleGetAllMeal();
    }
    async function handleGetAllMeal() {
      await dispatch(getAllMeals()).unwrap();
    }
  }, [currentUser]);

  return (
    <div className="relative w-full">
      <Modal>
        <Toaster position="top-right" />
      </Modal>

      {<Modal>{authModelOn && <AuthDialog />}</Modal>}

      <Suspense fallback={<Loader initial={true} />}>
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route
              path="cart"
              element={
                <PrivateRoute>
                  <MealsCart />
                </PrivateRoute>
              }
            />
            <Route
              path="profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route path="details/:id" element={<MealDetails />} />
            <Route
              path="categories/:catvarient"
              element={<ExploreCategory />}
            />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}
export default App;
