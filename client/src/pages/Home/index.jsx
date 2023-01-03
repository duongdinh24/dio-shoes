import React from 'react';
import {
    HomeContainer,
    ProductArea,
    Title,
    ButtonShow,
} from './Home.style';
import SlideShow from '../../components/SlideShow';
import ProductList from '../../components/ProductList';
import { productList } from '../../data';
const Home = () => {
    return (
        <HomeContainer>
            <SlideShow />
            <ProductArea>
                <Title>Giày mới nhất</Title>
                <ProductList productList={productList} />
            </ProductArea>
            <ButtonShow>Xem tất cả</ButtonShow>
        </HomeContainer>
    )
}

export default Home;