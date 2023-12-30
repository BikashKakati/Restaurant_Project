import { NavLink } from "react-router-dom"
import Wrapper from "../Ui/Wrapper"

function Navbar() {
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
                    <NavLink to={"#"}>
                        <li className="px-5 py-3 hover:nav-hover">
                            Cart
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