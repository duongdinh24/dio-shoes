import React from 'react';
import PropTypes from 'prop-types';
import { formatToVND } from '../../utils';
import {
    Container,
    Card,
    ImageContainer,
    Image,
    ProductInfo,
    Name,
    Categories,
    Colors,
    Sale,
    Price,
    CurentPrice,
    OldPrice
} from './ProductCard.style';

const ProductCard = ({ product }) => {
    return (
        <Container>
            <Card>
                <ImageContainer>
                    <Image src={product.thumbnail} />
                </ImageContainer>
                <ProductInfo>
                    <Name>{product.name}</Name>
                    <Categories>
                        {product.categories.map(c => (c + " "))}
                    </Categories>
                    <Colors>{product.colors > 1 ? `${product.colors} colours` : `${product.colors} colour`}</Colors>
                    <Price>
                        <CurentPrice sale={product.sale}>{formatToVND(product.price - product.price * product.sale / 100)}</CurentPrice>
                        {product.sale > 0 ? (<OldPrice>{formatToVND(product.price)}</OldPrice>) : ""}
                    </Price>
                    {product.sale > 0 ? (<Sale>{`${product.sale} % off`}</Sale>) : ""}
                </ProductInfo>
            </Card>
        </Container>
    )
};

ProductCard.propTypes = {
    product: PropTypes.exact({
        id: PropTypes.string,
        name: PropTypes.string,
        slug: PropTypes.string,
        brand: PropTypes.string,
        categories: PropTypes.arrayOf(PropTypes.string),
        colors: PropTypes.number,
        thumbnail: PropTypes.string,
        price: PropTypes.number,
        sale: PropTypes.number,
    })
}
export default ProductCard;

