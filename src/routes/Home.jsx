import React from 'react'
// import { items } from '../data/items'
import HomeItem from '../components/HomeItem'
import { useSelector } from "react-redux"
import { TailSpin } from 'react-loader-spinner'
import Spinner from '../components/Spinner'
import Slider from '../components/Slider'

const Home = () => {
    const items = useSelector((store) => store.items);
    const fetchStatus = useSelector((store) => store.fetchStatus);
    const searchq = useSelector((store) => store.search);

    return (
        <main>
            {!searchq && <Slider></Slider>}
            {fetchStatus.currentlyFetching && <div className='spinner'><Spinner className='spinner'></Spinner></div>}
            <div className="items-container">
                {items.map((item, index) => {
                    if (item.company.toLowerCase().includes(searchq.toLowerCase()))
                        return <HomeItem key={index} item={item}></HomeItem>
                })}
            </div>
        </main>
    )
}

export default Home
