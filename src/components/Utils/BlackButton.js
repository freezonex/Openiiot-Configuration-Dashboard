import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const BlackButton = styled(Button)(({ theme }) => ({
  backgroundColor: "black",
  color: "white",
  "&:hover": {
    backgroundColor: "darkgray",
  },
}));
