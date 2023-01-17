import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    const [quantity, setQuantity] = useState(1);
    // eslint-disable-next-line
    const [variant, setVariant] = useState(null);
    const handelSelectColor = (e) => {
        e.preventDefault();
        setColor(e.target.value);
        setQuantity(1);
        setSize(0);
        setVariant(null);
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
        setQuantity(1);
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

    // handdle add tocard click
    const addToCard = (e) => {
        e.preventDefault();
        if (color == null) {
            toast.error('Vui lòng chọn màu sắc', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else if (size === 0) {
            toast.error('Vui lòng chọn size giày', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else {
            const cardItem = {
                product: {
                    ...productDetail,
                },
                variant,
                quantity: quantity,
            }
            console.log("ADD: ", cardItem);
            toast.success('Đã thêm vào giỏ hàng', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
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
                                    disabled={quantity === 1 ? true : false}
                                >-</button>
                            </Quantity>
                        </QuantityContainer>
                        <AddToCard
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
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            >
            </ToastContainer>
        </ProductContainer >
    )
}

export default Product;