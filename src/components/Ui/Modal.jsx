import { createPortal } from "react-dom";

function Modal({children}) {
    const portalElement = document.querySelector("#overlays");
    return ( 
        createPortal(children, portalElement)
    )
}
export default Modal;
