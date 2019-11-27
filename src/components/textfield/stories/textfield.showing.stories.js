import React from "react";
import makeStyles from "dry/utils/makeStyles";
import { Calendar } from "dry/icons";
import TextField from "dry/components/textfield";
import Select from "dry/components/select";
import Grid from "dry/components/grid";
import InputAdornment from "dry/components/input-adornment";
import Avatar from "dry/components/avatar";
import Box from "dry/components/box";
import MenuItem from "dry/components/menu-item";
import InputLabel from "dry/components/input-label";

export default {
  title: "Library|Inputs/Showing",
};

const useStyles = makeStyles(() => ({
  grid: {
    margin: 0,
  },
}));


export const all = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={6} className={classes.grid}>
      <Grid item xs={12}>
        <TextField
          id="id"
          label="First name"
          defaultValue="Jane"
          textVariant="naked"
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          id="id"
          label="Title"
          defaultValue="Office meet-up"
          textVariant="naked"
        />
      </Grid>

      <Grid item xs={12}>
        <Select
          label="Associated with"
          value="Lindsey Stroud"
          textVariant="naked"
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
          textVariant="naked"
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
          textVariant="naked"
        />
      </Grid>

    </Grid>
  );
};
