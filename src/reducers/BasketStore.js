import React, { useReducer } from "react"

function basketReducer(basket, action) {
    const {payload} = action;
    switch(action.type) {
        case 'add-to-basket':
            return addToBasket(basket, payload.item);
        case 'adjust-quantity':
            return changeQuantity(basket, payload);
        case 'clear-basket':
            window.localStorage.clear();
            return [];
        case 'fetch-basket-storage':
            return getBasket();
        default: return basket;
    }
}

function changeQuantity(basket, payload) {
    console.log(payload)
    const {change, id} = payload;
    const itemIndex = basket?.findIndex(item => item.id === id);

    //If item doesn't exist, return
    if(itemIndex <= -1) return basket;

    //Increase quantity of item
    const newBasket = basket.reduce((newBasket, item) => {
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

    saveBasket(newBasket);
    return newBasket;
}

function addToBasket(basket, newItem) {
    const itemIndex = basket?.findIndex(item => item.id === newItem.id);

    if(itemIndex > -1) return changeQuantity(basket, {change: 1, id:itemIndex})

    newItem.quantity = 1;
    const newBasket = [...basket, newItem];
    saveBasket(newBasket);
    return newBasket; 
}

function saveBasket(basket) {
    window.localStorage.setItem('basket', JSON.stringify(basket));
}

function getBasket() {
    const basket = JSON.parse(window.localStorage.getItem('basket'));
    if(!basket) return [];

    if(Array.isArray(basket)) {
        return basket;
    } else {
        return [basket];
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
