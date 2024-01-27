import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import ArticleIcon from "@mui/icons-material/Article";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AddIcon from "@mui/icons-material/Add";
import { Fragment, useState } from "react";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { DateRangeOutlined } from "@mui/icons-material";
const items = [
  { icon: <HomeIcon />, name: "Homepage" },
  { icon: <ArticleIcon />, name: "Pages" },
  { icon: <PeopleIcon />, name: "Groups" },
  { icon: <StorefrontIcon />, name: "Marketplace" },
  { icon: <PersonIcon />, name: "Friends" },
  { icon: <SettingsIcon />, name: "Settings" },
  { icon: <AccountBoxIcon />, name: "Profile" },
];
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 1,
};
export default function SideBar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box sx={{}}>
      <List sx={{ position: "fixed", top: "57px", width: "222px" }}>
        {items.map((item) => {
          return (
            <ListItem key={item.name} disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Tooltip title="Add Post">
        <Fab
          onClick={handleOpen}
          sx={{ position: "fixed", left: "15px", bottom: "15px" }}
          color="primary"
          aria-label="add"
        >
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            sx={{ textAlign: "center" }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Create Post
          </Typography>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://media.istockphoto.com/id/1410538853/photo/young-man-in-the-public-park.jpg?s=612x612&w=0&k=20&c=EtRJGnNOFPJ2HniBSLWKzsL9Xf7GHinHd5y2Tx3da0E="
              />
            </ListItemAvatar>
            <ListItemText
              secondary={
                <Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                </Fragment>
              }
            />
          </ListItem>
          <TextField
            fullWidth
            id="standard-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Default Value"
            variant="standard"
          />
          <Stack direction="row">
            <IconButton>
              <InsertEmoticonIcon sx={{ color: "#1565c0" }} />
            </IconButton>
            <IconButton>
              <InsertPhotoIcon sx={{ color: "#673ab7" }} />
            </IconButton>
            <IconButton>
              <VideoCameraBackIcon sx={{ color: "#00897b" }} />
            </IconButton>
            <IconButton>
              <PersonAddIcon sx={{ color: "#ef6c00" }} />
            </IconButton>
          </Stack>
          <ButtonGroup
            sx={{ width: "100%" }}
            disableElevation
            variant="contained"
            aria-label="Disabled elevation buttons"
          >
            <Button sx={{ flexGrow: "1" }}>post</Button>
            <Button>
              <DateRangeOutlined />
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </Box>
  );
}
