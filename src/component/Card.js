import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard({ number }) {
  const [rest, setRest] = useState("");
  useEffect(() => {
    if (number % 3 === 0 && number % 5 !== 0) {
      setRest("fizz");
    }
    if (number % 3 !== 0 && number % 5 === 0) {
      setRest("buzz");
    }
    if (number % 3 === 0 && number % 5 === 0) {
      setRest("fizzbuzz");
    }
  }, [number]);
  return (
    <Card sx={{ maxWidth: 245 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h1" align="center" component="div">
            {number}
          </Typography>
          <Typography variant="h2" color="text.secondary" align="center">
            {rest}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
