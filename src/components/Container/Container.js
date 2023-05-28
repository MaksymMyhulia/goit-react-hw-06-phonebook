import React from "react";
import { ContainerStyled, MainStyled } from "./Container.styled";
import PropTypes from "prop-types";

export const Container = ({ children }) => {
    return (
        <ContainerStyled>
            <MainStyled> {children} </MainStyled>
        </ContainerStyled>
    )
}


Container.propTypes = {
children: PropTypes.node.isRequired,
};
