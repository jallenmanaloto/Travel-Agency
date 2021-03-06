import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { fontPoppins, fontInter } from "../../../themes/Font";
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
          display: { xs: "none", sm: "flex" },
        }}
        justifyContent="space-between"
      >
        <Grid item sm={2} md={3} lg={3}>
          <div className="logo">
            <Typography variant="h4">Dream.</Typography>
          </div>
        </Grid>
        <Grid
          item
          sm={8}
          md={6}
          lg={6}
          sx={{ display: { xs: "none", sm: "flex" }, justifyContent: "center" }}
        >
          <ThemeProvider theme={fontPoppins}>
            <div className="links">
              <Typography
                variant="h5"
                sx={{
                  pl: 3,
                  pr: 3,
                  fontSize: { sm: "0.9rem", lg: "1.15rem" },
                  cursor: "pointer",
                }}
              >
                Find a trip
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  pl: 3,
                  pr: 3,
                  fontSize: { sm: "0.9rem", lg: "1.15rem" },
                  cursor: "pointer",
                }}
              >
                Destinations
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  pl: 3,
                  pr: 3,
                  fontSize: { sm: "0.9rem", lg: "1.15rem" },
                  cursor: "pointer",
                }}
              >
                Contact us
              </Typography>
            </div>
          </ThemeProvider>
        </Grid>
        <Grid item xs={6} sm={2} md={3} lg={3}>
          <div className="account">
            <ThemeProvider theme={fontInter}>
              <Button
                variant="outlined"
                sx={{
                  border: "2px solid rgba(119, 127, 150, 1)",
                  color: "white",
                  height: "100%",
                  width: "152px",
                  fontWeight: "bold",
                  fontSize: "14px",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "white",
                    borderColor: "white",
                    color: "#777F96",
                  },
                }}
              >
                Create Account
              </Button>
            </ThemeProvider>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Nav;
