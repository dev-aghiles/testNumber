import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "./Card";
export default function CardContainer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {[...Array(100)].map((x, i) => (
          <Grid item xs={12} md={4} sm={6} key={i + 1}>
            <Card number={i} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
