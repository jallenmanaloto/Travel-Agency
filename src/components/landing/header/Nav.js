import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { fontPoppins } from "../../../themes/Font";
import { ThemeProvider } from "@mui/material/styles";

const Nav = () => {
  return (
    <>
      <Grid
        container
        sx={{
          position: "absolute",
          mt: "2rem",
          zIndex: 2,
          width: "100%",
          color: "white",
        }}
        justifyContent="space-between"
      >
        <Grid item lg={3}>
          <div className="logo">
            <Typography variant="h4">Dream.</Typography>
          </div>
        </Grid>
        <Grid item lg={6} sx={{ display: "flex", justifyContent: "center" }}>
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
        <Grid item lg={3}>
          <div className="account">
            <Button
              variant="outlined"
              sx={{
                border: "2px solid rgba(119, 127, 150, 1)",
                color: "white",
                height: "100%",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "white",
                  borderColor: "white",
                  color: "#777F96",
                },
              }}
            >
              Create Account
            </Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Nav;
