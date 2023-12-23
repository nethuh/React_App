import {Component} from "react";
import Img1 from "../../../images/pig.png";
import {ModifyCart} from "../ModifyCart/ModifyCart";

interface ProductProps {
    data: any
}

interface ProductState {
    isActive: boolean
}

export class Product extends Component<ProductProps, ProductState> {
    constructor(props:ProductProps) {
        super(props);
        this.state = {
            isActive: false
        }
    }

    render() {

        const {data} = this.props;
        const image: string = "../../images/" + data.image;


        return (
            <div
                className="service-card w-[300px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-pink-100 flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-pink-950">
                <img src={Img1}/>
                <p className="font-bold text-2xl group-hover:text-white text-black/80">{data.name}</p>
                <p className="text-gray-400 text-sm">
                    Website ravida surna eveti semen the conse tusio anivite dianne one nivam acestion vue artin
                    dictum.</p>
                <div className="flex">
                    <h2 className="bg-pink-950 text-white group-hover:bg-pink-300 group-hover:text-black text-center font-bold rounded-xl w-24 pt-1">{data.currency} {data.price}</h2>
                    {
                        this.state.isActive ?
                           <ModifyCart></ModifyCart>
                            : <button
                                className="bg-pink-950 text-white group-hover:bg-pink-300 group-hover:text-black text-center font-bold rounded-xl w-28 h-8 pt-1 ml-7"
                                onClick={this.addToCartOnClick}>Add To Cart
                            </button>
                    }
                </div>
            </div>
        )
            ;
    }

    private addToCartOnClick = () => {
        this.setState({isActive: true}, () => {
            console.log(this.state.isActive);
            alert(this.state.isActive)
        })
    }
}
