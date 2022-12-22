import styled from 'styled-components';
import { Button } from '../../assets/styles/global.style';
import { colors } from '../../assets/styles/variables';
export const Container = styled(Button)`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: fixed;
    bottom: 300px;
    right: 50px;
    background-color: ${colors.light};
    display: flex;
    align-items: center;
    justify-content: center;
`