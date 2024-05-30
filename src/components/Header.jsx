import React, { useEffect, useRef } from 'react'
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { BsHandbag } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Home from '../routes/Home';
import Bag from '../routes/Bag';
import { useDispatch, useSelector } from 'react-redux';
import { searchActions } from '../store/searchSlice';

const Header = () => {
    const bag = useSelector(store => store.bag);
    const dispatch = useDispatch();
    const searchText = useRef();
    const search = () => {
        dispatch(searchActions.search(searchText.current.value));
    }
    const clearSrch = () => {
        dispatch(searchActions.clrSearch());
    }

    return (
        <>
            <header className='header'>
                <div onClick={clearSrch} className="logo_container">
                    <Link to='/'><img className="home_logo" src="images/logo.png" alt="Home" /></Link>
                </div>
                <nav className="nav_bar">
                    <a href="#">Men</a>
                    <a href="#">Women</a>
                    <a href="#">Kids</a>
                    <a href="#">Home & Living</a>
                    <a href="#">Beauty</a>
                    <a href="#">Studio <sup>New</sup></a>
                </nav>
                <div className="search_bar">
                    <span onClick={search} className="material-symbols-outlined search_icon"><CiSearch></CiSearch></span>
                    <input ref={searchText} onChange={search} className="search_input" placeholder="Search for products, brands and more" />
                </div>
                <div className="action_bar">
                    <div className="action_container">
                        <FaRegUser></FaRegUser>
                        {/* <span className="material-symbols-outlined action_icon">person</span> */}
                        <span className="action_name">Profile</span>
                    </div>

                    <div className="action_container">
                        {/* <span className="material-symbols-outlined action_icon">favorite</span> */}
                        <MdFavoriteBorder></MdFavoriteBorder>
                        <span className="action_name">Wishlist</span>
                    </div>

                    <Link className="action_container" to='/bag'>
                        {/* <span className="material-symbols-outlined action_icon">shopping_bag</span> */}
                        <BsHandbag></BsHandbag>
                        <span className="action_name">Bag</span>
                        <span className="bag-item-count">{bag.length}</span>
                    </Link>
                </div>
            </header>
        </>
    )
}

export default Header

