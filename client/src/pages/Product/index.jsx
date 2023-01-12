import React, { useState } from 'react';
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
    ColorList,
    ColorItem,
    SizeContainer,
    SizeList,
    SizeItem,
    ProductAction,
    QuantityContainer,
    Quantity,
    AddToCard,
    SubTitle,

} from './Product.style';

const Product = () => {

    const [color, setColor] = useState(null);
    const [size, setSize] = useState(0);
    // const [variantSelect, setVariantSelect] = useState(null);
    const handelSelectColor = (e) => {
        e.preventDefault();
        setColor(e.target.value);
        setSize(0);
    }

    const handleSelectSize = (e) => {
        e.preventDefault();
        setSize(parseInt(e.target.value));
    }

    return (
        <ProductContainer>
            <Title>Chi tiết sản phẩm</Title>
            <InforContainer>
                <Slider>
                    <ProductSlider images={productDetail.images} />
                </Slider>
                <ProductInfo>
                    <Name>{productDetail.name}</Name>
                    <Price>{formatCash("890000") + " VND"}</Price>
                    <Info>
                        {productDetail.brand + " " + productDetail.gender + " " + productDetail.categories.map(c => (" " + c))}
                    </Info>
                    <ColorContainer>
                        <SubTitle>Màu sắc</SubTitle>
                        <ColorList>
                            {Object.keys(productDetail.variants).map(key => (
                                <ColorItem key={key} isSelect={color === key ? true : false}>
                                    <button value={key} onClick={handelSelectColor} />
                                    <label>
                                        <img src={productDetail.variants[key][0].img} alt={key} />
                                    </label>
                                </ColorItem>
                            ))}
                        </ColorList>
                    </ColorContainer>
                    <SizeContainer>
                        <SubTitle>Size</SubTitle>
                        {(color !== null) &&
                            <SizeList >
                                {productDetail.variants[color].map(item => (
                                    <SizeItem
                                        value={item.size}
                                        key={item.sku}
                                        isSelect={size === item.size ? true : false}
                                        isDisable={item.stock ? true : false}
                                        onClick={handleSelectSize}
                                    >
                                        {item.size}
                                    </SizeItem>)
                                )}
                            </SizeList>
                        }
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
        </ProductContainer >
    )
}

export default Product;