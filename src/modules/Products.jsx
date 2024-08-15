import { products } from "../products";
import { Product } from "./product";

export const Products = () => (
    <section className="products">
        <div className="container">
            <h2 className="products_title">Чай</h2>

            <ul className="products__list">
                {products.map((item) => (
                    <Product key={item.id} data={item} />
                ))
                }
            </ul>
        </div>
    </section>
)