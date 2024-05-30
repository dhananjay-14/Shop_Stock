import React from 'react';
import './ProductPage.css';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { bagActions } from '../store/bagSlice';
import { items } from '../data/items';

const Product = () => {
    const { id } = useParams();
    const bag = useSelector(store => store.bag);
    // console.log("id ", id.id);
    const items = useSelector(store => store.items);
    console.log(items)
    console.log(items[0])
    let product = items[id - 1];
    console.log(product.image);
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
                    <img src={items[0]} alt={product.item_name} />
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
