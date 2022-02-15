import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import BaliIndonesia from "../../../assets/images/places/BaliIndonesia.jpg";

const Places = () => {
  //state for the active card on display
  const [activeCard, setActiveCard] = useState({});
  const cardDisplay = (
    <Card
      sx={{
        ml: 10,
        mt: 10,
        width: "540px",
        height: "544px",
        position: "relative",
        borderRadius: "15px",
      }}
    >
      <CardContent>
        <img className="active-card-image" src={BaliIndonesia} alt="" />
        <div className="place-text">
          <Typography className="place-header">Bali, Indonesa</Typography>
          <Typography className="place-caption">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
            veniam.
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
  return (
    <>
      <div>{cardDisplay}</div>
    </>
  );
};

export default Places;
