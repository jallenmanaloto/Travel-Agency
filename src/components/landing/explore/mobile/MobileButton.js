import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  navigation: {
    "&:hover": {
      backgroundColor: "rgba(235, 235, 235, 0.5)",
    },
    height: "61px",
    width: "61px",
    borderRadius: "50%",
    color: "#152137",
    backgroundColor: "#FFFFFF",
  },
});

const MobileButton = () => {
  const classes = useStyle();
  return (
    <div className="mobile-explore-button">
      <Button
        className={classes.navigation}
        variant="contained"
        sx={{
          mt: 5,
          mr: "10px",
          ml: 23,
          display: { xs: "inline", sm: "none" },
        }}
      >
        <ArrowBackIcon sx={{ mt: 1, mr: 0.5 }} />
      </Button>
      <Button
        className={classes.navigation}
        variant="contained"
        sx={{ mt: 5, ml: "10px", display: { xs: "inline", sm: "none" } }}
      >
        <ArrowForwardIcon sx={{ mt: 1, mr: 0.5 }} />
      </Button>
    </div>
  );
};

export default MobileButton;
