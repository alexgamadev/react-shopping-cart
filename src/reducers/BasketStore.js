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

    //If item doesn't exist, return
    if(itemIndex <= -1) return basket;

    //Increase quantity of item
    return basket.reduce((newBasket, item) => {
        if(item.id !== id) {
            newBasket.push(item);
        } else {
            const newQuantity = item.quantity + change;

            if(newQuantity > 0) {
                newBasket.push({
                    ...item,
                    quantity: newQuantity,
                });
            }
        }

        return newBasket;
    }, []);
}

function addToBasket(basket, newItem) {
    const itemIndex = basket.findIndex(item => item.id === newItem.id);

    if(itemIndex > -1) changeQuantity(basket, {change: 1, id:itemIndex})

    newItem.quantity = 1;
    return [...basket, newItem]; 
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
