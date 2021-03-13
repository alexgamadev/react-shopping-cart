import React, {useContext} from 'react'
import { BasketContext } from '../reducers/BasketStore'

export default function QuantityDisplay(props) {
    const {dispatch} = useContext(BasketContext);
    const {quantity, id} = props;

    function adjustQuantity(change) {
        dispatch({type:'adjust-quantity', payload: {change, id}});
    }

    return (
        <div>
            <button onClick={() => adjustQuantity(-1)}>-</button>
            {quantity}
            <button onClick={() => adjustQuantity(1)}>+</button>
        </div>
    )
}
