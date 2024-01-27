import { Box, Stack, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { Fragment } from "react";
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
];

export default function OnlineFriend() {
  return (
    <Stack  sx={{ mt: "70px" }}>
      <Box  sx={{ padding: "15px"}}>
        <Typography variant="h6">Online Friends</Typography>
        <AvatarGroup className="" max={6} sx={{ mr: 15, mt: 3 }}>
          <Avatar
            alt="Trevor Henderson"
            src="https://media.istockphoto.com/id/805012064/photo/portrait-of-mature-hispanic-man.webp?b=1&s=170667a&w=0&k=20&c=_R8OKYH8iE1AhCBBI9VkeZ3ZE-FN0NcKVRDNudyuZ9k="
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://media.istockphoto.com/id/805012064/photo/portrait-of-mature-hispanic-man.webp?b=1&s=170667a&w=0&k=20&c=_R8OKYH8iE1AhCBBI9VkeZ3ZE-FN0NcKVRDNudyuZ9k="
          />
          <Avatar
            alt="Remy Sharp"
            src="https://media.istockphoto.com/id/805012064/photo/portrait-of-mature-hispanic-man.webp?b=1&s=170667a&w=0&k=20&c=_R8OKYH8iE1AhCBBI9VkeZ3ZE-FN0NcKVRDNudyuZ9k="
          />
          <Avatar
            alt="Travis Howard"
            src="https://media.istockphoto.com/id/1083617440/photo/serene-beauty.webp?b=1&s=170667a&w=0&k=20&c=7YzEVH783b0naz0zV25LRORCPf7De8J9MYwt2u9j5w8="
          />
          <Avatar
            alt="Cindy Baker"
            src="https://media.istockphoto.com/id/1178857901/photo/street-portrait-of-smiling-senior-man.webp?b=1&s=170667a&w=0&k=20&c=vr1nrKE_ZRhOJLDYnpGdEaanyx6k_k9_gjsT6-dPQ8g="
          />
          <Avatar
            alt="Agnes Walker"
            src="https://media.istockphoto.com/id/1344040233/photo/smiling-woman-point-finger-at-you.webp?b=1&s=170667a&w=0&k=20&c=IE0Ni3hhrqQk-AGslsLmR4aZMGmHcFpZ10J5jlVg2Fw="
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://media.istockphoto.com/id/805012064/photo/portrait-of-mature-hispanic-man.webp?b=1&s=170667a&w=0&k=20&c=_R8OKYH8iE1AhCBBI9VkeZ3ZE-FN0NcKVRDNudyuZ9k="
          />
        </AvatarGroup>
      </Box>

      <Box sx={{ padding: "15px" }}>
        <Typography sx={{ pb: 3 }} variant="h6">
          Last Photo
        </Typography>
        <ImageList
          sx={{ width: 450, height: 400, borderRadius: "5px" }}
          cols={3}
          rowHeight={150}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <Box position="relative" bottom="220px">
        <Typography ml="20px" variant="h6">
          Last Conversation
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://media.istockphoto.com/id/1083617440/photo/serene-beauty.webp?b=1&s=170667a&w=0&k=20&c=7YzEVH783b0naz0zV25LRORCPf7De8J9MYwt2u9j5w8="
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
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
                  {" — I'll be in your neighborhood doing errands this…"}
                </Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https://media.istockphoto.com/id/1344040233/photo/smiling-woman-point-finger-at-you.webp?b=1&s=170667a&w=0&k=20&c=IE0Ni3hhrqQk-AGslsLmR4aZMGmHcFpZ10J5jlVg2Fw="
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://media.istockphoto.com/id/1178857901/photo/street-portrait-of-smiling-senior-man.webp?b=1&s=170667a&w=0&k=20&c=vr1nrKE_ZRhOJLDYnpGdEaanyx6k_k9_gjsT6-dPQ8g="
              />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Stack>
  );
}
