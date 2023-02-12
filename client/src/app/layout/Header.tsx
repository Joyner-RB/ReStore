import { AppBar, Box, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import SimpleBadge from "./badge";

interface Props {
    darkMode: boolean;
    handlethemechange: () => void;
}
const midLinks = [
        {title: 'catalog', path:'/catalog'},
        {title: 'about', path:'/about'},
        {title: 'contact', path:'/contact'}
]

const rightLinks = [
    {title: 'login', path:'/login'},
    {title: 'register', path:'/register'},
]
const navStyles = {
    color: 'inherit',
    typography: 'h6',
    '&:hover': {
        color:'grey.500'
    },
    '&.active':{
        color:'text.secondary'
    },
    textDecoration: 'none'
}
export default function Header({darkMode, handlethemechange}: Props){
    return (
    <>
        <AppBar position="static" sx={{ mb: 4 }}>
                <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems:'center'}}>
                    <Box display='flex' alignItems='center'>
                     <Typography variant="h6" 
                            component={NavLink} exact to='/'
                            sx={navStyles}>
                             RE-STORE
                            </Typography>
                        <Switch  checked={darkMode} onChange={handlethemechange}/>
                    </Box>


                    <List sx={{display:'flex'}}>
                    {midLinks.map(({title, path})=> (
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={navStyles}
                            >
                                {title.toLocaleUpperCase()}
                            </ListItem>
                        ))}
                    </List>     
                    
                    <Box display='flex' alignItems='center'>
                    <IconButton size="large" sx={{color: 'inherit'}}>
                        <SimpleBadge/>
                    </IconButton>
                    <List sx={{display:'flex'}}>
                    {rightLinks.map(({title, path})=> (
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={navStyles}
                                activeClassName='active'
                            >
                                {title.toLocaleUpperCase()}
                            </ListItem>
                        ))}
                    </List>   
                    </Box>


                </Toolbar>

            </AppBar></>
    )
}