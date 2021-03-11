import React, { useReducer } from "react"

function basketReducer(basket, action) {
    switch(action.type) {
        case 'addToBasket':
            const {item} = action.payload;
            if(basket.title === item.title) {
                basket.quantity += 1;
                return { ...basket};
            } else {
                return { ...item};
            }
            
        default: return basket;
    }
}

export default function BasketStore({children}) {
    const [basket, dispatch] = useReducer(basketReducer, {});

    return (
        <BasketContext.Provider value={[basket, dispatch]}>
            {children}
        </BasketContext.Provider>
    );
}

export const BasketContext = React.createContext({});
