import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { fontPoppins } from "../../../themes/Font";
import { ThemeProvider } from "@mui/material/styles";

const Partners = () => {
  return (
    <div className="partners-wrapper">
      <Container maxWidth="xl">
        <ThemeProvider theme={fontPoppins}>
          <Grid container justifyContent="center">
            <Grid item lg={12}>
              <Typography
                variant="h4"
                sx={{
                  mt: "76px",
                  fontSize: "45px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Our Tour Partners
              </Typography>
            </Grid>
            <Grid item lg={6}>
              <Typography
                variant="h6"
                sx={{
                  mt: "16px",
                  lineHeight: "117%",
                  fontWeight: 400,
                  fontSize: "16px",
                  color: "rgba(92, 98, 114, 1)",
                  textAlign: "center",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                magni animi accusamus aperiam minus modi suscipit.
              </Typography>
            </Grid>
          </Grid>
          <Grid contaier justifyContent="center">
            <Grid item lg={12}>
              <div className="partner-container">
                <Grid container item justifyContent="center" spacing={5}>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <img
                      className="partner-logo"
                      src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Amadeus_%28CRS%29_Logo.svg"
                      alt="amadeus-logo"
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <img
                      style={{ height: "2.3em" }}
                      src="https://upload.wikimedia.org/wikipedia/commons/b/be/Booking.com_logo.svg"
                      alt="bookingcom-logo"
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <img
                      style={{ height: "2.5em" }}
                      src="https://upload.wikimedia.org/wikipedia/commons/9/95/Trivago.svg"
                      alt="bookingcom-logo"
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <img
                      style={{ height: "2.5em" }}
                      src="https://upload.wikimedia.org/wikipedia/commons/9/94/Skyscanner_Logo_LockupHorizontal_SkyBlue_RGB.svg"
                      alt="bookingcom-logo"
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <img
                      className="partner-logo"
                      src="https://upload.wikimedia.org/wikipedia/commons/8/83/Cheapflights_logo.svg"
                      alt="bookingcom-logo"
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <img
                      className="partner-logo"
                      src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Momondo-logo.png"
                      alt="bookingcom-logo"
                    />
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </ThemeProvider>
      </Container>
    </div>
  );
};

export default Partners;
