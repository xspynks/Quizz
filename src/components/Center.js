import React from "react";
import { Grid } from "@mui/material";

export default function Center() {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Grid item xs={1}></Grid>
    </Grid>
  );
}
