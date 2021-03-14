import React from 'react';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import {Card, CardMedia, CardImage, MediaOverlay} from '../components/Card';
import ResponsiveGrid from '../components/ResponsiveGrid';
import useFetchAPI from '../hooks/useFetchAPI';
import {Link} from 'react-router-dom';

export default function Home() {
    const [data] = useFetchAPI('https://fakestoreapi.com/products/categories');
    console.log(data);
    
    return (
        <>
            <Navbar pageTitle={"Home"}/>
            <StyledSection>
                <h1>Item categories</h1>
                <ResponsiveGrid>
                    {data && (<>
                        {data.map(category => {
                            return (
                                <Link to={`/shop?search=${category}`}>
                                    <StyledCard>
                                        <CardMedia width={'100%'}>
                                            <ImageDimmer />
                                            <CardImage imageSrc='https://www.rd.com/wp-content/uploads/2020/04/GettyImages-694542042-e1586274805503.jpg'/>
                                            <CategoryTitle>{category}</CategoryTitle>
                                        </CardMedia>
                                    </StyledCard>
                                </Link>
                            )
                        })}
                    </>)}    
                </ResponsiveGrid>
            </StyledSection>
        </>
    )
}

const CategoryTitle = styled(MediaOverlay)`
    color: white;
    bottom: 20px;
    font-weight: 600;
    font-size: 30px;
    text-transform: capitalize;
`;

const ImageDimmer = styled(MediaOverlay)`
    top: 0px;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, #00000088 30%, #ffffff44 100%);
`;

const StyledSection = styled.section`
    margin: 20px;
`;

const StyledCard = styled(Card)`
    max-width: 600px;
    min-width: 200px;
    min-height: 300px;
    max-height: 600px;
`;

function categoryCard() {

}
