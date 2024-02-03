import {createPortal} from "react-dom";
import { Toaster } from "react-hot-toast";

function Modal() {
    const portalElement = document.querySelector("#overlays");
    return ( 
        createPortal(<Toaster position="top-center"/>, portalElement)
    )
}
export default Modal;
