import React from "react"

const MenuMeal = (props) => {
    // console.log(props.menu[order].price)
    return (
        <>
            <ul>
                {props.menu.map((item, index) => 
            <div key={index}>
                <li>item: {item.meal} ---- price: {item.price}</li>
                <button onClick= {() => props.addItem(index)}>Add Item</button>
            </div>
    )}
            </ul>
        </>
    )
}

export default MenuMeal