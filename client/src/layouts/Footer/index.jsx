import React from 'react';
import {
    FooterContainer,
    FooterMain,
    FooterLeft,
    FooterCenter,
    FooterRight,
    FooterPolicy,
    Copyright,
    FooterHead,
    FooterList,
    FooterItem,
    FooterSocial,
    SocialLink
} from './Footer.style';
import { Facebook, Instagram, YouTube, Twitter } from '@mui/icons-material';

const index = () => {
    return (
        <FooterContainer>
            <FooterMain>
                <FooterLeft>
                    <FooterHead>DỊCH VỤ</FooterHead>
                    <FooterList>
                        <FooterItem>Trạng thái đơn hàng</FooterItem>
                        <FooterItem>Vận chuyển</FooterItem>
                        <FooterItem>Trả hàng</FooterItem>
                    </FooterList>
                </FooterLeft>
                <FooterCenter>
                    <FooterHead>VỀ CHÚNG TÔI</FooterHead>
                    <FooterList>
                        <FooterItem>Giới thiệu</FooterItem>
                        <FooterItem>Chính sách mua hàng</FooterItem>
                        <FooterItem>Liên hệ</FooterItem>
                    </FooterList>
                </FooterCenter>
                <FooterRight>
                    <FooterHead>LIÊN KẾT</FooterHead>
                    <FooterSocial>
                        <SocialLink href="#"> <Facebook sx={{ fontSize: 25, color: 'white' }} /></SocialLink>
                        <SocialLink href="#"> <YouTube sx={{ fontSize: 25, color: 'white' }} /></SocialLink>
                        <SocialLink href="#"> <Instagram sx={{ fontSize: 25, color: 'white' }} /></SocialLink>
                        <SocialLink href="#"> <Twitter sx={{ fontSize: 25, color: 'white' }} /></SocialLink>
                    </FooterSocial>
                </FooterRight>
            </FooterMain>
            <FooterPolicy>
                <Copyright> Copyright © by Dio Shoes</Copyright>
                <Copyright>Powered by duongdinh24.com</Copyright>
            </FooterPolicy>
        </FooterContainer>
    )
}

export default index;