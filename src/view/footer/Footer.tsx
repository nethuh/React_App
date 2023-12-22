import {Component} from "react";
import logo from "../../images/PigIcon.png"


export class Footer extends Component {
    render() {
        return (
            <div className="p-2 bg-black flex justify-center">
                <p className="text[10px] text-[#e6f0e6]
                pr-2 hover:text-amber-300
                cursor-pointer">
                    Copyright @2023</p>
                <h1 className="text-1xl text-center text-amber-300">This is Footer</h1>
                <img className="h-8 w-8 ml-1 pt-1" src={logo} alt=""/>
            </div>
        );
    }
}
