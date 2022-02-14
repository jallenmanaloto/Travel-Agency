import React, { useState, useContext } from "react";
import { ActiveDrawer } from "../../../../context/Drawer";
import Drawer from "@mui/material/Drawer";
import Paper from "@mui/material/Paper";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

const SearchDrawer = () => {
  //setting state for drawer display using context
  const { drawerActive, setDrawerActive } = useContext(ActiveDrawer);

  //handling close of drawer
  const handleDrawerClose = () => {
    setDrawerActive(false);
  };
  return (
    <>
      <div className="drawer-search-container">
        <Drawer anchor="bottom" open={drawerActive}>
          <Paper
            sx={{
              height: "100vh",
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
            }}
          >
            <ArrowBackIosIcon
              sx={{ mt: 5, ml: 5 }}
              onClick={handleDrawerClose}
            />
          </Paper>
        </Drawer>
      </div>
    </>
  );
};

export default SearchDrawer;
