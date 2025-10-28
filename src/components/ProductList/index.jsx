import React, { useEffect, useState } from "react";
import styles from "./ProductList.module.scss";

const ProductList = ({ isLoading }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data.products))
            .catch((error) => console.error("Lỗi khi gọi API:", error));
    }, []);

    return (
        <>
            {isLoading ? (
                <div className={styles.spinner}></div>
            ) : (
                <div className={styles["product-grid"]}>
                    {products.map((product) => (
                        <div
                            className={styles["product-card"]}
                            key={product.id}
                        >
                            <img src={product.thumbnail} alt={product.title} />
                            <h3>{product.title}</h3>
                            <p>${product.price}</p>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default ProductList;
