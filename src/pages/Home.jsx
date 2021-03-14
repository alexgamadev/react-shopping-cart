import React from 'react';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import {Card, CardMedia, CardImage, MediaOverlay} from '../components/Card';
import ResponsiveGrid from '../components/ResponsiveGrid';
import useFetchAPI from '../hooks/useFetchAPI';
import {Link} from 'react-router-dom';

const categoryImages = [
    {
        category: 'electronics',
        src: 'https://images.unsplash.com/photo-1572114718898-c32270a1b989?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    },
    {
        category: 'women clothing',
        src: 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    },
    {
        category: 'jewelery',
        src: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    },
    {
        category: 'men clothing',
        src: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    },

]

export default function Home() {
    const [data] = useFetchAPI('https://fakestoreapi.com/products/categories');
    
    return (
        <>
            <Navbar pageTitle={"Home"}/>
            <StyledSection>
                <h1>Categories</h1>
                <ResponsiveGrid>
                    {data && (<>
                        {data.map((category, index) => {
                            const categoryData = categoryImages.find((obj) => obj.category === category);
                            return (
                                <Link to={`/shop?category=${category}`} key={index}>
                                    <StyledCard>
                                        <CardMedia width={'100%'}>
                                            <ImageDimmer />
                                            <CardImage imageSrc={categoryData.src}/>
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
    max-height: 600px;
`;
