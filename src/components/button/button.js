import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { withTheme } from "dry/theme";
import setPropTypes from "dry/utils/setPropTypes";

function DryButton(props) {
  const {
    className,
    disabled,
    disableRipple,
    onMouseUp,
    onMouseDown,
    onMouseLeave,
    ...restProps
  } = props;
  const [pressed, setPressed] = useState();
  const clsxName = clsx(className, {
    "MuiButton--pressed": pressed,
    "MuiButton--disabled": disabled
  });

  return (
    <Button
      {...restProps}
      disableRipple={disableRipple}
      disabled={disabled}
      className={clsxName}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    />
  );

  function handleMouseDown(...args) {
    setPressed(true);
    onMouseDown(...args);
  }

  function handleMouseUp(...args) {
    setPressed(false);
    onMouseUp(...args);
  }

  function handleMouseLeave(...args) {
    setPressed(false);
    onMouseLeave(...args);
  }
}

DryButton.defaultProps = {
  className: "",
  disabled: false,
  disableRipple: true,
  onMouseDown: () => {},
  onMouseUp: () => {},
  onMouseLeave: () => {}
};

DryButton.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  disableRipple: PropTypes.bool,
  onMouseDown: PropTypes.func,
  onMouseUp: PropTypes.func,
  onMouseLeave: PropTypes.func
};

const StyledButton = styled(DryButton)`
  &.MuiButtonBase-root {
    min-width: 160px;
    min-height: 42px;
    text-transform: none;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-weight: ${({ theme }) => theme.typography.fontWeightBold};
    font-style: normal;
    font-size: 15px;
    text-align: center;
    line-height: 18px;
    letter-spacing: 0.01em;
  }

  &.MuiButton-contained {
    box-shadow: none;

    &:hover,
    &:active {
      box-shadow: none;
    }
  }

  /* primary color */
  &.MuiButton-containedPrimary {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.lightGreen};
    box-shadow: 0px 8px 10px rgba(92, 198, 76, 0.13);

    &:hover {
      background-color: ${({ theme }) => theme.colors.lavender};
      box-shadow: 0px 8px 10px rgba(91, 214, 73, 0.13);
    }

    &.MuiButton--pressed {
      background-color: ${({ theme }) => theme.colors.green};
      box-shadow: 0px 2px 10px rgba(72, 180, 56, 0.13);
    }

    &.MuiButton--disabled {
      background-color: ${({ theme }) => theme.colors.iconGray};
      color: ${({ theme }) => theme.colors.white};
      opacity: 0.8;
    }
  }

  /* secondary color */
  &.MuiButton-outlinedSecondary {
    color: ${({ theme }) => theme.colors.lightGreen};
    background-color: ${({ theme }) => theme.colors.white};
    border: ${({ theme }) => `1px solid ${theme.colors.lightGreen}`};
    box-sizing: border-box;

    &:hover {
      color: ${({ theme }) => theme.colors.lavender};
      background-color: ${({ theme }) => theme.colors.white};
      border: ${({ theme }) => `1px solid ${theme.colors.lavender}`};
    }

    &.MuiButton--pressed {
      color: ${({ theme }) => theme.colors.green};
      background-color: ${({ theme }) => theme.colors.white};
      border: ${({ theme }) => `1px solid ${theme.colors.green}`};
    }

    &.MuiButton--disabled {
      color: ${({ theme }) => theme.colors.iconGray};
      background-color: ${({ theme }) => theme.colors.white};
      border: ${({ theme }) => `1px solid ${theme.colors.iconGray}`};
    }
  }

  /* tertiary / default color */
  &.MuiButton-text {
    color: ${({ theme }) => theme.colors.lightGreen};
    background-color: transparent;

    &:hover {
      color: ${({ theme }) => theme.colors.lavender};
      background-color: transparent;
    }

    &.MuiButton--pressed {
      color: ${({ theme }) => theme.colors.green};
      background-color: transparent;
    }

    &.MuiButton--disabled {
      color: ${({ theme }) => theme.colors.iconGray};
      background-color: transparent;
    }
  }
`;

const ThemedStyledButton = withTheme(StyledButton);

setPropTypes("DryButton", [Button, DryButton], ThemedStyledButton);

export default ThemedStyledButton;
