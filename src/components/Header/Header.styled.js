import styled from "@emotion/styled"

export const HeaderStyled = styled.h1`
text-align: center;
margin-bottom: ${({theme}) => theme.space[4]}px;
color: ${({theme}) => theme.colors.green};
font-size: ${({theme}) => theme.fontSizes.l};
`;