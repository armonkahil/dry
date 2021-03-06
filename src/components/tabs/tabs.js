import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import Tabs from "@material-ui/core/Tabs";
import { withTheme } from "dry/theme";
import setPropTypes from "dry/utils/setPropTypes";

function DryTabs(props) {
  const { className, ...restProps } = props;
  const clsxName = clsx(className, {});

  return <Tabs {...restProps} className={clsxName} />;
}

DryTabs.defaultProps = {
  className: ""
};

DryTabs.propTypes = {
  className: PropTypes.string
};

const StyledTabs = styled(DryTabs)`
  .MuiTabs-flexContainer {
    .MuiTab-root {
      border-right: 1px solid #c2cfe0;

      &:last-child {
        border-right: none;
      }
    }
  }

  /* tab item */
  .MuiTab-root {
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.01em;
    color: #334d6e;
    text-transform: none;
    padding: 0;
    min-height: 16px;

    &.Mui-selected {
      font-weight: bold;
    }
  }
`;

const ThemedStyledTabs = withTheme(StyledTabs);

setPropTypes("DryTabs", [Tabs, DryTabs], ThemedStyledTabs);

export default ThemedStyledTabs;
