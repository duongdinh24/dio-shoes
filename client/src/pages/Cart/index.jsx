import React, { useState, useEffect } from 'react';
import CartItem from '../../components/CartItem';
import { Close } from '@mui/icons-material';
import EmptyIcon from '../../assets/images/empty-cart.png';
import {
    CartContainer,
    EmptyCart,
    CartContent,
    Summary,
    Title,
    Anouncement,
    WrappItem,
    SummaryContainer,
    SummaryInfo,
    BtnCheckout,
} from './Cart.style';
import { cartItems } from '../../data';
import { formatToVND } from '../../utils';

const Cart = () => {
    const [showAnouncement, setShowAnouncement] = useState(true);
    const closeAnouncement = () => {
        setShowAnouncement(false);
    }
    const [subtotal, setSubtotal] = useState(0);
    const [total, setTotal] = useState(0);

    // delelte item
    const handleDelete = (sku) => {
        console.log("DELETE: ", sku);
    }

    // change size item
    const handleChangeQuantity = (sku, value) => {
        console.log("SKU: ", sku);
        console.log("QUANTITY: ", value);
    }

    useEffect(() => {
        //  total price with discount
        let totalPrice;
        totalPrice = cartItems.reduce((totalPrice, item) => {
            return totalPrice + (item.quantity * (item.variant.price - item.variant.price * item.variant.sale / 100))
        }, 0);
        setSubtotal(totalPrice);
        // if totalPrice >= 1000.000 free ship
        totalPrice >= 1000000 ? setTotal(totalPrice) : setTotal(totalPrice + 35000);
    }, []);  // depend on cartItems

    return (
        <CartContainer>
            {cartItems.length <= 0 ? (
                <EmptyCart>
                    <span>Giỏ hàng trống!</span>
                    <img src={EmptyIcon} alt="Empty cart" />
                    <a href='/products'>Tiếp tục mua sắm</a>
                </EmptyCart>
            ) : (
                <>
                    <CartContent>
                        <Title>Giỏ hàng</Title>
                        {showAnouncement &&
                            <Anouncement>
                                <div className="warpper">
                                    <h4>Thông báo</h4>
                                    <p>Miễn phí vận chuyển cho đơn hàng từ 1.000.000 VNĐ</p>
                                    <p>Mỗi đôi giày có thể order tối đa 5 đôi, nếu vượt quá số lượng trên
                                        liên hệ admin: 033 393 393
                                    </p>
                                </div>
                                <div className="btn-close" onClick={closeAnouncement}>
                                    <Close fontSize='large' />
                                </div>
                            </Anouncement>
                        }
                        <WrappItem>
                            {cartItems.map(item => (
                                <CartItem
                                    item={item}
                                    key={item.variant.sku}
                                    handleChangeQuantity={handleChangeQuantity}
                                    handleDelete={handleDelete}
                                />
                            ))}
                        </WrappItem>
                    </CartContent>
                    <Summary>
                        <Title>TỔNG</Title>
                        <SummaryContainer>
                            <SummaryInfo>
                                <span>Giá tiền:</span>
                                <span>{formatToVND(subtotal)}</span>
                            </SummaryInfo>
                            <SummaryInfo borderBottom={true}>
                                <span>Phí ship:</span>
                                <span>{subtotal >= 1000000 ? "Free" : formatToVND(35000)}</span>
                            </SummaryInfo>
                            <SummaryInfo borderBottom={true}>
                                <span>Tổng:</span>
                                <span>{formatToVND(total)}</span>
                            </SummaryInfo>
                        </SummaryContainer>
                        <BtnCheckout> Thanh toán</BtnCheckout>
                    </Summary>
                </>
            )
            }
        </CartContainer>
    )
}

export default Cart;