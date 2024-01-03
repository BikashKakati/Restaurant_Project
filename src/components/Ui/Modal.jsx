import ReactDOM from "react-dom";
import { useContext, useEffect } from "react";
import { CartContext } from "../../context/ContextProvider";
function Overlays(props) {
    const { setAddToCartPopup, addToCartPopup} = useContext(CartContext);
    useEffect(()=>{
        if(addToCartPopup){
          let timer = setTimeout(()=>{
            setAddToCartPopup(false);
          },2000)
    
          return()=>{
            clearTimeout(timer);
          }
        }
      },[addToCartPopup])
    return (
        <div className="fixed z-50 left-10 bottom-5 h-16 w-72 px-4 py-2 flex items-center justify-between bg-red-500 rounded-lg popup-animation">
            <p className="text-lg font-medium">{props.children}</p>
            <button onClick={() => setAddToCartPopup(false)} className="p-4">X</button>
        </div>
    )
}
function Modal(props) {
    const portalElement = document.querySelector("#overlays");
    return (
        <>
            {
                ReactDOM.createPortal(<Overlays>{props.children}</Overlays>, portalElement)
            }
        </>
    )
}
export default Modal;
