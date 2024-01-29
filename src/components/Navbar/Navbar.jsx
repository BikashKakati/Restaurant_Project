import { UserCircleIcon } from "@heroicons/react/24/outline";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { Link, NavLink, useLocation } from "react-router-dom";
import Wrapper from "../Ui/Wrapper";
import { useSelector } from "react-redux";

function Navbar() {
    const location = useLocation();
    const { currentUser } = useSelector(state => state.auth);
    const { cartDetails } = useSelector(state => state.cart);
    const mealsQuantity = cartDetails?.reduce((initialQantity, cartMeal) => {
        return initialQantity += cartMeal.quantity;
    }, 0)
    return (
        <nav className={`w-full py-0.5 absolute ${location.pathname ==='/' ? "bg-nav":"bg-zinc-800"} block top-0 left-0 z-20`}>
            <Wrapper className="flex items-center justify-between text-white">
                <NavLink to={"/"}>
                    <div className="px-6 py-3 md:hover:nav-hover cursor-pointer transition-all">
                        <span className="text-3xl font-semibold">FoodAuto</span>
                    </div>
                </NavLink>

                <ul className="fixed left-0 bottom-0 w-full  bg-zinc-800 md:relative md:w-auto md:bg-transparent flex items-center justify-around  md:justify-center md:space-x-6 font-medium transition-all">
                    {currentUser && <li>Welcome {currentUser?.email}</li>}
                    <li className="px-5 py-3 md:hover:nav-hover">
                        {
                            currentUser ?
                                <Link to="/profile" className="flex items-center flex-col">
                                    <UserCircleIcon className="h-7 w-7" />
                                    <span className="text-xs">profile</span>
                                </Link>
                                :
                                <Link to="/login">Log in</Link>
                        }
                    </li>
                    <li className="relative px-5 py-3 md:hover:nav-hover">
                        <NavLink to={"/cart"} className="flex flex-col ">
                            <ShoppingCartIcon className="h-6 w-6" />
                            <span className="absolute right-0 top-0 py-.5 px-2 rounded-full bg-red-600">{mealsQuantity}</span>
                            <span className="text-xs">cart</span>
                        </NavLink>
                    </li>
                    <li className="px-5 py-3 md:hover:nav-hover">
                        <NavLink to={"#"} className="flex flex-col">
                            <PhoneIcon className="h-6 w-6"/>
                            <span className="text-xs">contact</span>
                        </NavLink>
                    </li>
                </ul>
            </Wrapper>
        </nav>
    )
}

export default Navbar