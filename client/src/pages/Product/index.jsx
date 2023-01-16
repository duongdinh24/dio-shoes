import React, { useState } from 'react';
import ProductSlider from '../../components/ProductSlider';
import ProductList from '../../components/ProductList';
import { formatToVND } from '../../utils';
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
    CurentPrice,
    OldPrice,
    Sale,
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
    const [quantity, setQuantity] = useState(0);
    // eslint-disable-next-line
    const [variant, setVariant] = useState({});
    const handelSelectColor = (e) => {
        e.preventDefault();
        setColor(e.target.value);
        setQuantity(0);
        setSize(0);
    }

    const handleSelectSize = (e) => {
        e.preventDefault();
        setSize(parseInt(e.target.value));
        let detail;
        productDetail.variants[color].forEach(v => {
            if (v.size === parseInt(e.target.value)) {
                detail = v;
            }
        })
        setVariant(detail);
        setQuantity(0);
    }

    const handleQuantity = (e) => {
        e.preventDefault();
        if (e.target.value === 'increase') {
            setQuantity(quantity + 1);
        }
        else {
            setQuantity(quantity - 1);
        }
    }

    const addToCard = (e) => {
        e.preventDefault();
        const cardItem = {
            product: {
                ...productDetail,
            },
            itemSelected: {
                ...variant,
            },
            quantity: quantity,
        }
        console.log("ADD: ", cardItem);
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
                    <Price>
                        {size > 0 ? ( // if no variant is selected, display min price
                            <>
                                <CurentPrice sale={variant.sale}>{formatToVND(variant.price - variant.price * variant.sale / 100)}</CurentPrice>
                                {variant.sale > 0 ? (
                                    <>
                                        <OldPrice>{formatToVND(variant.price)}</OldPrice>
                                        <Sale>{variant.sale + "% Off"}</Sale>
                                    </>

                                ) : ""}
                            </>
                        ) : (
                            <CurentPrice>{formatToVND(productDetail.minPrice)}</CurentPrice>
                        )

                        }

                    </Price>
                    <Info>
                        {productDetail.brand + " " + productDetail.gender + " " + productDetail.categories.map(c => (" " + c))}
                    </Info>
                    <ColorContainer>
                        <SubTitle>Màu sắc</SubTitle>
                        <ColorList>
                            {Object.keys(productDetail.variants).map(v => (
                                <ColorItem key={v} isSelect={color === v ? true : false}>
                                    <button value={v} onClick={handelSelectColor} />
                                    <label>
                                        <img src={productDetail.variants[v][0].img} alt={v} />
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
                                        disabled={item.stock ? false : true}
                                        onClick={handleSelectSize}
                                    >
                                        {item.size}
                                    </SizeItem>)
                                )}
                            </SizeList>
                        }
                    </SizeContainer>
                    <ProductAction>
                        <QuantityContainer>
                            <SubTitle>Số lượng</SubTitle>
                            <Quantity>
                                <button
                                    value={'increase'}
                                    onClick={handleQuantity}
                                    disabled={(size === 0 || quantity === variant.stock || quantity === 5) ? true : false}
                                >+</button>
                                <span>{quantity}</span>
                                <button
                                    value={'decrease'}
                                    onClick={handleQuantity}
                                    disabled={quantity === 0 ? true : false}
                                >-</button>
                            </Quantity>
                        </QuantityContainer>
                        <AddToCard
                            disabled={quantity === 0 ? true : false}
                            onClick={addToCard}
                        >
                            THÊM VÀO GIỎ HÀNG
                        </AddToCard>
                    </ProductAction>
                </ProductInfo>
            </InforContainer>
            <ProductDesc>
                <Title>Giới thiệu</Title>
                <p>{productDetail.description}</p>
            </ProductDesc>
            <ProductArea>
                <Title>sản phẩm liên quan</Title>
                <ProductList productList={productList} />
            </ProductArea>
        </ProductContainer >
    )
}

export default Product;