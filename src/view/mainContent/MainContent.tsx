import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "../pages/Home/Home";
import {About} from "../pages/About/About";
import {Contact} from "../pages/Contact/Contact";

export class MainContent extends Component {
    render() {
        return (
                <div className=" pt-80 pb-80 mx-auto bg-emerald-500">

                    <Routes>
                        <Route path="/" Component={Home}></Route>
                        <Route path="/about" Component={About}></Route>
                        <Route path="/contact" Component={Contact}></Route>
                    </Routes>
                    {/*<div className="h-20 w-20 text-center bg-black text-fuchsia-500*/}
                    {/*rotate-45*/}
                    {/*shadow-gray-900 shadow-xl hover:shadow-red-50*/}
                    {/*cursor-pointer*/}
                    {/*min-h-screen max-h-screen*/}
                    {/*mx-auto">*/}
                    {/*    <h1>Height & width</h1>*/}
                    {/*</div>*/}
                </div>
        );
    }
}