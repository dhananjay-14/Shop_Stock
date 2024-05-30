import React from 'react';
import './ProductPage.css';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { bagActions } from '../store/bagSlice';
import { items } from '../data/items';
import Img1 from '/images/1.jpg'
import Img2 from '/images/2.jpg'
import Img3 from '/images/3.jpg'
import Img4 from '/images/4.jpg'
import Img5 from '/images/5.jpg'
import Img6 from '/images/6.jpg'
import Img7 from '/images/7.jpg'
import Img8 from '/images/8.jpg'

const Product = () => {
    const { id } = useParams();
    const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8]
    const bag = useSelector(store => store.bag);
    // console.log("id ", id.id);
    const items = useSelector(store => store.items);

    console.log(items)
    console.log(items[0])
    let product = items[id - 1];
    // console.log();
    const dispatch = useDispatch();
    const handleAddToBag = () => {
        if (bag.includes(product.id)) {
            window.alert("Item already added to bag...")
        }
        else
            dispatch(bagActions.addToBag(product.id));
    }
    return (
        <main>
            <div className="product-page">
                <div className="product-image">
                    <img src={images[id - 1]} alt={product.item_name} />
                </div>
                <div className="product-details">
                    <h2 className="product-title">{product.item_name}</h2>
                    <p className="product-company">by {product.company}</p>
                    <div className="product-pricing">
                        <span className="current-price">${product.current_price}</span>
                        <span className="original-price">${product.original_price}</span>
                        <span className="discount">{product.discount_percentage}% off</span>
                    </div>
                    <div className="product-rating">
                        <span className="stars">⭐ {product.rating.stars}</span>
                        <span className="rating-count">({product.rating.count} reviews)</span>
                    </div>
                    <div className="product-return">
                        <p>Return period: {product.return_period} days</p>
                    </div>
                    <div className="product-delivery">
                        <p>Delivery by: {product.delivery_date}</p>
                    </div>
                    <button onClick={handleAddToBag} className="add-to-cart">Add to Cart</button>
                </div>
            </div>
        </main>
    );
};

export default Product;
