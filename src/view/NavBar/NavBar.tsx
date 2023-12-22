import {Component} from "react";
import logo from "../../images/fileicon.png"
import {Link} from "react-router-dom";

export class NavBar extends Component {
    render() {
        return (

            <div className="p-5 bg-[#444444] flex justify-between">
                <h1 className="text-1xl text-black">Shop</h1>
                <img className="h-5 w-5 " src={logo} alt=""/>
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