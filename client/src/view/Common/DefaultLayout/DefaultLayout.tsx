import React, {Component} from "react";
import {NavBar} from "../../NavBar/NavBar";
import {MainContent} from "../../mainContent/MainContent";
import {Footer} from "../../footer/Footer";
import {BrowserRouter} from "react-router-dom";

export class DefaultLayout extends Component {
    render() {
        return (
            <>
                <NavBar/>
                <MainContent/>
                <Footer/>
            </>
        );
    }
}
