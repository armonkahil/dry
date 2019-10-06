import React from "react";
import Proptypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { Select } from "@material-ui/core";
import { withTheme } from "theme";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

function DrySelect(props) {
  const {
    className,
    label,
    ...restProps
  } = props;
  const clsxName = clsx(className, {

  });

  return (
    <FormControl className={clsxName}>
      <InputLabel>
        {label}
      </InputLabel>
      <Select
        {...restProps}
      />
    </FormControl>
  );
}

DrySelect.defaultProps = {
  className: "",
  label: "",
};

DrySelect.propTypes = {
  className: Proptypes.string,
  label: Proptypes.string,
};

const StyledSelect = styled(DrySelect)`
  &.MuiFormControl-root {
    min-width: 25%;
    color: #707683;
  }

  .MuiSelect-icon {
    color: #AEAEAE;
  }

  /* input */
  .MuiSelect-root {
    padding-top: 8px;
    padding-bottom: 9px;
    color: #707683;
  }

  /* input underline */
  .MuiInput-underline {
    &::before, &::after {
      border-bottom-color: #D3D8DD;
    }

    &:hover:not(.Mui-disabled):before {
      border-bottom: 1px solid #D3D8DD;
    }
  }

  /* edit mode */
  .Mui-focused {
    .MuiInputBase-input {
      background: #EBEFF2;
    }

    .MuiInputAdornment-root {
      background: #EBEFF2;
    }

    &.MuiInput-underline::after {
      border-bottom: 1px solid #818E9B;
    }
  }

  /* with avatar */
  .MuiBox-root {
    display: flex;
    align-items: center;

    .MuiFormLabel-root {
      margin: 0 5px;
    }
  }
`;

export default withTheme(StyledSelect);