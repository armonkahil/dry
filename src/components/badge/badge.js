import React from "react";
import omit from "lodash/omit";
import styled from "styled-components";
import Badge from "@material-ui/core/Badge";
import { withTheme } from "dry/theme";
import setPropTypes from "dry/utils/setPropTypes";

const excludeProps = ["minWidth"];

function DryBadge(props) {
  return <Badge {...omit(props, excludeProps)} />;
}

const StyledBadge = styled(DryBadge)`
  .MuiBadge-badge {
    width: ${({ width }) => width};
    min-width: ${({ minWidth }) => minWidth};
    height: ${({ height }) => height};
    background: ${({ background }) => background};
    border-radius: ${({ borderRadius }) => borderRadius || "100%"};
    box-shadow: ${({ boxShadow }) =>
      boxShadow || "0px 4px 4px rgba(0, 0, 0, 0.08);"};
    padding: 0;
  }
`;

const ThemedStyledBadge = withTheme(StyledBadge);

setPropTypes("DryBadge", [Badge, DryBadge], ThemedStyledBadge);

export default ThemedStyledBadge;
