import React from 'react';
import ProductSlider from '../../components/ProductSlider';
import ProductList from '../../components/ProductList';
import { formatCash } from '../../utils';
import { productDetail, productList } from '../../data';

import {
    ProductContainer,
    InforContainer,
    Slider,
    ProductInfo,
    ProductDesc,
    ProductArea,
    Title,
    Name,
    Price,
    Info,
    ColorContainer,
    SizeContainer,
    ProductAction,
    QuantityContainer,
    Quantity,
    AddToCard,
    SubTitle,
    ColorList,
} from './Product.style';

const Product = () => {

    const handleSizeClick = (e) => {
        console.log("SIZE: ", e.value);
    }

    return (
        <ProductContainer>
            <Title>Chi tiết sản phẩm</Title>
            <InforContainer>
                <Slider>
                    <ProductSlider images={productDetail.images} />
                </Slider>
                <ProductInfo>
                    <Name>{productDetail.name + " " + productDetail.gender}</Name>
                    <Price>{formatCash("890000") + " VND"}</Price>
                    <Info>
                        {productDetail.brand + " " + productDetail.categories.map(c => (" " + c))}
                    </Info>
                    <SubTitle>Màu sắc</SubTitle>
                    <ColorContainer>

                    </ColorContainer>
                    <SubTitle>Size</SubTitle>
                    <SizeContainer>

                    </SizeContainer>
                    <SubTitle>Số lượng</SubTitle>
                    <ProductAction>
                        <QuantityContainer>
                            <Quantity>
                            </Quantity>
                        </QuantityContainer>
                        <AddToCard background={productDetail.images[0]}>THÊM VÀO GIỎ HÀNG</AddToCard>
                    </ProductAction>
                </ProductInfo>
            </InforContainer>
            <ProductDesc>

            </ProductDesc>
            <ProductArea>
                <Title>sản phẩm liên quan</Title>
                <ProductList productList={productList} />
            </ProductArea>
        </ProductContainer>
    )
}

export default Product;