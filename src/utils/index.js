export function getPrice(rawData) {
    if(!rawData){
        return 0;
    }
    return Number(rawData?.slice(2));
  }


  // Points for fingers
const fingerJoints = {
    thumb: [0, 1, 2, 3, 4],
    indexFinger: [0, 5, 6, 7, 8],
    middleFinger: [0, 9, 10, 11, 12],
    ringFinger: [0, 13, 14, 15, 16],
    pinky: [0, 17, 18, 19, 20],
  };

  
  // Drawing function
  export const drawHand = (predictions, ctx) => {
    // Check if we have predictions
    if (predictions.length > 0) {
      // Loop through each prediction
      predictions.forEach((prediction) => {
        // Grab landmarks
        const landmarks = prediction.landmarks;
  
        // Loop through fingers
        for (let j = 0; j < Object.keys(fingerJoints).length; j++) {
          let finger = Object.keys(fingerJoints)[j];
          //  Loop through pairs of joints
          for (let k = 0; k < fingerJoints[finger].length - 1; k++) {
            // Get pairs of joints
            const firstJointIndex = fingerJoints[finger][k];
            const secondJointIndex = fingerJoints[finger][k + 1];
  
            // Draw path
            ctx.beginPath();
            ctx.moveTo(
              landmarks[firstJointIndex][0],
              landmarks[firstJointIndex][1]
            );
            ctx.lineTo(
              landmarks[secondJointIndex][0],
              landmarks[secondJointIndex][1]
            );
            ctx.strokeStyle = "yellow";
            ctx.lineWidth = 4;
            ctx.stroke();
          }
        }
  
        // Loop through landmarks and draw em
        for (let i = 0; i < landmarks.length; i++) {
          // Get x point
          const x = landmarks[i][0];
          // Get y point
          const y = landmarks[i][1];
          // Start drawing
          ctx.beginPath();
          ctx.arc(x, y, 6, 0, 3 * Math.PI);
  
          // Set line color
          ctx.fillStyle = "red";
          ctx.fill();
        }
      });
    }
  };

  export  const moveCursor = (x, y) => {
    const cursorElement = document.getElementById("virtual-cursor");
    if (cursorElement) {
      cursorElement.style.transform = `translate(${x}px, ${y}px)`;
    }
  };


  export const cursorClicker = (type, x, y) => {
    if(!type) return;
    const button = type === "left-click" ? 0 : 2;
  
    const targetElement = document.elementFromPoint(x, y);

    targetElement.focus?.();
    targetElement.style.border = "2px solid red";
  
    if (!targetElement) {
      console.warn("No element found under the cursor for click simulation");
      return;
    }
  
    const mouseDownEvent = new MouseEvent("mousedown", {
      bubbles: true,
      cancelable: true,
      button,
      clientX: x,
      clientY: y,
    });
    targetElement.dispatchEvent(mouseDownEvent);
  
    const mouseUpEvent = new MouseEvent("mouseup", {
      bubbles: true,
      cancelable: true,
      button,
      clientX: x,
      clientY: y,
    });
    targetElement.dispatchEvent(mouseUpEvent);

    const clickEvent = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      clientX: x,
      clientY: y,
    });
    targetElement.dispatchEvent(clickEvent);

  };
  


  export const handleGestureAction = (detectedPose, intervalRef) => {
    if (detectedPose === "scroll-up") {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        window.scrollBy({ top: -50, behavior: "smooth" });
      }, 100);
    } else if (detectedPose === "scroll-down") {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        window.scrollBy({ top: 50, behavior: "smooth" });
      }, 100);
    } else if (detectedPose === "stop-scroll") {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
  };

  export function getFingerLen(topValue, bottomValue){
    return topValue - bottomValue;
  }