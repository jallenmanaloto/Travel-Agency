import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";

const UnstyledInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    border: "1px solid #FFFFFF",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#5E5C68",
    width: "100%",
  },
}));

const Search = () => {
  return (
    <div className="form-wrapper">
      <div className="form-container">
        <div className="field-container">
          <UnstyledInput
            placeholder="Search destination"
            id="destination-search"
          />
        </div>

        <Button
          sx={{ width: "152px", backgroundColor: "#34A5E4" }}
          variant="contained"
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default Search;
