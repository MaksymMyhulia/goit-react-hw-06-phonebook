import React from "react";
import PropTypes from "prop-types";

import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'components/redux/filter/filter-slice';
import { getFilter } from 'components/redux/filter/filter-selectors';

import { Input, LabelWrapper, LabelDescription } from "./Filter.styled";

export const Filter = () => {
const filter = useSelector(getFilter);
const dispatch = useDispatch();
  
const changeFilter = e => {
  dispatch(setFilter(e.target.value.toLowerCase().trim()));
};
    return (
        <LabelDescription>
            <LabelWrapper>
                Find contacts by name
            </LabelWrapper>
            <Input type="text" value={filter} onChange={changeFilter}/>
        </LabelDescription>
    )
}

Filter.propTypes = {
value: PropTypes.string.isRequired,
onChange: PropTypes.func.isRequired,
};