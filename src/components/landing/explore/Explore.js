import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Places from "./Places";
import MobileButton from "./mobile/MobileButton";

const Explore = () => {
  return (
    <>
      <div className="explore-container" style={{ paddingBottom: "76px" }}>
        <Container maxWidth="xl">
          <Grid container>
            <Grid item lg={12}>
              <Typography
                sx={{
                  mt: 15,
                  ml: { xs: 5, sm: 10 },
                  letterSpacing: "0.4rem",
                  color: "#4141A5",
                  //   fontWeight: "bold",
                  fontSize: "24px",
                }}
              >
                POPULAR
              </Typography>
            </Grid>
          </Grid>
          <div className="explore-summary">
            <Grid container>
              <Grid item sm={12} md={6} lg={5}>
                <Typography
                  variant="h3"
                  sx={{
                    ml: { xs: 5, sm: 10 },
                    fontSize: "40px",
                    fontWeight: "bold",
                    width: "415px",
                    color: "#292929",
                  }}
                >
                  Explore all corners of the world with us.
                </Typography>
              </Grid>
              <Grid item sm={12} md={6} lg={7}>
                <Typography
                  sx={{
                    ml: { xs: 5, sm: 10 },
                    width: "472px",
                    color: "#5C6272",
                    fontSize: "16px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                  repudiandae voluptatum, dolores sequi totam perferendis
                  repellendus, nostrum, nesciunt atque unde illo ea enim?
                </Typography>
              </Grid>
            </Grid>
          </div>
          <Places />
          <MobileButton />
        </Container>
      </div>
    </>
  );
};

export default Explore;
