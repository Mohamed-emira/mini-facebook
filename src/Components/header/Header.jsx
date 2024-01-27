import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useState } from "react";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Badge, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ColorModeContext } from "../Theme";
import { useContext } from "react";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { useTheme } from "@emotion/react";
export default function Header({showSidebar,setshowSidebar}) {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>

          <IconButton
           onClick={() => {
            showSidebar === "none" ? setshowSidebar("block") : setshowSidebar("none");
          }}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 ,display:{sm:'block',md:'none',lg:'none'}}}
          >
            <MenuIcon />
          </IconButton>

          <Typography sx={{ ml: {xs:0,md:2,lg:2},fontSize:{xs:'14px'} }} variant="h6" component="div">
            mini facebook
          </Typography>
<Box sx={{display:{xs:'none',sm:'none',md:'block',lg:'block'}}}>
          <Paper
            component="form"
            sx={{
              p: "",
              display: "flex",
              alignItems: "center",
              width: 300,
              ml: 6,
            }}
          >
            <InputBase
              sx={{ ml: 2, flex: 1 }}
              placeholder="Search"
              inputProps={{ "aria-label": "search" }}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
          </Box>
          <Box flexGrow="1"></Box>
          <div>
            {theme.palette.mode === "light" ? (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <LightModeOutlinedIcon
                  sx={{ fontSize: "18px", color: "#fff" }}
                />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <DarkModeOutlinedIcon
                  sx={{ fontSize: "20px", color: "#fff" }}
                />
              </IconButton>
            )}
          </div>

          <IconButton
            size='medium'
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton
            size="medium"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
