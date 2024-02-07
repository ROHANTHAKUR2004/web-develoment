import { useEffect, useState } from "react"
import PostCard from "./PostCard"
import axios from "axios";




function Postcardlist(){

const [posts, setposts]  = useState([]);
useEffect(() =>{

   axios.get("https://dummyapi.io/data/v1/post?app-id=65b712cd4c0451256bbe503f",
        {headers : {'app-id': '65b79418c1788ff3577fb0b5'}
    }).then(response =>{

       const responseobject = response.data;
       setposts([...responseobject.data]);
    })

},[]);


     return (
      
         posts.map((post) => <PostCard 
            
            authorname={post.owner.firstName}  
            image={post.image}
            content={post.text}
            key={post.id} 
           />)
           
         
)

}

export default Postcardlist