import { useState, useEffect } from "react";
import styles from './Products.module.css'

const ShowProduct = () => {
    const [items, setItems] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

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
        <div className={styles.wrapper}>
            <h1>All Products</h1>

            {items.length === 0 ? (
                <p> No products available </p>
            ) : (
                <section className={styles.cardWrapper}>
                    {items.map((item) =>
                        <div key={item.id} className={styles.card}>
                            <div className={styles.imageSection}>
                                <button className={styles.wishlist}>♡</button>
                                <img src={item.thumbnail} alt={item.title}/>
                            </div>

                            <div className={styles.content}>
                                <h2 className={styles.title} onClick={()=> setSelectedProduct(item)}>{item.title}</h2>

                                <div className={styles.tags}>
                                    <span>EU38</span>
                                    <span>BLACK/WHITE</span>
                                </div>

                                <p>{item.description}</p>

                                <div className={styles.bottom}>
                                    <div>
                                        <small>PRICE</small>
                                        <h3>${item.price}</h3>
                                    </div>

                                    <button className={styles.cartBtn}>Add to cart</button>
                                </div>
                            </div>
                        </div>
                    )}
                </section>
            )}

            {selectedProduct && (
                <div className={styles.overlay} onClick={() => setSelectedProduct(null)}>
                    <div className={styles.modal}  onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalImageSection}>
                            <img src={selectedProduct.thumbnail} alt={selectedProduct.title}/>
                        </div>

                        <div className={styles.modalContent}>

                            <h1>{selectedProduct.title}</h1>

                            <p className={styles.brand}> Brand : {selectedProduct.brand}</p>

                            <p className={styles.category}>Category : {selectedProduct.category} </p>

                            <p className={styles.description}> {selectedProduct.description} </p>

                            <div className={styles.extraDetails}>
                                <p> Rating : {selectedProduct.rating}</p>
                                <p> Stock : {selectedProduct.stock} </p>
                                <p> Warranty : {selectedProduct.warrantyInformation} </p>
                                <p> Shipping : {selectedProduct.shippingInformation} </p>
                            </div>

                            <h2>${selectedProduct.price}</h2>

                            <button className={styles.cartBtn}>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ShowProduct;