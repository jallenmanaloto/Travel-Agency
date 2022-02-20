import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import BaliIndonesia from "../../../assets/images/places/BaliIndonesia.jpg";
import KyotoJapan from "../../../assets/images/places/KyotoJapan.jpg";
import Cappadocia from "../../../assets/images/places/Cappadocia.jpg";
import quote from "../../../assets/images/quote.PNG";
import { fontPoppins } from "../../../themes/Font";
import { ThemeProvider } from "@mui/material/styles";

const Places = () => {
  //state for the active card on display
  const [activeCard, setActiveCard] = useState({});
  const reserveCards = [{ image: KyotoJapan }, { image: Cappadocia }];
  const cardDisplay = (
    <ThemeProvider theme={fontPoppins}>
      <Card
        sx={{
          ml: 10,
          width: "540px",
          height: "544px",
          position: "relative",
          borderRadius: "15px",
        }}
      >
        <CardContent>
          <img
            className="active-card-image"
            src={BaliIndonesia}
            alt="place-image"
          />
          <div className="circle-quote">
            <img src={quote} alt="quote" />
          </div>
          <div className="place-text">
            <Typography
              className="place-header"
              sx={{
                mb: 2,
                color: "#292929",
                fontSize: "30px",
                lineHeight: "100%",
                fontWeight: "bold",
              }}
            >
              Bali, Indonesia
            </Typography>
            <Typography className="place-caption" sx={{ mr: 10 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
              veniam.
            </Typography>
          </div>
        </CardContent>
      </Card>
    </ThemeProvider>
  );

  const cardReserve = reserveCards.map((reserve, key) => {
    return (
      <Card
        key={key}
        sx={{
          ml: 10,
          height: "300px",
          width: "540px",
          position: "relative",
          borderRadius: "15px",
        }}
      >
        <CardContent>
          <img className="card-reserve" src={reserve.image} alt="" />
        </CardContent>
      </Card>
    );
  });

  return (
    <>
      <Grid container>
        <Grid item md={12} lg={12}>
          <div className="places-card-container">
            {cardDisplay}
            {cardReserve}
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Places;
