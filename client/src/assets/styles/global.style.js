
import styled from 'styled-components';
export const Container = styled.div`
	min-height: 63vh;
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
`;

export const ButtonA = styled.a`
	text-decoration: none;
	cursor: pointer;
	transition: all linear 0.25s;
	display: flex;
    justify-content: center;
    align-items: center;
	&:hover {
		opacity: 0.7;
	}
`;

export const InputText = styled.input`
	border: none;
	outline: none;
	padding: 5px;
`;
