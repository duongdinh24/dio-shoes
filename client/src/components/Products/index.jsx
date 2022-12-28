import React from 'react';
import ProductCard from '../ProductCard';
import { Container } from './Products.style';
const Products = ({ productList }) => {
    return (
        <Container>
            {
                productList.map(product => (<ProductCard product={product} />))
            }
        </Container>
    )
}

export default Products;