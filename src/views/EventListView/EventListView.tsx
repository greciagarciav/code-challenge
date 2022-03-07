import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import SportEvent from "../../components/SportEvent/SportEvent";
import Cart from "../../components/Cart/Cart";

const EventListView = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl">
                <Cart/>
                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                     <ListItem alignItems="center"></ListItem>
                     <SportEvent/>
                </List>
            </Container>
        </React.Fragment>
    )    
}

export default EventListView;