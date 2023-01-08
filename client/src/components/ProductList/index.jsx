import React from 'react';
import ProductCard from '../ProductCard';
import { Container } from './ProductList.style';
const ProductList = ({ productList }) => {
    return (
        <Container>
            {
                productList.map((product) => (<ProductCard product={product} key={product._id} />))
            }
        </Container>
    )
}

export default ProductList;