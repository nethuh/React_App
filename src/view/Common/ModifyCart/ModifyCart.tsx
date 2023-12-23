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

    componentDidMount(): void {
        const {itemCount} = this.state;

        if(this.props.data.isAdded){
            if(!ModifyCart.itemList.find(item => item.product.id === this.props.data.Product.id)){
                ModifyCart.itemList.push({product:this.props.data.Product, itemCount: itemCount})
            }
        }
    }

    componentDidUpdate(prevProps: Readonly<ModifyCartProps>, prevState: Readonly<ModifyCartState>, snapshot?: any): void {

        let {itemCount} = this.state
        let item = ModifyCart.itemList.find(item => item.product.id === this.props.data.product.id)

        //@ts-ignore
        let index = ModifyCart.ItemsList.indexOf(item);
        ModifyCart.itemList.splice(index);
        ModifyCart.itemList.push({product:this.props.data.Product, itemCount: this.state.itemCount})
    }
    render() {

        const itemCount = this.state.itemCount;

        const onDecreaseItemCount = () => {
            if(itemCount>0){
                this.setState({itemCount:itemCount-1})
            }
            else{
                alert("Item count cannot be less than 0")
            }
        }

        const onIncreaseItemCount = () => {
            this.setState({itemCount:itemCount+1})
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
