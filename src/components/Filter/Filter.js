import React from "react";
import PropTypes from "prop-types";
import { Input, LabelWrapper, LabelDescription } from "./Filter.styled";

export const Filter = ({ value, onChange }) => {
    return (
        <LabelDescription>
            <LabelWrapper>
                Find contacts by mame
            </LabelWrapper>
            <Input type="text" value={value} onChange={onChange}/>
        </LabelDescription>
    )
}

Filter.propTypes = {
value: PropTypes.string.isRequired,
onChange: PropTypes.func.isRequired,
};