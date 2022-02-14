import React from "react";
import hero from "../../../assets/images/hero.jpg";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Nav from "./Nav";
import { fontPoppins } from "../../../themes/Font";
import { ThemeProvider } from "@mui/material/styles";

const Head = () => {
  return (
    <div className="head">
      <img className="hero" src={hero} alt="" />
      <div className="hero-overlay"></div>
      <Container
        maxWidth="xl"
        sx={{ position: "relative", height: "100vh", zIndex: 2 }}
      >
        <Nav />
        <Grid container justifyContent="center">
          <Grid item lg={10}>
            <ThemeProvider theme={fontPoppins}>
              <Typography
                sx={{
                  pt: { xs: 2, sm: "220px" },
                  zIndex: 3,
                  color: "white",
                  fontWeight: 600,
                  fontSize: { xs: "2.75rem", sm: "5.75rem", lg: "7.75rem" },
                  lineHeight: { md: "7.75rem", lg: "9.75rem" },
                  textAlign: "center",
                }}
                className="header"
                variant="h2"
              >
                Exploring The World In Comfort.
              </Typography>
            </ThemeProvider>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item lg={8}>
            <Typography
              className="sub-header"
              variant="h4"
              sx={{
                pt: "49px",
                fontSize: {
                  xs: "1rem",
                  sm: "1.25rem",
                  md: "1.55rem",
                  lg: "2.25rem",
                },
                textAlign: "center",
                color: "white",
              }}
            >
              You do not have the right to remain silent… let us know what it
              takes to challenge you
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Head;
