import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Explore = () => {
  return (
    <>
      <div className="explore-container">
        <Container maxWidth="xl">
          <Grid container>
            <Grid item lg={12}>
              <Typography
                sx={{
                  mt: 15,
                  ml: 10,
                  letterSpacing: "0.4rem",
                  color: "#4141A5",
                  //   fontWeight: "bold",
                  fontSize: "24px",
                }}
              >
                POPULAR
              </Typography>
            </Grid>
            <Grid item>
              <div className="explore-summary">
                <Typography
                  variant="h3"
                  sx={{
                    ml: 10,
                    fontSize: "40px",
                    fontWeight: "bold",
                    width: "415px",
                    color: "#292929",
                  }}
                >
                  Explore all corners of the world with us.
                </Typography>
                <Typography
                  sx={{
                    ml: "171px",
                    width: "472px",
                    color: "#5C6272",
                    fontSize: "16px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                  repudiandae voluptatum, dolores sequi totam perferendis
                  repellendus, nostrum, nesciunt atque unde illo ea enim?
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Explore;
