import React, { useReducer } from "react"

function basketReducer(basket, action) {
    switch(action.type) {
        case 'addToBasket':
            return { ...action.payload.item};
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
