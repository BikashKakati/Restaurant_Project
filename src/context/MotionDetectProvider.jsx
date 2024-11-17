import * as handPose from "@tensorflow-models/handpose";
import "@tensorflow/tfjs";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { cursorClicker, drawHand, getFingerLen, moveCursor } from "../utils";

const Context = createContext();

export function MotionDetectProvider({ children }) {
  const webcamRef = useRef(null);
  const [handPoseModel, setHandPoseModel] = useState(null);
  const [detectedPose, setDetectedPose] = useState(null);
  const intervalRef = useRef(null);
  const intervalRefDetect = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    async function loadHandPoseModel() {
      const loadedModel = await handPose.load();
      setHandPoseModel(loadedModel);
    }

    loadHandPoseModel();
  }, []);

  useEffect(() => {
    if (handPoseModel) {
      intervalRefDetect.current = setInterval(() => detectHandPose(), 200);
    }

    return () => clearInterval(intervalRefDetect.current);
  }, [handPoseModel]);

  async function detectHandPose() {
    if (
      handPoseModel &&
      webcamRef.current &&
      webcamRef.current.video?.readyState === 4
    ) {
      const webcamVideo = webcamRef.current.video;
      const predictions = await handPoseModel.estimateHands(webcamVideo);
      if (predictions.length > 0) {
        const videoWidth = webcamVideo.videoWidth;
        const videoHeight = webcamVideo.videoHeight;

        // Set video width
        webcamRef.current.video.width = videoWidth;
        webcamRef.current.video.height = videoHeight;

        // Set canvas height and width
        canvasRef.current.width = videoWidth;
        canvasRef.current.height = videoHeight;

        const twoDCanvas = canvasRef.current.getContext("2d");
        drawHand(predictions, twoDCanvas);

        const landmarks = predictions[0]?.landmarks;

        const { screenX, screenY } = getVirtualCursorPosition(
          landmarks,
          videoWidth,
          videoHeight
        );
        moveCursor(screenX, screenY);

        const isPinching =
          Math.abs(landmarks[8][0] - landmarks[4][0]) < 20 && // Thumb and index are close
          Math.abs(landmarks[8][1] - landmarks[4][1]) < 20;

        if (isPinching) {
          cursorClicker("left-click", screenX, screenY);
        }

        const isIndexFingerUp =
          getFingerLen(landmarks[5][1], landmarks[8][1]) > 40; // Index finger
        const isMiddleFingerUp =
          getFingerLen(landmarks[9][1], landmarks[12][1]) > 40; // Middle finger
        const isRingFingerUp =
          getFingerLen(landmarks[13][1], landmarks[16][1]) > 40; // Middle finger

        // To catch thumb pose
        const isIndexFingerDown =
          getFingerLen(landmarks[5][1], landmarks[8][1]) < 5;
        const isMiddleFingerDown =
          getFingerLen(landmarks[9][1], landmarks[12][1]) < 5;
        const isRingFingerDown =
          getFingerLen(landmarks[13][1], landmarks[16][1]) < 5;

        if (isIndexFingerDown && isMiddleFingerDown && isRingFingerDown) {
          setDetectedPose("stop-scroll");
        } else if (isIndexFingerUp && isMiddleFingerUp && !isRingFingerUp) {
          setDetectedPose("scroll-up");
        } else if (isIndexFingerUp && !isMiddleFingerUp) {
          setDetectedPose("scroll-down");
        } else {
          setDetectedPose(null);
        }
      }
    }
  }

  function getVirtualCursorPosition(landmarks, videoWidth, videoHeight) {
    const cursorX = landmarks[20][0]; // X coordinate of pinky finger tip
    const cursorY = landmarks[20][1]; // Y coordinate of pinky finger tip

    // Map cursor position to the screen
    const screenX = (cursorX / videoWidth) * window.innerWidth;
    const screenY = (cursorY / videoHeight) * window.innerHeight;

    return { screenX, screenY };
  }

  return (
    <Context.Provider
      value={{ webcamRef, handPoseModel, canvasRef, intervalRef, detectedPose }}
    >
      {children}
    </Context.Provider>
  );
}

export function useHandPoseContext() {
  const context = useContext(Context);
  if (!context)
    throw new Error("useHandpose must be used within HandposeProvider");
  return context;
}
