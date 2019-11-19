import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { MenuItem } from "@material-ui/core";
import { withTheme } from "theme";
import setPropTypes from "utils/setPropTypes";

const DryMenuItem = forwardRef((props, ref) => {
  const {
    className,
    ...restProps
  } = props;
  const clsxName = clsx(className, {

  });

  return (
    <MenuItem
      {...restProps}
      ref={ref}
      className={clsxName}
    />
  );
});

DryMenuItem.defaultProps = {
  className: "",

};

DryMenuItem.propTypes = {
  className: PropTypes.string,

};

const StyledMenuItem = styled(DryMenuItem)`
  &.MuiListItem-root.Mui-selected,
  &.MuiListItem-root.Mui-selected:hover {
    background-color: #EBEFF2;
  }
`;

const ThemedStyledMenuItem = withTheme(StyledMenuItem);

setPropTypes("DryMenuItem", DryMenuItem, ThemedStyledMenuItem);

export default ThemedStyledMenuItem;
