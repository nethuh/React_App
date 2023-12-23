import {Component} from "react";

interface ModifyCartProps{
    data : any
}

interface ModifyCartState{
    itemCount:number
}

export class ModifyCart extends Component <ModifyCartProps , ModifyCartState>{

    constructor(props:ModifyCartProps) {
        super(props);
    }

    render() {
        return (
            <div
                className="bg-pink-900 text-white group-hover:bg-pink-300 group-hover:text-black text-center font-bold rounded-xl w-28 h-8 pt-1 ml-7">
                <button className="float-left text-[8px] bg-pink-200 rounded-lg h-5 w-5">-</button>
                <small className="text-xl">1</small>
                <button className="float-right text-[8px] bg-pink-200 rounded-lg h-5 w-5">+</button>

            </div>
        );
    }
}
