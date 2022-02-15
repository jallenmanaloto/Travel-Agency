import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { fontPoppins } from "../../../themes/Font";
import { ThemeProvider } from "@mui/material/styles";
import Cards from "./Cards";

const Info = () => {
  return (
    <>
      <div className="info">
        <ThemeProvider theme={fontPoppins}>
          <Container>
            <div className="info-header-container">
              <Grid container flexDirection="column" alignItems="center">
                <Grid item sm={12} md={12} lg={12}>
                  <Typography
                    sx={{
                      mt: "113px",
                      pb: "1.5rem",
                      color: "#1E2A39",
                      fontWeight: "bold",
                    }}
                    variant="h3"
                  >
                    An Easier Way To Travel
                  </Typography>
                </Grid>
                <Grid item sm={8} md={8} lg={8}>
                  <Typography
                    sx={{
                      color: "#5C6272",
                      fontSize: "16px",
                      lineHeight: "28px",
                    }}
                  >
                    Plan your next travel through Dream Travel and experience an
                    easier and carefree booking to get to your next destination.
                  </Typography>
                </Grid>
              </Grid>
            </div>
            <div className="card-container">
              <Cards />
            </div>
          </Container>
        </ThemeProvider>
      </div>
    </>
  );
};

export default Info;
