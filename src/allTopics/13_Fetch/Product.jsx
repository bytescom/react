// import React from 'react'
import { useState, useEffect } from "react";

const ShowProduct = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const controller = new AbortController();

        async function getProducts() {
            try {
                let res = await fetch("https://dummyjson.com/products", {
                    signal: controller.signal,
                })
                let data = await res.json();
                console.log(data);
                setItems(data.products);
            } catch (error) {
                console.log(error);
            }
        }

        getProducts();

        return () => {
            controller.abort();
        };
    }, []);

    return (
        <div>
            <h1>All Products</h1>
            <div>
                {items.length === 0 ? (
                    <p> No products available </p>
                ) : (
                    <section>
                        {items.map((ele) => {
                            return (
                                <div key={ele.id}>
                                    <img
                                        src={ele.thumbnail}
                                        alt={ele.title}
                                        height={200}
                                        width={200}
                                    />
                                    <h2>{ele.title}</h2>
                                    <p>{ele.description}</p>
                                </div>
                            );
                        })}
                    </section>
                )}
            </div>
        </div>
    )
}

export default ShowProduct
