import { NavLink } from "react-router-dom"
import {ShoppingCartIcon} from "@heroicons/react/24/solid";
import Wrapper from "../Ui/Wrapper"
import { useContext } from "react";
import { CartContext } from "../../context/ContextProvider";

function Navbar() {
    const {cartMealsDetails} = useContext(CartContext);
    const mealsQuantity = cartMealsDetails.reduce((initialQantity, cartMeal) =>{
        return initialQantity += cartMeal.quantity;
    },0)
    return (
        <nav className="w-full py-1 bg-nav absolute block top-0 left-0 z-50">
            <Wrapper className="flex items-center justify-between text-white">
                <NavLink to={"/"}>
                    <div className="px-6 py-3 hover:nav-hover cursor-pointer transition-all">
                        <span className="text-3xl font-semibold">FoodAuto</span>
                    </div>
                </NavLink>

                <ul className="flex items-center justify-center font-medium transition-all">
                    <NavLink to={"#"}>
                        <li className="px-5 py-3 hover:nav-hover">
                            Login
                        </li>
                    </NavLink>
                    <NavLink to={"/cart"}>
                        <li className="relative px-5 py-3 hover:nav-hover">
                            <ShoppingCartIcon className="h-6 w-6"/>
                            <span className="absolute right-0 top-0 py-.5 px-2 rounded-full bg-red-600">{mealsQuantity}</span>
                        </li>
                    </NavLink>
                    <NavLink to={"#"}>
                        <li className="px-5 py-3 hover:nav-hover">
                            Contact
                        </li>
                    </NavLink>
                </ul>
            </Wrapper>
        </nav>
    )
}

export default Navbar