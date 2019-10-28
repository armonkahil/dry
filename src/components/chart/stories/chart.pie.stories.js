/* eslint-disable import/named */
/* eslint-disable react/prop-types */
import React, { useRef, useState } from "react";
import makeStyles from "utils/makeStyles";
import Icon from "components/icon";
import { TripOrigin, ArrowDropDown } from "icons";
import Grid from "components/grid";
import Paper from "components/paper";
import Text from "components/text";
import Menu from "components/menu";
import MenuItem from "components/menu-item";
import InputLabel from "components/input-label";
import Divider from "components/divider";

import {
  PieChart, Pie, Cell, Label, Tooltip, Legend, ResponsiveContainer,
} from "components/chart/recharts";

export default {
  title: "Library|Charts/Pie",
};

const data = [
  { name: "Active", value: 30 },
  { name: "Completed", value: 60 },
  { name: "Ended", value: 10 },
];
const COLORS = [
  "#FFB946",
  "#5CC64C",
  "#F7685B",
];

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#E5E5E5",
    height: "90vh",
    padding: "1rem",

    "& .MuiPaper-root:hover": {
      "& svg, h1, p": {
        color: "white !important",
      },

      background: "#5CC64C",
      boxShadow: "2px 2px 20px rgba(0, 0, 0, 0.32)",
      borderRadius: "4px",
      transition: "box-shadow 1s",
      "-webkit-transition": "box-shadow 1s",
    },
  },

  grid: {
    backgroundColor: "#E5E5E5",
    height: "90vh",
    padding: "1rem",
  },

  selectInput: {
    fontSize: "12px",
    lineHeight: "14px",
    color: "#90A0B7",
    justifyContent: "flex-end",
  },

  divider: {
    margin: ".5rem auto 1rem auto",
  },

}));

export const Default = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={6} className={classes.grid}>
      <Grid item xs={4}>
        <Paper>
          <Grid container alignItems="center">
            <Grid item xs={6}>
              <Text
                component="h2"
                style={{
                  fontSize: "20px",
                  margin: "0",
                  fontWeight: "bold",
                  color: "#334D6E",
                }}
              >
                Performance
              </Text>
            </Grid>
            <Grid item xs={6}>
              <ShowDate />
            </Grid>
            <Grid item xs={12} className={classes.divider}>
              <Divider light />
            </Grid>
            <Grid item xs={12}>
              <ResponsiveContainer width="100%" height={160}>
                <PieChart>
                  <Tooltip />
                  <Legend
                    verticalAlign="middle"
                    layout="vertical"
                    align="right"
                    iconSize={8}
                    iconType="circle"
                    content={renderLegend}
                  />
                  <Pie
                    data={data}
                    dataKey="value"
                    innerRadius="87%"
                    outerRadius="100%"
                  >
                    <Label
                      width={30}
                      position="center"
                      content={renderLabel}
                    />
                    {data.map((entry, index) => (
                      <Cell
                        key={entry}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

function ShowDate() {
  const classes = useStyles();
  const inputRef = useRef();
  const [value, setValue] = useState("This Month");
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpen = () => {
    setAnchorEl(inputRef.current);
  };

  const handleSelectItem = (item) => {
    setValue(item);
    setAnchorEl(null);
  };

  const popOverProps = {
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "right",
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "right",
    },
  };

  return (
    <>
      <InputLabel
        label="Show:"
        value={value}
        onClick={handleOpen}
        rightIcon={<ArrowDropDown ref={inputRef} onClick={handleOpen} />}
        className={classes.selectInput}
      />
      <Menu
        keepMounted
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        {...popOverProps}
      >
        {["This Month", "Last Month"].map((item) => (
          <MenuItem
            key={item}
            value={item}
            selected={item === value}
            onClick={() => handleSelectItem(item)}
            className={classes.selectInput}
          >
            {item}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

function renderLabel(props) {
  const { viewBox } = props;
  const { cx, cy } = viewBox;

  return (
    <text
      x={cx}
      y={cy}
      fill="#5CC64C"
      textAnchor="middle"
      dominantBaseline="central"
    >
      <tspan
        color="red"
        alignmentBaseline="middle"
        fontSize="45"
        fontWeight="bold"
      >
        60%
      </tspan>
    </text>
  );
}

function renderLegend(props) {
  const { payload } = props;

  return (
    <div>
      {payload.map((entry, index) => (
        <div
          key={`item-${entry.value}`}
          style={{ margin: "10px 0" }}
          fontSize="10px"
        >
          <Icon
            component={TripOrigin}
            fontSize="xxsmall"
            color={COLORS[index % COLORS.length]}
          />
          <Text
            component="span"
            display="inline"
            style={{
              margin: "10px",
              fontSize: "10px",
              fontWeight: "bold",
              textTransform: "uppercase",
              color: "#334D6E",
            }}
          >
            {entry.value}

          </Text>
        </div>
      ))}
    </div>
  );
}
