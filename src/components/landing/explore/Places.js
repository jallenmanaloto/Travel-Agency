import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import BaliIndonesia from "../../../assets/images/places/BaliIndonesia.jpg";
import quote from "../../../assets/images/quote.PNG";
import { fontPoppins } from "../../../themes/Font";
import { ThemeProvider } from "@mui/material/styles";

const Places = () => {
  //state for the active card on display
  const [activeCard, setActiveCard] = useState({});
  const cardDisplay = (
    <ThemeProvider theme={fontPoppins}>
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
  return (
    <>
      <div>{cardDisplay}</div>
    </>
  );
};

export default Places;
