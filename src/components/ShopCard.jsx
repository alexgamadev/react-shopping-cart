import React from 'react';
import Card, {CardDetails, CardImage} from '../components/Card';

export default function ShopCard(props) {
    const { data } = props;
    console.log(data);

    return (
        <Card>
            <CardImage/>
            <CardDetails>
                {data.title}
            </CardDetails> 
        </Card>
    )
}
