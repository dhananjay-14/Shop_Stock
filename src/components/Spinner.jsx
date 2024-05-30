import React from 'react'
import { TailSpin } from 'react-loader-spinner'
const Spinner = () => {
    return (
        <div>
            <TailSpin   // Type of spinner
                height="80"
                width="80"
                color="#d253aa"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    )
}

export default Spinner
