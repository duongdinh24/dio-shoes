import styled from 'styled-components';
import { Container, Button } from '../../assets/styles/global.style';
import { devices, colors } from '../../assets/styles/variables';

export const CartContainer = styled(Container)`
    display: flex;
    @media ${devices.tabletM} {
        flex-direction: column;
    }
    transition: all .1s ease-in-out; 
`;


export const EmptyCart = styled.div`
    padding-top: 20px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
        font-size: 2.0rem;
        font-weight: 500;
    }

    img {
        width: 500px;
        height: 500px;
        object-fit: contain;
        @media ${devices.mobileM} {
            width: 300px;
            height: 300px;
        }
    }

    a { 
        height: 60px;
        width: 200px;
        text-decoration: none;
	    cursor: pointer;
	    transition: all linear 0.1s;
	    display: flex;
        justify-content: center;
        align-items: center;
	    font-size: 1.8rem;
        color: ${colors.white};
        background-color: ${colors.black};
        font-weight: 600;
        padding: 5px;
	    &:hover {
		    opacity: 0.7;
	    }
    }
`;

export const CartContent = styled.div`
    width: 66.6666%;
    padding-right: 10px;
    min-height: 400px;
    @media ${devices.tabletM} {
        width: 100%;
        padding: 0 10px;
    }
`;

export const Title = styled.h3`
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    margin: 30px 0;
    align-self: start;
`;

export const Anouncement = styled.div`
    width: 100%;
    height: auto;
    min-height: 100px;
    background-color: ${colors.lightgray};
    display: flex;
    margin-bottom: 30px;
    box-sizing: border-box;
    .warpper {
        flex: 1;
        height: 100%;
        padding: 15px;
        h4 {
            font-size: 1.5rem;
            font-weight: 400;
            text-transform: uppercase;
            line-height: 26px;
            margin-bottom: 5px;
        }
        p {
            font-size: 1.3rem;
            line-height: 26px;
        }
    }
    .btn-close {
        cursor: pointer;
        margin: 5px;
        width: 30px;
        height: 30px;
        align-self: flex-start;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const WrappItem = styled.div`
    width: 100%;
`;

export const Summary = styled.div`
    width: 33.3333%;
    padding-left: 10px;
    min-height: 200px;
    @media ${devices.tabletM} {
        width: 100%;
        padding: 0 10px;
    }
`;

export const SummaryContainer = styled.div`
    width: 100%;
`;
export const SummaryInfo = styled.div`
    width: 100%;
    border-bottom: ${props => props.borderBottom ? "1px solid #ccc" : ""};
    font-size: 1.8rem;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const BtnCheckout = styled(Button)`
    margin: 30px 0;
    box-sizing: border-box;
    overflow: hidden;
    width: 100%;
    height: 70px;
    background-color: ${colors.black};
    color: white;
    /* text-transform: uppercase; */
    font-size: 1.8rem;
    font-weight: 600;
    border-radius: 30px;
`;
