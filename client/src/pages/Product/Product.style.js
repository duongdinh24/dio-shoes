import styled from 'styled-components';
import { Container } from '../../assets/styles/global.style';
import { devices, colors } from '../../assets/styles/variables';

export const ProductContainer = styled(Container)`

`;

export const InforContainer = styled.div`
    width: 100%;
    height: 700px;
    display: flex;
    @media ${devices.tabletM} {
        flex-direction: column;
        height: 1400px;
    }
`;

export const Slider = styled.div`
    height: 100%;
    width: 50%;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    @media ${devices.tabletM} {
       width: 100%;
    }
`;

export const ProductArea = styled.div`
    width: 100%;
    max-width: 1400px;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const Title = styled.h3`
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    margin: 30px 0 15px 10px;
    align-self: start;
`;

export const SubTitle = styled.span`
    line-height: 26px;
    display: block;
    font-size: 2rem;
    margin-bottom: 10px
`;

export const ProductInfo = styled.div`
    padding-left: 40px;
    height: 100%;
    width: 50%;
    @media ${devices.tabletM} {
        width: 100%;
    }
    display: flex;
    flex-direction: column;
`;

export const Name = styled.h3`
    font-weight: 450;
    font-size: 2.5rem;
    margin-bottom: 35px;
    text-transform: capitalize;
    line-height: 40px;
    @media ${devices.tabletM} {
        margin-top: 40px;
    }
`;

export const Price = styled.div`
    font-size: 2.0rem;
    font-weight: 500;
    margin-bottom: 30px;
`;

export const CurentPrice = styled.span`
    color: ${colors.red};
`;

export const OldPrice = styled.span`
    color: ${colors.gray};
    margin-left: 8px;
    font-style: italic;
    text-decoration: line-through;
    font-size: 2.0rem;
`;

export const Sale = styled.span`
    font-size: 1.8rem;
    color: ${colors.green}; 
    font-weight: 400;
    margin-left: 20px;
`;

export const Info = styled.span`
    color: ${colors.gray};
    text-transform: capitalize;
    font-size: 1.6rem;
    margin-bottom: 20px;
    font-style: italic;
`;

export const ColorContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 120px;
    margin-bottom: 20px;
`;

export const ColorList = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
    height: 80%;
`;

export const ColorItem = styled.div`
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    position: relative;
    background-color: #EBEFF2;
    border: ${props => (props.isSelect ? "1px solid red" : "none")};
    button {
        position: absolute;
        opacity: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
        z-index: 1;
    }
    label {
        width: 100%;
        height: 100%;
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
`;

export const SizeContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 20px;
    height:auto;
`;

export const SizeList = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`;

export const SizeItem = styled.button`
    width: 40px;
    height: 40px;
    cursor: pointer;
    background-color: ${props => (props.disabled ? "" : colors.lightgray)};
    margin-right: 15px;
    border-radius: 50%;
    border: ${props => (props.isSelect ? "1px solid red" : "1px solid #9b9b9b")};
    transition: all 0.5s ease;
    &:disabled {
        cursor: default;
    }
`;

export const ProductAction = styled.div`
    display: flex;
    justify-content: space-around;
    height: 100px;
    width: 100%;
    align-items: flex-start;
    box-sizing: border-box;
    @media ${devices.tabletM} {
        flex-direction: column;
        height: 220px;
    }
`;

export const QuantityContainer = styled.div`
    width: 50%;
    height: 100%;
`;

export const Quantity = styled.div`
    height: 40px;
    width: 150px;
    margin-top: 20px;
    font-size: 2.0rem;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    button {
        width: 50px;
        height: 100%;
        cursor: pointer;
        &:focus {
            outline: none;
        }
        &:disabled {
            cursor: default;
        }
    }
    span {
        text-align: center;
        display: block;
        width: 50px;
        height: 100%;
        line-height: 40px;
    }
`;

export const AddToCard = styled.button`
    cursor: pointer;
    background-color: ${colors.red};
    font-size: 1.6rem;
    width: 180px;
    height: 50px;
    color: ${colors.white};
    border: none;
    font-weight: 500;
    margin-top: 40px;
    transition: all 0.2s ease;
    @media ${devices.tabletM} {
        height: 80px;
        margin: auto;
    }
    &:hover {
        opacity: 0.8;
    }
`;

export const ProductDesc = styled.div`
    border-top: 1px solid #cccc;
    width: 100%;
    min-height: 200px;
    p {
        padding: 15px;
        font-size: 1.6rem;
        line-height: 28px;
        &:first-letter {
            padding-left: 20px;
        }
    }
`;