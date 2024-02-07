import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Userlist() {
    const [users , setUsers] = React.useState([]);
    React.useEffect(() =>{
        axios.get("https://dummyapi.io/data/v1/user?app-id=65b712cd4c0451256bbe503f",
    {headers : {'app-id': '65b79418c1788ff3577fb0b5'}
    
    }).then(response =>{

       const responseobject = response.data;
       setUsers([...responseobject.data]);

    })
    }, []);



  return (
    <List dense sx={{  width: '100%', maxWidth: 360, color: 'white' }}>
      {users.map((user) => {
        const labelId = `checkbox-list-secondary-label-${user.id}`;
        return (
          <ListItem
          sx={{mb:"1rem" , bgcolor:"black"}}
            key={user.id}
            //disablePadding
          >
            <Link className='links' to={'/user'}>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${user.firstName}`}
                  src={user.picture}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={user.firstName + "" + user.lastName} />
            </ListItemButton>
            </Link>
          </ListItem>
        );
      })}
    </List>
  );
}