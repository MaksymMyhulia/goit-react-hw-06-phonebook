import styled from "@emotion/styled";

export const List = styled.ul`
display: flex;
flex-direction: column;
align-items: center;
gap: ${({theme}) => theme.space[4]}px;
padding: ${({theme}) => theme.space[3]}px ${({theme}) => theme.space[4]}px;
margin: 0 auto;

width: 320px;
max-width: 100%;
`; 

export const Item = styled.li`
display: flex;
justify content: space-between;
align-items: center;
gap: ${({theme}) => theme.space[4]}px;
width: 288px;

color: ${({theme}) => theme.colors.text};

`;

export const DeleteBtn = styled.button`
display: flex;
justify-content: space-between;
align-items: center;
gap: ${({theme}) => theme.space[4]}px;

padding: ${({theme}) => theme.space[3]}px ${({theme}) => theme.space[4]}px;
border-radius: ${({theme}) => theme.space[3]}px;
border: none;
box-shadow: ${({theme}) => theme.shadows.normal};
transition: all 0.25s ease-in-out;

background-color: ${({theme}) => theme.colors.backgroundColor};
color: ${({theme}) => theme.colors.text};
cursor: pointer;

:hover,
:focus {
    background-color: ${({theme}) => theme.colors.secondaryBackground};
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #8ba793;
    color: ${({theme}) => theme.colors.white};
}
`;