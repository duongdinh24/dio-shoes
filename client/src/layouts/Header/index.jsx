import React, { useState, useRef } from 'react';
import {
    HeaderContainer,
    TopHeader,
    TopNav,
    TopMenu,
    TopItem,
    MainHeader,
    MainNavBar,
    Logo,
    LogoSm,
    MainMenu,
    MenuItem,
    MenuAction,
    SearchBox,
    Account,
    Cart,
    SearchInput,
    SearchClear,
    SearchBtn,
    MenuIcon,
} from './Header.style';
import logoLage from './../../assets/images/logo-lg.png';
import logoSmall from './../../assets/images/logo-sm.png';
import { Search, ShoppingBagOutlined, AccountCircleOutlined, Clear, Menu } from '@mui/icons-material';
import { Badge } from '@mui/material';
const Header = () => {
    const [searchValue, setSearchValue] = useState("");
    const searchRef = useRef();
    return (
        <HeaderContainer>
            <TopHeader>
                <TopNav>
                    <LogoSm src={logoSmall} alt="logo small" />
                    <TopMenu>
                        <TopItem seperate="true">Help</TopItem>
                        <TopItem seperate="reu">Đăng nhập</TopItem>
                        <TopItem >Đăng ký</TopItem>
                    </TopMenu>
                </TopNav>
            </TopHeader>
            <MainHeader>
                <MainNavBar>
                    <Logo src={logoLage} alt="logo" />
                    <MainMenu>
                        <MenuItem>Nam</MenuItem>
                        <MenuItem>Nữ</MenuItem>
                        <MenuItem>Adidas</MenuItem>
                        <MenuItem>Nike</MenuItem>
                    </MainMenu>
                    <MenuAction>
                        <SearchBox>
                            <SearchInput type="text" placeholder="Search..." ref={searchRef} value={searchValue} onChange={e => setSearchValue(e.target.value)} />
                            {searchValue &&
                                <SearchClear onClick={(e) => setSearchValue("")} >
                                    <Clear sx={{ fontSize: 15 }} />
                                </SearchClear>
                            }
                            <SearchBtn>
                                <Search sx={{ fontSize: 25 }} />
                            </SearchBtn>
                        </SearchBox>
                        <Account>
                            <AccountCircleOutlined sx={{ fontSize: 25 }} />
                        </Account>
                        <Cart>
                            <Badge color="error" badgeContent={1} max={9}>
                                <ShoppingBagOutlined sx={{ fontSize: 25 }} />
                            </Badge>
                        </Cart>
                        <MenuIcon>
                            <Menu sx={{ fontSize: 25 }} />
                        </MenuIcon>
                    </MenuAction>
                </MainNavBar>
            </MainHeader>
        </HeaderContainer>
    )
}

export default Header;
