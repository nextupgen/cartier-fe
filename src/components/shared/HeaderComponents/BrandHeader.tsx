import { Grid } from "@mui/material";
import CartierLogo from "../../../assets/Cartier_logo.svg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
const BrandHeader = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      {/* TODO: Add react-router-dom */}
      <Grid item>
        <div className="leftMenu">
          <Grid container spacing={3}>
            <Grid item>United State</Grid>
            <Grid item>Contact Us</Grid>
            <Grid item>Services</Grid>
          </Grid>
        </div>
      </Grid>
      <Grid item>
        <img src={CartierLogo} alt="logo" width={160} height={45} />
      </Grid>
      <Grid item>
        <div className="rightMenu">
          <Grid container spacing={0.5}>
            <Grid item>
              <FavoriteBorderIcon />
            </Grid>
            <Grid item>
              <PermIdentityIcon />
            </Grid>
            <Grid item>
              <FmdGoodOutlinedIcon />
            </Grid>
            <Grid item>
              <ShoppingBagOutlinedIcon />
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
};
export default BrandHeader;
