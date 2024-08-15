import { ShoppingCartIcon, HomeIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Wrapper from "../Ui/Wrapper";
import { useSelector } from "react-redux";
import Button from "../Ui/Button";

function Navbar() {
    const location = useLocation();
    const { currentUser } = useSelector(state => state.auth);
    const { cartDetails } = useSelector(state => state.cart);
    const navigate = useNavigate();
    const mealsQuantity = cartDetails?.reduce((initialQantity, cartMeal) => {
        return initialQantity + cartMeal.quantity;
    }, 0)
    return (
        <nav className={`w-full py-0.5 absolute ${location.pathname === '/' ? "bg-nav" : "bg-zinc-800"} block top-0 left-0 z-20`}>
            <Wrapper className="flex items-center justify-between text-white">
                <div className="p-3 mr-6 md:mr-0 md:hover:nav-hover cursor-pointer transition-all">
                    <NavLink to={"/"}>
                        <span className="text-3xl font-semibold">FoodAuto</span>
                    </NavLink>
                </div>

                {currentUser && <p className="font-semibold md:mr-4">Welcome {currentUser?.email}</p>}

                <ul className="fixed left-0 bottom-0 w-full  bg-zinc-800 md:relative md:w-auto md:bg-transparent flex items-center justify-around  md:justify-center md:space-x-5 font-medium transition-all">
                    <li className="px-5 py-3 md:hover:nav-hover md:hidden">
                        <NavLink to="/" className="flex flex-col items-center">
                            <HomeIcon className="h-6 w-6" />
                            <span className="text-xs">Home</span>
                        </NavLink>
                    </li>
                    {
                        currentUser ?
                       ( <li className="px-5 py-3 md:hover:nav-hover">

                        <Link to="/profile" className="flex items-center flex-col">
                            <UserCircleIcon className="h-7 w-7" />
                            <span className="text-xs">profile</span>
                        </Link>
                    </li>)
                    :
                    (
                        <Button onClick={()=>{navigate("/login")}}>Login</Button>
                    )
                    }
                    <li className="relative px-5 py-3 md:hover:nav-hover">
                        <NavLink to={"/cart"} className="flex flex-col items-center">
                            <ShoppingCartIcon className="h-6 w-6" />
                            <span className="absolute right-0 top-0 py-.5 px-2 rounded-full bg-red-600">{mealsQuantity}</span>
                            <span className="text-xs">cart</span>
                        </NavLink>
                    </li>

                </ul>
            </Wrapper>
        </nav>
    )
}

export default Navbar