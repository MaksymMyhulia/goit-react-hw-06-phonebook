import styled from "@emotion/styled";
import { Form as FormikForm, Field, ErrorMessage as FormikError } from "formik";

export const Form = styled(FormikForm)`
display: flex;
flex-direction: column;
align-items: center;
gap: 12px;

margin: 0 auto;
margin-bottom: ${({theme}) => theme.space[4]}px;
padding: ${({theme}) => theme.space[3]}px;

width: 480px;
max-width: 100%;
`;

export const FormField = styled.label`
display: flex;
flex-direction: column;
gap: ${({theme}) => theme.space[3]}px;

width: 480px;
max-width: 100%;

`;

export const LabelWrapper = styled.div`
gisplay: flex;
gap: ${({theme}) => theme.space[3]}px;
margin-left: ${({theme}) => theme.space[3]}px;
`;

export const FormikField = styled(Field)`
padding: ${({theme}) => theme.space[3]}px ${({theme}) => theme.space[4]}px;
max-width: 100%;

border-radius: ${({theme}) => theme.space[3]}px;
border: none;
box-shadow: ${({theme}) => theme.shadows.normal};
color: ${({theme}) => theme.colors.text};
background-color: ${({theme}) => theme.colors.backgroundColor};

font-size: ${({theme}) => theme.fontSizes.m};
`;

export const ErrorMessage = styled(FormikError)`
max-width: 480px;
color: ${({theme}) => theme.colors.accent};
`;

export const SubmitButton = styled.button`
display: flex;
align-items: center;
justify-content: center;

max-width: 100%;

gap: ${({theme}) => theme.space[2]}px;
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