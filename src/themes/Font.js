import { createTheme } from "@mui/material/styles";

export const fontPoppins = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});

export const fontInter = createTheme({
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
  },
});
