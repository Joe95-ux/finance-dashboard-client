import { Box } from "@mui/material";
import { styled } from "@mui/system";

const DashboardBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.light,
  borderRadius: "4px",
  boxShadow: "0.10rem 0.1rem 0.15rem 0.15rem rgba(0, 0, 0, .4)",
}));

export default DashboardBox;