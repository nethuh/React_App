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

                <div className="bg-pink-50 rounded-2xl w-96 h-12 p-1 mt-2">
                    <h1 className="text-gray-400 text-center p-2">Search</h1>
                </div>

                <ul className="flex mt-2">
                    <li className="p-2">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="p-2">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="p-2">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <button
                            className="bg-pink-800 text-white w-16 h-10 rounded-s hover:bg-teal-100 hover:text-black hover:font-bold">
                            <Link to="/Login">Log In</Link>
                        </button>
                    </li>
                </ul>
            </div>
        );
    }
}
