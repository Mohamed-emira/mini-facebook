import { Box, Divider, Stack } from "@mui/material";
import "./mainContent.css";
import SideBar from "./SideBar";
import Posts from "./Posts";
import OnlineFriend from "./OnlineFriend";
const showLG = { xs: "none", lg: "block" };

export default function MainContent({ showSidebar, setshowSidebar }) {
  return (
    <Stack
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
    >
      <Box
        className="myList"
        sx={{
          minWidth: "222px",
          flexGrow: "2",
          display: { xs: showSidebar, md: "block" },
        }}
      >
        <SideBar showSidebar={showSidebar} setshowSidebar={setshowSidebar} />
      </Box>
      <Box flexGrow="8">
        <Posts />
      </Box>
      <Box minWidth="512px" sx={{ display: showLG, flexGrow: "auto" }}>
        <Stack direction="column" position="fixed">
          <OnlineFriend />
        </Stack>
      </Box>
    </Stack>
  );
}
