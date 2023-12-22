import {Component} from "react";
import logo from "../../images/PigIcon.png"
import {Link} from "react-router-dom";

export class NavBar extends Component {
    render() {
        return (

            <div className="p-6 bg-pink-400 flex justify-between">
                <div className="flex">
                    <img className="h-16" src={logo} alt=""/>
                    <h1 className="pt-2 text-pink-700 font-bold text-4xl mt-2 ml-3">Piggy</h1>
                </div>

                <ul className="list-none flex mt-1">
                    <li className="mr-2 text-[11px] text-white">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="mr-2 text-[11px] text-white">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="mr-2 text-[11px] text-white">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
                <button className="text-[10px] text-[#e6f0e6]
                bg-blue-400 pl-3 pr-3
                hover:text-black
                ">Sign In
                </button>
            </div>
        );
    }
}
