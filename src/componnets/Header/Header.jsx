import { NavLink } from "react-router-dom";
import Logo from "./Logo/Logo";



const Header = () => {
    return (
        <div className="flex items-center justify-between">
            <Logo></Logo>
            <nav>
                <ul className="flex gap-7 text-lg font-normal">
                    <li>
                        <NavLink to="/" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-700 underline" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/donation" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-700 underline" : ""
                            }
                        >
                            Donation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/statistics" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-700 underline" : ""
                            }
                        >
                            Statistics
                        </NavLink>
                    </li>

                </ul>
            </nav>

        </div>
    );
};

export default Header;