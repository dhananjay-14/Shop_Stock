import React from 'react'

import BagSummary from '../components/BagSummary'
import BagItem from '../components/BagItem'
import { useSelector } from 'react-redux'
import Spinner from '../components/Spinner'


const Bag = () => {
    const items = useSelector((store) => store.items);
    const bag = useSelector(store => store.bag);
    console.log(bag)
    console.log(items)
    const fetchStatus = useSelector((store) => store.fetchStatus);
    return (
        <>
            <main>
                {fetchStatus.currentlyFetching && <div className='spinner'><Spinner className='spinner'></Spinner></div>}
                <div className="bag-page">
                    <div className="bag-items-container">
                        {items.map((item, index) => {
                            if (bag.includes(item.id))
                                return <BagItem key={index} item={item} />
                        })}
                    </div>
                    <BagSummary></BagSummary>
                </div>
            </main>
        </>
    )
}

export default Bag
