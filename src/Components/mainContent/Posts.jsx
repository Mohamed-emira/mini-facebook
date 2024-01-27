import { Box, Checkbox, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const myPosts = [
  {
    title: "Mohamed Hassan",
    img: "https://media.istockphoto.com/id/1632117936/photo/happy-thanksgiving-day-greeting-card-calligraphy-text-with-fall-pumpkins-squash-cozy-warm.webp?b=1&s=170667a&w=0&k=20&c=PxteXGb_FuDa3hqAJzpAClasw9S-C9M9TXjFiiyZGGI=",
    Avatar: "M",
  },
  {
    title: "Ahmed Emira",
    img: "https://media.istockphoto.com/id/1678330314/photo/brown-christmas-gift-box-with-a-blank-tag-on-rustic-wooden-table.webp?b=1&s=170667a&w=0&k=20&c=oBjZ5hI9MgcQkQboH-su7jIk6QeH2TEgoAG1JR0daoI=",
    Avatar: "A",
  },
  {
    title: "Wlaa dsar",
    img: "https://images.unsplash.com/photo-1548413935-a7d015ff5865?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D",
    Avatar: "W",
  },
  {
    title: "Esraa Diaa",
    img: "https://images.unsplash.com/photo-1548506923-99f6e89852fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjB8fHxlbnwwfHx8fHw%3D",
    Avatar: "E",
  },
  {
    title: "Basma Fadi",
    img: "https://images.unsplash.com/photo-1548567117-02328f050eaa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fHw%3D",
    Avatar: "B",
  },
  {
    title: "Mostafa Ali",
    img: "https://images.unsplash.com/photo-1548506923-99f6e89852fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjB8fHxlbnwwfHx8fHw%3D",
    Avatar: "M",
  },
  {
    title: "Ola Ali",
    img: "https://images.unsplash.com/photo-1547628641-ec2098bb5812?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D",
    Avatar: "O",
  },
  {
    title: "Tarek Ghaly",
    img: "https://images.unsplash.com/photo-1547626740-02cb6aed9ef8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fHw%3D",
    Avatar: "T",
  },
];

export default function Posts() {
  return (
    <Stack sx={{mt:5}}>
      {myPosts.map((item) => {
        return (
          <Card key={item} sx={{ maxWidth: {xs: "97%", sm: 444}, mx: "auto", my: 5 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  {item.Avatar}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={item.title}
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="194"
              image={item.img}
              alt="Paella dish"
            />

            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
                <Checkbox
                  {...label}
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite sx={{ color: "red" }} />}
                />
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <Box flexGrow={1} />
              <Checkbox
                {...label}
                icon={<BookmarkBorderIcon />}
                checkedIcon={<BookmarkIcon />}
              />
            </CardActions>
          </Card>
        );
      })}
    </Stack>
  );
}
