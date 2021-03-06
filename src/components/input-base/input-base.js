import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import InputBase from "@material-ui/core/InputBase";
import { withTheme } from "dry/theme";
import setPropTypes from "dry/utils/setPropTypes";

function DryInputBase(props) {
  const { className, ...restProps } = props;
  const clsxName = clsx(className, {});

  return <InputBase {...restProps} className={clsxName} />;
}

DryInputBase.defaultProps = {
  className: ""
};

DryInputBase.propTypes = {
  className: PropTypes.string
};

const StyledInputBase = styled(DryInputBase)``;

const ThemedStyledInputBase = withTheme(StyledInputBase);

setPropTypes("DryInputBase", [InputBase, DryInputBase], ThemedStyledInputBase);

export default ThemedStyledInputBase;
