import React, { useReducer } from "react"

function basketReducer(basket, action) {
    const {payload} = action;
    switch(action.type) {
        case 'add-to-basket':
            return addToBasket(basket, payload.item);
        case 'adjust-quantity':
            return changeQuantity(basket, payload);
        default: return basket;
    }
}

function changeQuantity(basket, payload) {
    console.log(payload)
    const {change, id} = payload;
    const itemIndex = basket.findIndex(item => item.id === id);
    if(itemIndex <= -1) {
        return basket;
    } else {
        return basket.map(item => {
            if(item.id === id) {
                return {
                    ...item,
                    quantity: item.quantity + change
                };
            } else {
                return item;
            }
        });
    }
}

function addToBasket(basket, newItem) {
    const itemIndex = basket.findIndex(item => item.id === newItem.id);
    if(itemIndex > -1) {
        changeQuantity(basket, {change: 1, id:itemIndex})
    } else {
        newItem.quantity = 1;
        return [...basket, newItem]; 
    }
}

export const BasketContext = React.createContext();

export default function BasketStore({children}) {
    const [basket, dispatch] = useReducer(basketReducer, []);

    return (
        <BasketContext.Provider value={{basket, dispatch}}>
            {children}
        </BasketContext.Provider>
    );
}
