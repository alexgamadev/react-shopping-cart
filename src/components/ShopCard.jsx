import React from 'react';
import Card, {CardDetails, CardImage, CardMedia, CardTitle} from '../components/Card';

export default function ShopCard(props) {
    const { data } = props;
    console.log(data);

    return (
        <Card>
            <CardMedia>
                <CardImage imageSrc={data.image}/>
            </CardMedia>
            <CardDetails>
                <CardTitle text={data.title} maxLines={2} />
            </CardDetails> 
        </Card>
    )
}
