import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import Slider from "@material-ui/core/Slider";
import { withTheme } from "dry/theme";
import setPropTypes from "dry/utils/setPropTypes";

function DrySlider(props) {
  const { className, ...restProps } = props;
  const clsxName = clsx(className, {});

  return <Slider {...restProps} className={clsxName} />;
}

DrySlider.defaultProps = {
  className: ""
};

DrySlider.propTypes = {
  className: PropTypes.string
};

const StyledSlider = styled(DrySlider)`
  &.MuiSlider-root {
    color: #5cc64c;

    .MuiSlider-rail {
      height: 5px;
      color: #e3e3e3;
      border-radius: 5px;
    }

    .MuiSlider-track {
      height: 5px;
    }

    .MuiSlider-thumb {
      width: 15px;
      height: 15px;

      &:hover {
        box-shadow: 0px 0px 0px 10px rgba(47, 162, 30, 0.2);
      }

      &.MuiSlider-active {
        box-shadow: 0px 0px 0px 10px rgba(47, 162, 30, 0.2);
      }
    }

    &.Mui-disabled {
      color: #c2cfe0;

      .MuiSlider-rail {
        color: #e3e3e3;
      }

      .MuiSlider-thumb {
        margin-top: -5px;
        margin-left: -6px;
      }
    }
  }
`;

const ThemedStyledSlider = withTheme(StyledSlider);

setPropTypes("DrySlider", [Slider, DrySlider], ThemedStyledSlider);

export default ThemedStyledSlider;
