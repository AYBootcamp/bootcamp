import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledSectionTitle = styled.h1`
  color: #6d6d6d;
  margin: 0;
  font-size: 32px;
  font-weight: 400;
`;
// Reusable components
const SectionTitle = ({ title }) => {
  return <StyledSectionTitle>{title}</StyledSectionTitle>;
};

// Restrict the type of prop can be passed in for this component
SectionTitle.propTypes = {
  title: PropTypes.string,
};

export default SectionTitle;
