
import styled from "styled-components";
import { ButtonLink } from '../../assets/styles/global.style';
import { devices, colors } from '../../assets/styles/variables';

export const Container = styled.div`    
    width: 100%;
    max-width: 1200px;
    height: 75vh;
    overflow: hidden;
    position: relative;

    @media ${devices.tabletL} {
       height: 60vh;
    }

    @media ${devices.tabletM} {
       height: 50vh;
    }

    @media ${devices.mobileM} {
       height: 45vh;
    }
`;

export const Arrow = styled.div`
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    z-index: 2;
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};
    width: 50px;
    height: 50px;
    border-radius: 50%; 
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.1;
    transition: all 0.5s ease;
    &:hover {
        background-color: ${colors.lightgray};
        opacity: 1;
    }
    @media ${devices.mobileM} {
        width: 30px;
        height: 30px;
    }
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    transition: all 1s ease; 
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    transition: all 1s ease;
`;

export const Slide = styled.div`
    display: ${props => (props.active === "true" ? "block" : "none")};
    width: 100%;
    height: 100%;
`;

export const ImgContainer = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    @media ${devices.tabletM} {
       height: 70%;
    }

    @media ${devices.mobileM} {
       height: 50%;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

export const InforContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h3`
    font-size: 2rem;
    font-weight: 600;
    text-transform: uppercase;
    margin: 20px 0;
`;

export const Desc = styled.div`
    font-size: 1.4rem;
    margin: 10px 0;
`;

export const ButtonShow = styled(ButtonLink)`
    width: 100px;
    height: 40px;
    margin: 10px 0;
`;

export const DotContainer = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 160px;
    @media ${devices.tabletL} {
       bottom: 190px;
    }
    @media ${devices.tabletM} {
       bottom: 130px;
    }
    @media ${devices.mobileM} {
       bottom: 180px;
    }
    @media ${devices.mobileS} {
       bottom: 160px;
    }
`
export const Dot = styled.span`
    cursor: pointer;
    height: 15px;
    width: 15px;
    background-color:  ${props => (props.active === "true" ? colors.red : colors.gray)};
    border-radius: 50%;
    display: inline-block;
    margin: 0 10px;
    z-index: 1;
    &:hover {
        opacity: 0.5;
    }
    @media ${devices.mobileM} {
        height: 10px;
        width: 10px;
    }
`



// width: 15px;
// height: 15px;
// border-radius: 50%;
// background-color: ${colors.red};


