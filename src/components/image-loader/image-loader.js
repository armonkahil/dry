import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import ImageLoader from "react-image";
import { withTheme } from "dry/theme";
import setPropTypes from "dry/utils/setPropTypes";

function DryImageLoader(props) {
  const {
    className,
    ...restProps
  } = props;
  const clsxName = clsx(className, {

  });

  return (
    <ImageLoader
      {...restProps}
      className={clsxName}
    />
  );
}

DryImageLoader.defaultProps = {
  className: "",

};

DryImageLoader.propTypes = {
  className: PropTypes.string,

};

const StyledImageLoader = styled(DryImageLoader)`
 
`;

const ThemedStyledImageLoader = withTheme(StyledImageLoader);

setPropTypes("DryImageLoader", [ImageLoader, DryImageLoader], ThemedStyledImageLoader);

export default ThemedStyledImageLoader;
