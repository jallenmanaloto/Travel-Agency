import React from "react";
import hero from "../../../assets/images/hero.jpg";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { fontPoppins } from "../../../themes/Font";
import { ThemeProvider } from "@mui/material/styles";

const Head = () => {
  return (
    <div className="head">
      <img className="hero" src={hero} alt="" />
      <div className="hero-overlay"></div>
      <Container maxWidth="xl">
        <div className="nav">
          <Grid container>
            <Grid item>
              <div className="logo">
                <Typography variant="h4">Dream.</Typography>
              </div>
            </Grid>
            <Grid item>
              <ThemeProvider theme={fontPoppins}>
                <div className="links">
                  <Typography variant="h5" sx={{ fontSize: "1.15rem" }}>
                    Find a trip
                  </Typography>
                  <Typography variant="h5" sx={{ fontSize: "1.15rem" }}>
                    Destinations
                  </Typography>
                  <Typography variant="h5" sx={{ fontSize: "1.15rem" }}>
                    Contact us
                  </Typography>
                </div>
              </ThemeProvider>
            </Grid>
            <Grid item>
              <div className="account">
                <Button
                  variant="outlined"
                  sx={{
                    border: "2px solid rgba(119, 127, 150, 1)",
                    color: "white",
                    height: "100%",
                  }}
                >
                  Create Account
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Head;
