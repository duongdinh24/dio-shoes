import styled from 'styled-components';
import { devices, colors } from '../../assets/styles/variables';

export const FooterContainer = styled.footer`
    width: 100vw;
    height: 200px;
    background-color: ${colors.dark};
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${colors.white};
    @media ${devices.mobileM} {
       height: 450px;
    }
`;


export const FooterMain = styled.div`
    padding-top: 20px;
    width: 100%;
    max-width: 1200px;
    height: 100%;
    height: 80%;
    display: flex;
    justify-content: space-around;

    @media ${devices.mobileM} {
       flex-direction: column;
    }
`;

export const FooterLeft = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FooterCenter = styled.div`
    margin-top: 30px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FooterRight = styled.div`
    margin-top: 30px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FooterHead = styled.h3`
    font-size: 1.6rem;
`;

export const FooterList = styled.ul`
    list-style: none;
    font-size: 1.4rem;
    margin-top: 10px;
`;

export const FooterItem = styled.li`
    margin-top: 10px;
    cursor: pointer;
`;


export const FooterPolicy = styled.div`
    width: 100%;
    max-width: 1200px;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Copyright = styled.div`
    padding: 10px;
    font-size: 1.1rem;
`;

export const FooterSocial = styled.div`
    padding: 10px;
`;

export const SocialLink = styled.a`
    margin: 15px 10px;
    font-size: 1.6rem;
    text-decoration: none;
    cursor: pointer;
    transition: all linear 0.25;
    &:hover {
        opacity: 0.75;
    }
`;
