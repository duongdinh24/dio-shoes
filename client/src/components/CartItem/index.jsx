import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
    Wrapper,
    ImageContainer,
    InfoContainer,
    Image,
    LeftInfo,
    Name,
    Info,
    Variant,
    Size,
    Quantity,
    RightInfo,
    Price,
    OldPrice,
    CurentPrice,
    Sale,
    BtnDelete,
} from './CartItem.style';
import { Delete } from '@mui/icons-material';
import { formatToVND } from '../../utils';

const CartItem = ({ item, handleChangeQuantity, handleDelete }) => {
    const [quantity, setQuantity] = useState();

    useEffect(() => {
        setQuantity(item.quantity);
    }, [item.quantity]);

    const changeQuantity = (sku, value) => {
        handleChangeQuantity(sku, value);
        setQuantity(value);
    }

    return (
        <Wrapper>
            <ImageContainer>
                <a href={`/product/${item.product.slug}`}>
                    <Image src={item.variant.img} />
                </a>
            </ImageContainer>
            <InfoContainer>
                <LeftInfo>
                    <Name>{item.product.name + " - " + item.variant.color}</Name>
                    <Info>{item.product.brand}</Info>
                    <Info>{item.product.gender + " " + item.product.categories.map(c => (c + " "))}</Info>
                    <Variant>
                        <Size>Size: <span>{item.variant.size}</span></Size>
                        <Quantity> <span>Số lượng: </span>
                            <select name="quantity"
                                onChange={e => changeQuantity(item.variant.sku, e.target.value)}
                                // value={item.quantity}
                                value={quantity}
                            >
                                <option value={1} hidden={item.variant.stock < 1}>1</option>
                                <option value={2} hidden={item.variant.stock < 2}>2</option>
                                <option value={3} hidden={item.variant.stock < 3}>3</option>
                                <option value={4} hidden={item.variant.stock < 4}>4</option>
                                <option value={5} hidden={item.variant.stock < 5}>5</option>
                            </select>
                        </Quantity>
                    </Variant>
                </LeftInfo>
                <RightInfo>
                    <Price>
                        <CurentPrice sale={item.variant.sale}>{formatToVND(item.variant.price - item.variant.price * item.variant.sale / 100)}</CurentPrice>
                        {item.variant.sale > 0 ? (
                            <>
                                <OldPrice>{formatToVND(item.variant.price)}</OldPrice>
                                <Sale>{`${item.variant.sale} % off`}</Sale>
                            </>
                        ) : ""}
                    </Price>
                    <BtnDelete onClick={e => handleDelete(item.variant.sku)}>
                        <Delete fontSize="large" />
                    </BtnDelete>
                </RightInfo>
            </InfoContainer>
        </Wrapper>
    )
}

CartItem.propTypes = {
    item: PropTypes.exact({
        product: PropTypes.exact({
            _id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            slug: PropTypes.string.isRequired,
            brand: PropTypes.string.isRequired,
            categories: PropTypes.arrayOf(PropTypes.string.isRequired),
            gender: PropTypes.string.isRequired,
        }),
        variant: PropTypes.exact({
            sku: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired,
            size: PropTypes.number.isRequired,
            stock: PropTypes.number.isRequired,
            price: PropTypes.number.isRequired,
            sale: PropTypes.number.isRequired,
            img: PropTypes.string.isRequired,
        }),
        quantity: PropTypes.number.isRequired,
    }),
    // handleChangeQuantity: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
}
export default CartItem;