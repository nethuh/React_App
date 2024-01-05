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
            itemCount:1
        }
    }

    componentDidMount(){
        const {itemCount} = this.state

        if (this.props.data.isAdded){
            if (ModifyCart.itemList.find(item =>item.product.id === this.props.data.product.id)){
                ModifyCart.itemList.push(
                    {
                        product: this.props.data.product,
                        itemCount: itemCount
                    }
                )
            }
        }
        console.log(ModifyCart.itemList);
    }

    componentDidUpdate(prevProps: Readonly<ModifyCartProps>, prevState: Readonly<ModifyCartState>, snapshot?: any) {

        let {itemCount} = this.state;

        let item = ModifyCart.itemList.find(
            item => item.product.id === this.props.data.product.id
        );

        // @ts-ignore
        let index = ModifyCart.itemList.indexOf(item);

        ModifyCart.itemList.slice(index, 1);

        ModifyCart.itemList.push({
            product:this.props.data.product,
            itemCount: itemCount
        })

    }
    render() {

        let {itemCount} =this.state

        let onDecreaseItemCount = ()=>{
            if (this.state.itemCount > 1){
                this.setState({itemCount: --itemCount})
            }else {}
        }

        let onIncreaseItemCount = ()=>{
            this.setState({itemCount: ++itemCount})
        }


        return (
            <div
                className="bg-pink-900 text-white group-hover:bg-pink-300 group-hover:text-black text-center font-bold rounded-xl w-28 h-8 pt-1 ml-7">
                <button className="float-left pl-3 text-xl -mt-1" onClick={onDecreaseItemCount}>-</button>
                <small className="text-xl">{itemCount}</small>
                <button className="float-right pr-3 text-2xl -mt-1" onClick={onIncreaseItemCount}>+</button>

            </div>
        );
    }
}
