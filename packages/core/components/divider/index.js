import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { themeGet } from "styled-system";
import { Direction } from "../../common/direction";
import Box from "../box";

const HDivider = styled(Box).attrs({
  tag: 'hr'
})`
  background-color: ${props => themeGet(`colors.${props.color}`, props.color)};
  border: 0;
  width: ${props => props.width || "100%"};
  height: ${props => props.height || "1px"};
`;

const VDivider = styled(Box).attrs({
  tag: 'span'
})`
  display: inline-block;
  vertical-align: middle;
  background-color: ${props => themeGet(`colors.${props.color}`, props.color)};
  width: ${props => props.width || "2px"};
  height: ${props => props.height || "100%"};

  ::after {
    content: '\00a0';
    visibility: hidden;
    pointer-events: none;
    user-select: none;
  }
`;

const Divider = ({children, ...props}) => {
  return (
    <>
      {props.direction === Direction.HORIZONTAL && <HDivider {...props} />}
      {props.direction === Direction.VERTICAL && <VDivider {...props} />}
    </>
  );
};

Divider.propTypes = {
  ...Box.propTypes,
  direction: PropTypes.oneOf(Object.values(Direction)).isRequired,
  color: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

Divider.defaultProps = {
  color: "divider.color"
};

export default Divider;
