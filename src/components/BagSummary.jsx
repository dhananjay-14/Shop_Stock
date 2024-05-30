import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import { bagActions } from '../store/bagSlice';

const BagSummary = () => {
    const [order, setOrder] = useState(false)
    const bag = useSelector(store => store.bag);
    const items = useSelector(store => store.items);
    const dispatch = useDispatch();
    let totalMRP = 0, totalDiscount = 0;
    const ConvFee = 99;
    items.forEach(element => {
        if (bag.includes(element.id)) {
            console.log("elemnt :", element)
            totalMRP += element.original_price;
            totalDiscount += (element.original_price - element.current_price);
        }
    });
    const bagSummary = {
        totalItem: bag.length,
        totalMRP: totalMRP,
        totalDiscount: totalDiscount,
        finalPayment: totalMRP - totalDiscount + ConvFee
    }
    const handlePlaceOrder = () => {
        dispatch(bagActions.clearBag());
        setOrder(true);
    }
    return (
        <div className="bag-summary">

            <div className="bag-details-container">
                <div className="price-header">PRICE DETAILS ({bagSummary.totalItem} Items) </div>
                <div className="price-item">
                    <span className="price-item-tag">Total MRP</span>
                    <span className="price-item-value">₹{bagSummary.totalMRP}</span>
                </div>
                <div className="price-item">
                    <span className="price-item-tag">Discount on MRP</span>
                    <span className="price-item-value priceDetail-base-discount">-₹{bagSummary.totalDiscount}</span>
                </div>
                <div className="price-item">
                    <span className="price-item-tag">Convenience Fee</span>
                    <span className="price-item-value">₹{ConvFee}</span>
                </div>
                <hr />
                <div className="price-footer">
                    <span className="price-item-tag">Total Amount</span>
                    <span className="price-item-value">₹{bagSummary.finalPayment}</span>
                </div>
            </div>
            <button onClick={handlePlaceOrder} className="btn-place-order">
                <div className="css-xjhrni">PLACE ORDER</div>
            </button>
            {order && <Alert key='success' variant='success'>
                Ordered Placed Succesfully!
            </Alert>}
        </div>
    )
}

export default BagSummary
