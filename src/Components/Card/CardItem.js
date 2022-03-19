import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function CardItem(props) {
  const { title, distance, img } = props;
  return (
    <Card>
      <CardMedia component="img" height="200" image={img} alt="ha-long" />
      <CardContent sx={{ backgroundColor: "#f1375d", color: "white" }}>
        <Typography gutterBottom variant="h4" component="div">
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: "1.2rem",
            color: "white",
            marginBottom: "50px",
          }}
          variant="body2"
          color="text.secondary"
        >
          {distance}
        </Typography>
      </CardContent>
    </Card>
  );
}
