import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withTheme } from "dry/theme";
import setPropTypes from "dry/utils/setPropTypes";

function DryCircularProgress(props) {
  const { className, ...restProps } = props;
  const clsxName = clsx(className, {});

  return <CircularProgress {...restProps} className={clsxName} />;
}

DryCircularProgress.defaultProps = {
  className: ""
};

DryCircularProgress.propTypes = {
  className: PropTypes.string
};

const StyledCircularProgress = styled(DryCircularProgress)``;

const ThemedStyledCircularProgress = withTheme(StyledCircularProgress);

setPropTypes(
  "DryCircularProgress",
  [CircularProgress, DryCircularProgress],
  ThemedStyledCircularProgress
);

export default ThemedStyledCircularProgress;
