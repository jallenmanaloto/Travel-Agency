import React from "react";
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

const Buttons = () => {
  const classes = useStyle();
  return (
    <div>
      <Button
        className={classes.navigation}
        variant="contained"
        sx={{
          mr: "10px",
          ml: { sm: 10, md: 10 },
          display: { xs: "none", sm: "inline-block" },
        }}
      >
        <ArrowBackIcon />
      </Button>
      <Button
        className={classes.navigation}
        variant="contained"
        sx={{ ml: "10px", display: { xs: "none", sm: "inline-block" } }}
      >
        <ArrowForwardIcon />
      </Button>
    </div>
  );
};

export default Buttons;
