import React from "react";
import hero from "../../../assets/images/hero.jpg";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Nav from "./Nav";
import { fontPoppins, fontInter } from "../../../themes/Font";
import { ThemeProvider } from "@mui/material/styles";
import Search from "./Search";

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
          <Grid item sm={10} md={7} lg={5}>
            <ThemeProvider theme={fontPoppins}>
              <Typography
                sx={{
                  pt: { xs: 2, sm: "220px" },
                  zIndex: 3,
                  color: "white",
                  fontWeight: 600,
                  fontSize: { xs: "2.75rem", sm: "62px", lg: "62px" },
                  lineHeight: { md: "78px", lg: "78px" },
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
          <Grid item sm={8} md={8} lg={4}>
            <ThemeProvider theme={fontInter}>
              <Typography
                className="sub-header"
                variant="h4"
                sx={{
                  pt: "49px",
                  fontSize: {
                    xs: "1rem",
                    sm: "1.25rem",
                    md: "1.55rem",
                    lg: "18px",
                  },
                  lineHeight: "28px",
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "rgba(255, 255, 255, 0.88)",
                }}
              >
                You do not have the right to remain silent… let us know what it
                takes to challenge you
              </Typography>
            </ThemeProvider>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item lg={7} sx={{ pt: "6.125rem" }}>
            <Search />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Head;
