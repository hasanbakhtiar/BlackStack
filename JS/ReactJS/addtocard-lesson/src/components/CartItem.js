import React from 'react'
import { useCart } from 'react-use-cart'

const CartItem = (props) => {


    const { addItem } = useCart();


    return (
        
            <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                <div className="card p-0 overflow-hidden h-100 shadow">
                    <img  src={props.img} className="card-img-top" alt="err" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <h6 className="card-title">{props.price}$</h6>
                        <p className="card-text">{props.desc}</p>
                        <button className="btn btn-primary" onClick={()=>addItem(props.item)}>Add To Cart</button>
                    </div>
                </div>
            </div>
        
    )
}

export default CartItem
