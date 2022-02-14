import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { ThemeProvider } from "@mui/material/styles";
import { fontInter } from "../../../themes/Font";

const UnstyledInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    border: "1px solid #FFFFFF",
    fontSize: "1.1rem",
    fontWeight: "bold",
    color: "#5E5C68",
    width: "100%",
  },
}));

const Search = () => {
  const [guest, setGuest] = useState("2 Person");

  const handleGuestInput = (e) => {
    setGuest(e.target.value);
  };
  return (
    <div className="form-wrapper">
      <ThemeProvider theme={fontInter}>
        <div className="form-container">
          <Grid container justifyContent="center" spacing={3}>
            <Grid item sm={7} lg={10}>
              <div className="field-container">
                <SearchRoundedIcon
                  sx={{ ml: "34px", color: "#AFAEB4", fontSize: "1.8rem" }}
                />
                <Divider
                  orientation="vertical"
                  sx={{ ml: "0.5rem", height: "1.2rem", color: "#E5E5E5" }}
                />
                <UnstyledInput
                  placeholder="Search destination"
                  id="destination-search"
                  sx={{ ml: "0.2rem" }}
                />
                <Divider
                  orientation="vertical"
                  sx={{ height: "27px", color: "#E5E5E5" }}
                />
                <FmdGoodOutlinedIcon
                  sx={{ ml: "27px", color: "#AFAEB4", fontSize: "1.8rem" }}
                />
                <UnstyledInput
                  placeholder="C. Location"
                  id="location"
                  sx={{ ml: "0.8rem", width: "18%" }}
                />
                <Divider
                  orientation="vertical"
                  sx={{
                    ml: { sm: 2, md: 2 },
                    height: "27px",
                    color: "#E5E5E5",
                  }}
                />
                <Select
                  value={guest}
                  input={<UnstyledInput />}
                  sx={{ width: "20%", ml: "27px" }}
                  label="2 Person"
                  onChange={handleGuestInput}
                >
                  <MenuItem value="1 Person">1 Person</MenuItem>
                  <MenuItem value="2 Person">2 Person</MenuItem>
                  <MenuItem value="3 Person">3 Person</MenuItem>
                </Select>
              </div>
            </Grid>
            <Grid item sm={2} lg={2}>
              <Button
                sx={{
                  width: "152px",
                  height: "100%",
                  backgroundColor: "#34A5E4",
                  fontSize: "1.1rem",
                  textTransform: "none",
                }}
                variant="contained"
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default Search;
