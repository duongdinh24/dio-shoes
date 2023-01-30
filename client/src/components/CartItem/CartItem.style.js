import styled from 'styled-components';
import { devices, colors } from '../../assets/styles/variables';

export const Wrapper = styled.div`
    height: 200px;
    width: 100%;
    padding: 20px 0;
    border-bottom: 1px solid #ccc;
    display: flex;
    @media ${devices.mobileM} {
        height: 300px;
    }
`;

export const ImageContainer = styled.div`
    height: 100%;
    width: 160px;
    background-color: ${colors.lightgray};
    a {
        cursor: pointer;
    }
    @media ${devices.mobileM} {
        width: 30vw;
        height: 30vw;
    }
`;

export const Image = styled.img`
   width: 100%;
   height: 100%;
   object-fit: contain;
`;

export const InfoContainer = styled.div`
   flex: 1;
   display: flex;
   @media ${devices.mobileM} {
        flex-direction: column;
        padding-left: 10px;
    }
`;

export const LeftInfo = styled.div`
    padding: 0 20px;
    flex: 3;
    display: flex;
    flex-direction: column;
    @media ${devices.mobileM} {
        padding: 0;
    }
`;

export const Name = styled.a`
    width: 100%;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 26px;
    text-decoration: none;
    text-transform: capitalize;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
     white-space: pre-wrap;
`;

export const Info = styled.p`
    text-transform: capitalize;
    font-size: 1.6rem;
    line-height: 24px;
    color: ${colors.gray};
    margin-top: 10px;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
`;

export const Variant = styled.div`
    margin-top: 15px;
    display: flex;
    width: 100%;
    font-size: 1.6rem;
`;

export const Size = styled.div`
    color: ${colors.gray};
    flex: 1;
    span {
        color: ${colors.black};
    }
`;

export const Quantity = styled.div`
    flex: 2;
    color: ${colors.gray};
    select {
        width: 40px;
        &:focus {
            outline: none;
        }
    }
    option {
        color: ${colors.black};
    }
`;

export const RightInfo = styled.div`
   flex: 2;
   height: 100%;
`;

export const Price = styled.div`
    margin: 8px 0;
    height: 45%;
`;

export const OldPrice = styled.span`
     color: ${colors.gray};
    margin-left: 8px;
    font-style: italic;
    text-decoration: line-through;
    font-size: 1.5rem;
`;

export const CurentPrice = styled.span`
    font-size: 1.8rem;
`;

export const Sale = styled.p`
    font-size: 1.5rem;
    color: ${colors.green};
    font-weight: 400;
    margin-top: 8px;
`;

export const BtnDelete = styled.div`
   width: 20px;
   height: 20px;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
   transition: all 0.2s ease;
   &:hover {
        opacity: 0.8;
   }
`;