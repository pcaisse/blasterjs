import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { color, borders, borderColor, borderRadius, boxShadow, themeGet } from "styled-system";
import { Density } from "../../common/density";
import Box from "../box";

const Card = styled(Box)`
  ${color}
  ${borders}
  ${borderColor}
  ${borderRadius}
  ${boxShadow}
  position: relative;

  ${props =>
    props.density === Density.COMFORTABLE &&
    css`
      padding: ${props => themeGet('space.3', '2.4rem')};;
    `};

  ${props =>
    props.density === Density.COMPACT &&
    css`
      padding:  ${props => themeGet('space.1', '0.8rem')};;
    `};
`;

Card.propTypes = {
  ...Box.propTypes,
  ...color.propTypes,
  ...borders.propTypes,
  ...borderColor.propTypes,
  ...borderRadius.propTypes,
  ...boxShadow.propTypes,
  density: PropTypes.oneOf(Object.values(Density))
};

Card.defaultProps = {
  pt: "card.p",
  pb: "card.p",
  pl: "card.p",
  pr: "card.p",
  bg: "card.bg",
  border: "2px solid",
  borderColor: "card.borderColor",
  borderRadius: "card.borderRadius",
  boxShadow: "card.boxShadow"
};

export default Card;
