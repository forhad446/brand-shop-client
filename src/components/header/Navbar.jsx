import { NavLink } from "react-router-dom";
import logo from './../../assets/images/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../authentication/AuthProvider";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

const Navbar = () => {

    const { user, setUser, setLoader } = useContext(AuthContext);
    console.log(user);

    return (
        <nav className="text-xl font-bold py-3">
            <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
                <div className="flex justify-center items-center">
                    <img className="w-[60px] h-[60px]" src={logo} alt="" />
                    <h2> <span className="italic tracking-widest font-extrabold">Mr.</span> <br /> Computer</h2>
                </div>
                {/* nav item for large device  */}
                <ul className=" justify-center hidden md:flex gap-6">
                    <li>
                        <NavLink
                            to='/'
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                            }
                        >Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/myCart'
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                            }
                        >My Cart
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/add_product'
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                            }
                        >Add Product
                        </NavLink>
                    </li>
                    {
                        user.email ?
                            <>
                                <li>
                                    <NavLink
                                        to='/profile'
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                                        }
                                    >Profile
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/login'
                                        onClick={() => {
                                            signOut(auth)
                                            setUser([]);
                                            setLoader(false)
                                        }}
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                                        }
                                    >Log Out
                                    </NavLink>
                                </li>
                            </> :
                            <>
                                <li>
                                    <NavLink
                                        to='/login'
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                                        }
                                    >Login
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/signUp'
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                                        }
                                    >Sign Up
                                    </NavLink>
                                </li>
                            </>
                    }

                </ul>
                {/* nav item for small device */}
                <div className="text-3xl block md:hidden">

                </div>
            </div>

        </nav>
    );
};

export default Navbar;