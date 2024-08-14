import { Product } from "./product";

const products = [
    {
        id: 1,
        title: "Кокосовая матча",
        image: "image/photo-2.png",
        price: 390,
    },
    {
        id: 2,
        title: "Зеленый индонезийский чай",
        image: "image/photo-1.png",
        price: 340,
    },
    {
        id: 3,
        title: "Черный чай из Эфиопии",
        image: "image/photo.png",
        price: 380,
    },
    {
        id: 4,
        title: "Черный чай из Калифорнии",
        image: "image/photo-5.png",
        price: 360,
    },
    {
        id: 5,
        title: "Органическая веганская матча",
        image: "image/photo-4.png",
        price: 400,
    },
    {
        id: 6,
        title: "Чай черный Лакандона",
        image: "image/photo-3.png",
        price: 390,
    },
]

export const Products = () => (
    <section className="products">
        <div className="container">
            <h2 className="products_title">Чай</h2>

            <ul className="products__list">
                {products.map((item) => (
                    <Product data={item} />
                ))
                }
            </ul>
        </div>
    </section>
)