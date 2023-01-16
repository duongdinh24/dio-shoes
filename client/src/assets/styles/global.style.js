import { colors } from './variables';
import styled from 'styled-components';
export const Container = styled.div`
	/* min-height: 63vh; */
	min-height: calc(100vh - 324px);
	max-width: 1200px;
	width: 100%;
	margin: 0 auto;
`
export const Button = styled.button`
	cursor: pointer;
	border: none;
	transition: all linear 0.5s;
	&:hover {
		opacity: 0.7;	
	}
	&:disabled {
		cursor: default;
	}
`;

export const ButtonLink = styled.a`
	text-decoration: none;
	cursor: pointer;
	transition: all linear 0.1s;
	display: flex;
    justify-content: center;
    align-items: center;
	font-size: 1.8rem;
    color: ${colors.white};
    background-color: ${colors.dark};
    font-weight: 600;
    padding: 5px;
	text-transform: uppercase;
	&:hover {
		opacity: 0.7;
	}
`;

export const InputText = styled.input`
	border: none;
	outline: none;
	padding: 5px;
`;
