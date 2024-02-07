import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
//import PostCard from './PostCard';
import Postcardlist from './PostCardList';
import Userlist from './Userlist';


export default function Maincontainer() {
  return (
    <Box container sx={{ width: '100%' , mt: '3rem'   }}>
      <Grid 
            container
            justifyContent={"center"} 
            alignItems={"start"}
            rowSpacing={1} 
            columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
        <Grid >
           <Userlist/>
        </Grid>
        <Grid   
                  container
                 justifyContent={"center"} 
                 direction={"column"}  
                 alignItems={"center"} 
                  md={8}>


                    
       <Postcardlist />


        </Grid>
        
      </Grid>
    </Box>
  );
}