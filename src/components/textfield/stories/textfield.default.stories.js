import React from "react";
import { Calendar } from "icons";
import TextField from "components/textfield";
import Select from "components/select";
import Grid from "components/grid";
import InputAdornment from "components/input-adornment";
import Avatar from "components/avatar";
import MenuItem from "@material-ui/core/MenuItem";
import { InputLabel } from "@material-ui/core";
import Box from "@material-ui/core/Box";


export default {
  title: "Library|TextFields/Default",
};

export const all = () => (
  <Grid container spacing={6}>
    <Grid item xs={12}>
      <TextField
        id="id"
        label="First name"
        defaultValue="Jane"
      />
    </Grid>

    <Grid item xs={12}>
      <Select
        label="Title"
        value={10}
        onChange={() => {}}
      >
        <MenuItem value={10}>Office meet-up</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </Grid>

    <Grid item xs={12}>
      <Select
        label="Title"
        value="Lindsey Stroud"
        onChange={() => {}}
        renderValue={(value) => (
          <Box>
            <Avatar width="24px" height="24px" src="/images/avatar-small.jpg" />
            <InputLabel>{value}</InputLabel>
          </Box>
        )}
      >
        <MenuItem value="Lindsey Stroud">Lindsey Stroud</MenuItem>
        <MenuItem value="John Doe">John Doe</MenuItem>
        <MenuItem value="Nathan Sales">Nathan Sales</MenuItem>
      </Select>
    </Grid>

    <Grid item xs={12}>
      <TextField
        id="id"
        label="Title"
        defaultValue="Office meet-up"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Calendar />
            </InputAdornment>
          ),
        }}
      />
    </Grid>

    <Grid item xs={12}>
      <TextField
        id="id"
        label="Title"
        defaultValue="Name"
        valueSize="large"
      />
    </Grid>
  </Grid>
);

export const TitleWithIconOnRight = () => (
  <TextField
    id="id"
    label="Title"
    defaultValue="Office meet-up"
    InputProps={{
      endAdornment: (
        <InputAdornment position="start">
          <Calendar />
        </InputAdornment>
      ),
    }}
  />
);

export const Title = () => (
  <TextField
    id="id"
    label="Title"
    defaultValue="Name"
    valueSize="large"
  />
);