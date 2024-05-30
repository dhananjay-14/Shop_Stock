import React, { useEffect, useRef } from 'react'
import { bagActions } from '../store/bagSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// import ItemImage from "../images/1.jpg"
const HomeItem = ({ item }) => {
    const btn = useRef();
    const bag = useSelector(store => store.bag);
    let btntxt = bag.includes(item.id) ? `Added` : `Add to Bag`;
    useEffect(() => {
        if (btn.current) {
            if (btntxt === 'Added') {
                btn.current.style.backgroundColor = 'green';
            } else {
                btn.current.style.backgroundColor = 'rgb(223, 126, 41)';
            }
        }
    }, [btntxt]);
    const dispatch = useDispatch();
    const handleAddToBag = () => {
        if (bag.includes(item.id)) {
            window.alert("Item already added to bag...")
        }
        else
            dispatch(bagActions.addToBag(item.id));
    }
    let itemUrl = `/product/${item.id}`
    let url = itemUrl.toString();
    return (
        <>
            <div className="item-container">
                <Link to={url}> <div className="mycontainer">
                    <img className="item-image" src={item.image} alt="item image" />
                    <div className="rating">
                        {item.rating.stars} ⭐ | {item.rating.count}
                    </div>
                </div></Link>

                <div className="company-name">{item.company}</div>
                <div className="item-name">{item.item_name}</div>
                <div className="price">
                    <span className="current-price">Rs {item.current_price}</span>
                    <span className="original-price">Rs {item.original_price}</span>
                    <span className="discount">({item.discount_percentage}% OFF)</span>
                </div>
                <button ref={btn} className="btn-add-bag" onClick={handleAddToBag}>{btntxt}</button>
            </div>
        </>
    )
}

export default HomeItem
