import React, { useContext } from "react";
import { ActiveDrawer } from "../../../../context/Drawer";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const MobileSearch = () => {
  //setting state for active drawer through context
  const { setDrawerActive } = useContext(ActiveDrawer);

  const handleDrawer = () => {
    setDrawerActive(true);
  };
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item xs={11} sx={{ display: { xs: "block", sm: "none" } }}>
          <div className="mobile-search-bar" onClick={handleDrawer}>
            <SearchRoundedIcon sx={{ color: "#34A5E4" }} />
            <Typography
              variant="h6"
              sx={{ color: "#474747", fontSize: "1rem", ml: 1 }}
            >
              Search Destination
            </Typography>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default MobileSearch;
