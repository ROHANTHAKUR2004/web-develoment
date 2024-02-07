import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

export default function PostCard({authorname, image, content}) {

  

   const [isliked , setisliked] = React.useState(false);

  return (
    <Card sx={{ Width: 400 , minWidth: 250 , color: '',mb: '2rem', bgcolor:''}}>
      <CardHeader 
      
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {authorname.substring(0,1)}
          </Avatar>
        }
       
        title={authorname}
        subheader="September 14, 2016"
      />
      {(image.length > 0) ?
     ( <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Paella dish"
      />)
      : null
}
      <CardContent>
        <Typography variant="body2" color="">
         {content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites"  onClick={() => setisliked(!isliked)}>
          {
            (isliked) ?  <FavoriteIcon sx={{color: red[500]}}  /> :  <FavoriteBorderOutlinedIcon />
          }
         
         
        </IconButton>
      </CardActions>
     
    </Card>
  );
}