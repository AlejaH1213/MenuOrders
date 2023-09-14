import React from 'react'

const Order = (props) => {

    return (
        <>
        <div className='order-box'>
            <ul>
                <li>{props.orders}</li>
            </ul>
        </div>
        </>
    )
}

export default Order