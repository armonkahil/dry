import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import TableHead from "@material-ui/core/TableHead";
import { withTheme } from "dry/theme";
import setPropTypes from "dry/utils/setPropTypes";

function DryTableHead(props) {
  const { className, ...restProps } = props;
  const clsxName = clsx(className, {});

  return <TableHead {...restProps} className={clsxName} />;
}

DryTableHead.defaultProps = {
  className: ""
};

DryTableHead.propTypes = {
  className: PropTypes.string
};

const StyledTableHead = styled(DryTableHead)``;

const ThemedStyledTableHead = withTheme(StyledTableHead);

setPropTypes("DryTableHead", [TableHead, DryTableHead], ThemedStyledTableHead);

export default ThemedStyledTableHead;
