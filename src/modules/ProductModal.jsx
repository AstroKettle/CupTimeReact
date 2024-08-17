import Modal from "react-modal";
import { API_URL } from "../const";
import { useState } from "react";
import { useCart } from "../context/CartContext";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

Modal.setAppElement("#root");

export const ProductModal = ({ isOpen, onRequestClose, data }) => {
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();


    if (!data) {
        return null;
    }

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };
    const handleAddToCart = () => {
        addToCart(data, quantity);
        onRequestClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="modal__container"
            contentLabel="ProductModal">
            <img className="modal__image" src={`${API_URL}${data.img}`} alt={data.title} />
            <div className="modal__content">

                <div className="modal__title-price">
                    <h2 className="modal__title">{data.title}</h2>
                    <p className="modal__price">{data.price}</p>
                </div>
                <div className="modal__info">
                    <ul>
                        {Object.entries(data.additional).map(([key, value]) => (
                            <li key={key}>
                                <strong>{key}:</strong><p>{value}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="modal__order">
                    <div className="modal__quantity">
                        <button onClick={handleDecrease}>-</button>
                        <input type="number" value={quantity} readOnly />
                        <button onClick={handleIncrease}>+</button>
                    </div>

                    <button className="modal__button modal__button-inner" onClick={handleAddToCart}>Добавить</button>
                </div>

                <button className="modal__button-close" onClick={onRequestClose}>х</button>
            </div>
        </Modal>
    )
};