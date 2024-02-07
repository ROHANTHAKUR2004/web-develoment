import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';
function Inputs(){

   const [posttext , setposttext] = useState("");
   const [imageurl , setimageurl] = useState("");

   function createpost(){

      
         axios.post("https://dummyapi.io/data/v1/post/create",
         {
            owner: '65b86885fa96a729703fbab7',
            text : posttext,
            image : imageurl,
            likes : 0,
            publishDate : new Date()
         },

     {headers : {'app-id': '65b864a7eebaefa60a127e7b'}
     
     }).then(response =>{
 
         console.log(response.data)
     })
   


   }
  
   return (


<Box sx={{bgcolor:"white", padding:"1rem" , margin:".5rem",  mb:"1rem"}}>
<TextField  sx={{mr:"3rem"}} value={posttext}  onChange={(e)=> setposttext(e.target.value)} label="New posts...." variant="filled" color="success" focused />
<TextField label="posts images.."value={imageurl} onChange={(e)=> setimageurl(e.target.value)} variant="filled" color="success" focused />
<br />
<Button sx={{mt:"1rem"}}   margin="2rem" variant="contained" onClick={createpost}>
   Submit</Button>
</Box>


   )
}

export default Inputs;