import React from 'react';
import CartItem from './CartItem';
import data from './data';

const Header = () => {
    return (
        <header>

                <h1 className="text-center mt-3">All Items</h1>
                <section className="py-4 container">
                    <div className="row">
                        {data.productData.map((item,index)=>{
                            return(
                                <CartItem
                                img={item.img}
                                title={item.title}
                                desc={item.desc}
                                price={item.price}
                                item={item}
                                key={index}
                                />
                            )
                        })}
                    </div>
                </section>
        </header>
    )
}

export default Header
