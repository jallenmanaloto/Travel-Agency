import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Destination from "../../../assets/images/Destination.PNG";
import Trip from "../../../assets/images/Trip.PNG";
import Travel from "../../../assets/images/Travel.PNG";

const Cards = () => {
  const cardDetails = [
    {
      image: Destination,
      header: "Select destination",
      subheader: "Choose the place that you wanted to go",
    },
    {
      image: Trip,
      header: "Book a trip",
      subheader: "Book your trips from our most exclusive offers",
    },
    {
      image: Travel,
      header: "Take your flight",
      subheader: "Get into your flight and enjoy your travel destination",
    },
  ];

  const cardGroup = cardDetails.map((card) => {
    return (
      <Grid item lg={4}>
        <Card sx={{ maxWidth: "326px", height: "306px", borderRadius: "12px" }}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <img className="card-image" src={card.image} alt="" />
            <div className="card-texts">
              <Typography
                className="card-header"
                sx={{
                  color: "#1E2A39",
                  lineHeight: "36px",
                  fontSize: "24px",
                  fontWeight: "600",
                }}
              >
                {card.header}
              </Typography>
              <Typography
                className="card-subheader"
                sx={{
                  width: "90%",
                  color: "#5C6272",
                  lineHeight: "26px",
                  fontSize: "16px",
                }}
              >
                {card.subheader}
              </Typography>
            </div>
          </CardContent>
        </Card>
      </Grid>
    );
  });
  return (
    <div>
      <Grid container justifyContent="center" spacing={1}>
        {cardGroup}
      </Grid>
    </div>
  );
};

export default Cards;
