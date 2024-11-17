import { Suspense, lazy, useEffect, useState } from "react";
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
import Webcam from "react-webcam";
import { useHandPoseContext } from "./context/MotionDetectProvider";
import { handleGestureAction } from "./utils";
import { Dialog } from "./components/Ui/Dialog";
import goUpImg from "./assets/goup.png";
import goDownImg from "./assets/godown.png";
import selectImg from "./assets/select.png";
import stopImg from "./assets/stop.png";

function App() {
  const dispatch = useDispatch();
  const { currentUser, authModelOn } = useSelector((state) => state.auth);
  const { webcamRef, intervalRef, detectedPose, canvasRef } =
    useHandPoseContext();
  const [isGestureNoticeOn, setIsGestureNoticeOn] = useState(false);

  useEffect(() => {
    if (detectedPose) {
      handleGestureAction(detectedPose, intervalRef);
    }
  }, [detectedPose]);

  useEffect(() => {
    setIsGestureNoticeOn(true);
  }, []);

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
      {isGestureNoticeOn && (
        <Dialog
          headerData={"Fun with AI"}
          onCloseModel={() => {
            setIsGestureNoticeOn(false);
          }}
        >
          <ul className="px-10">
            <PoseInstructionItmes title={"To Go Down"} subtitle={"Raise index finger"} img={goDownImg} alt={"go down image"}/>
            <PoseInstructionItmes title={"To Go Up"} subtitle={"Raise index and middle finger together"} img={goUpImg} alt={"go up image"}/>
            <PoseInstructionItmes title={"To Stop Scroll"} subtitle={"Fist without thumb"} img={stopImg} alt={"stop scrolling image"}/>
            <PoseInstructionItmes title={"To click something"} subtitle={"Join index and thumb"} img={selectImg} alt={"click something image"}/>
          </ul>
        </Dialog>
      )}
      <div
        id="virtual-cursor"
        className="fixed w-6 h-6 bg-green-600 rounded-full pointer-events-none -trasnlate-x-1/2 -translate-y-1/2 z-50 shadow-lg"
      ></div>
      <div>
        <Webcam
          ref={webcamRef}
          style={{
            position: "fixed",
            right: 0,
            top:70,
            zIndex: 30,
            width: 340,
            height: 255,
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: "fixed",
            right: 0,
            top:70,
            zIndex: 30,
            width: 340,
            height: 255,
          }}
        />
      </div>

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

function PoseInstructionItmes({title, subtitle, img, alt}) {
  return (
    <li className="flex items-center my-2">
      <div className="w-4 h-4 bg-red-500 rounded-full mr-5"></div>
      <div>
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-sm">{subtitle}</p>
      </div>
      <img
        src={img}
        alt={alt}
        className="w-[4rem] object-cover object-center"
      />
    </li>
  );
}
