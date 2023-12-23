import {Component} from "react";
import {CartItem} from "../../../model/CartItem";

interface ModifyCartProps{
    data : any
}

interface ModifyCartState{
    itemCount:number
}

export class ModifyCart extends Component <ModifyCartProps , ModifyCartState>{

    public static itemList:CartItem[] = [];

    constructor(props:ModifyCartProps) {
        super(props);
        this.state = {
            itemCount:0
        }
    }

    render() {

        let {itemCount} = this.state;

        const onDecreaseItemCount = () => {
            if (itemCount > 1) {
                this.setState({itemCount: --itemCount})
            }else {
                alert("Item Count can't be less than 1")
            }
        }

        const onIncreaseItemCount = () => {
            this.setState({itemCount: ++itemCount})
        }

        return (
            <div
                className="bg-pink-900 text-white group-hover:bg-pink-300 group-hover:text-black text-center font-bold rounded-xl w-28 h-8 pt-1 ml-7">
                <button className="float-left text-[8px] bg-pink-200 rounded-lg h-5 w-5" onClick={onDecreaseItemCount}>-</button>
                <small className="text-xl">{itemCount}</small>
                <button className="float-right text-[8px] bg-pink-200 rounded-lg h-5 w-5" onClick={onIncreaseItemCount}>+</button>

            </div>
        );
    }
}
