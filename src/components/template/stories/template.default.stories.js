import React from "react";
import makeStyles from "dry/utils/makeStyles";
import Box from "dry/components/box";
import Grid from "dry/components/grid";

export default {
  title: "Library|Grid/Default",
};

const useStyles = makeStyles(() => ({
  box: {
    backgroundColor: "#E5E5E5",
    padding: "1rem",
    height: "90vh",
  },
}));

export const withDefault = () => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          Template
        </Grid>
      </Grid>
    </Box>
  );
};
