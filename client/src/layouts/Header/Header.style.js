import styled from 'styled-components';
import { InputText } from '../../assets/styles/global.style';
import { devices, colors } from '../../assets/styles/variables';
export const HeaderContainer = styled.div`
    width: 100vw;
    height: 104px;
    background-color: #fff;
    box-shadow: 0 4px 4px 0 rgb(0 0 0 / 10%);
    margin-bottom: 20px;
`;
export const TopHeader = styled.div`
    height: 36px;
    width: 100%;
    background-color: #F5F5F5;
`;

export const TopNav = styled.div`
    margin: auto;
    width: 100%;
    max-width: 1200px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

`;

export const LogoSm = styled.img`
    width: 100px;
    height: 34px;
    object-fit: contain;
`

export const TopMenu = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center
`;

export const TopItem = styled.div`
    padding: 0 10px 0 10px;
    border-right: ${props => props.seperate ? "1px solid" : ""};
    cursor: pointer;
`;

export const MainHeader = styled.div`
    width: 100%;
    height: 64px;
`;

export const MainNavBar = styled.div`
    width: 100%;
    max-width: 1200px;
    height: 100%;
    margin: auto;
    /* display: flex;
    align-items: center; */
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    overflow: hidden;
    @media ${devices.mobileM} {
        grid-template-columns: 100px 1fr;
    }
`

export const Logo = styled.img`
    width: 100px;
    height: 64px;
    object-fit: contain;
    justify-self: flex-start;
`;



export const MainMenu = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 40px;
    height: 64px;
    @media ${devices.mobileM} {
        display: none;
    }
`;

export const MenuItem = styled.li` 
    font-size: 1.6rem;
    margin: 0 5px 0 5px;
    cursor: pointer;
    display: block;
    min-width: 30px;
    padding: 10px;
    &:hover {
        border-bottom: 2px solid black;
    }
`

export const MenuAction = styled.div`
    font-size: 1.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const SearchBox = styled.div`
    margin-right: 15px;
    height: 40px;
    width: 60%;
    max-width: 250px;
    background-color: #F5F5F5;
    border-radius: 50px;
    display: flex;
    align-items: center;
    @media ${devices.mobileM} {
        margin-right: 5px;
    }
`;

export const SearchInput = styled(InputText)`
    width: 75%;
    height: 80%;
    margin-left: 8px;
    background-color: inherit;
    font-size: 1.5rem;
`

export const SearchClear = styled.div`
    cursor: pointer;
    margin-right: 10px;
    display: block;
    border-radius: 50%;  
`

export const SearchBtn = styled.div`
   cursor: pointer;
   margin-right: 5px;
`

export const Account = styled.div`
    margin-left: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Cart = styled.div`
    margin-left: 15px;
    margin-right: 12px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    @media ${devices.tabletM} {
        margin-right: 15px;
    }
`

export const MenuIcon = styled.div`
    display: none;
    @media ${devices.mobileM} {
        display: block;
    }
`;

export const MenuModal = styled.div`
    z-index: 3;
    display: none;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${colors.modal};
    transition: opacity .25s,visibility 0s linear .25s;
    @media ${devices.mobileM} {
        display: block;
    }
`;

export const MobileMenu = styled.div`
    right: 0;
    width: 50vw;
    height: 100vh;
    background-color: ${colors.white};
    position: absolute;
    z-index: 1;
    display: flex;
    flex-direction: column;
`;

export const BtnClose = styled.div`
    height: 30px;
    width: 30px;
    text-align: center;
    cursor: pointer;
    margin: 5px 8px 5px;
    align-self: flex-end;
    border-radius: 50%;
    &:hover {
        background-color: ${colors.gray};
    }
`;