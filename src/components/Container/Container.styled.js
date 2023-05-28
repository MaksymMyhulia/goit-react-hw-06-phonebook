import styled from "@emotion/styled";

export const ContainerStyled = styled.div`
display: flex;
flex-direction: column;
align-items; center;
justify-content: center;

gap: ${({theme}) => theme.space[4]}px;
padding: ${({theme}) => theme.space[5]}px;
width: 100%;
height: 100vh;
`;

export const MainStyled = styled.main`
display: flex;
flex-direction: column;
align-items; center;
justify-content: center;

margin: 0 auto;
padding: ${({theme}) => theme.space[5]}px;
height: 100vh;
`;