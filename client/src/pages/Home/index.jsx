import React from 'react';
import { HomeContainer, NewProduct } from './Home.style';
import SlideShow from '../../components/SlideShow';
import Products from '../../components/Products';
import { productList } from '../../data';
const Home = () => {
    return (
        <HomeContainer>
            <SlideShow />
            <NewProduct>
                <Products productList={productList} />
            </NewProduct>
        </HomeContainer>
    )
}

export default Home;

