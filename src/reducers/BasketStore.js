import React, { useReducer } from "react"

function basketReducer(basket, action) {
    const {payload} = action;
    switch(action.type) {
        case 'addToBasket':
            return addToBasket(basket, payload.item);
            
        default: return basket;
    }
}

function addToBasket(basket, newItem) {
    const itemIndex = basket.findIndex(item => item.id === newItem.id);
    console.log(itemIndex);
    if(itemIndex > -1) {
        basket[itemIndex].quantity++;
        return basket;
    } else {
        newItem.quantity = 1;
        return [...basket, newItem]; 
    }
}

export default function BasketStore({children}) {
    const [basket, dispatch] = useReducer(basketReducer, []);

    return (
        <BasketContext.Provider value={[basket, dispatch]}>
            {children}
        </BasketContext.Provider>
    );
}

export const BasketContext = React.createContext([]);
