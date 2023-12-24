import {Component} from "react";
import Logo from "../../../images/PigIcon.png"

export class About extends Component {
    render() {
        return (
            <div className="bg-pink-600 min-h-screen pt-40">
                <div className="bg-pink-300 p-8 rounded-md shadow-md">
                    <h1 className="text-4xl font-bold mb-4 text-pink-700">About Us</h1>
                    <div className="flex justify-between">
                        <p className="text-lg font-semibold w-[70%] text-gray-700 mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.<br/>
                            <br/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.<br/>
                            <br/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </p>

                        <img className="h-96 -mt-20" src={Logo}/>

                    </div>
                </div>
            </div>
        );
    }
}
