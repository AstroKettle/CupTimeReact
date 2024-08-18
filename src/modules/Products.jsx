import { useEffect } from "react";

import { Product } from "./Product";
import { useProducts } from "../context/ProductContext";
import { useSearchParams } from "react-router-dom";
import { SkeletonLoader } from "./SkeletonLoader";

export const Products = () => {
    const [searchParams] = useSearchParams();
    const { products, setCategory } = useProducts();
    const category = searchParams.get("category");
    var categoryTitle;

    useEffect(() => {
        setCategory(category);
    }, [category, setCategory]);

    switch(category) {
        case "tea":
            categoryTitle = "Чай";
            break;
        case "coffee":
            categoryTitle = "Кофе";
            break;
        case "teapots":
            categoryTitle = "Чайники";
            break;
        case "cezves":
            categoryTitle = "Турки";
            break;
        case "other":
            categoryTitle = "Другое";
            break;
        default:
            return null;
    }
    return (
        <section className="products">
            <div className="container">
                <h2 className="products_title">{categoryTitle}</h2>

                <ul className="products__list">
                    { products.length ? products.map((item) => (
                        <Product key={item.id} data={item} />
                    )) : <SkeletonLoader />
                    }
                </ul>
            </div>
        </section>
    );
}