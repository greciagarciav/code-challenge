import React from "react";
import {CssBaseline, Container, List, ListItem  } from '@mui/material';
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
                     <SportEvent />
                </List>
            </Container>
        </React.Fragment>
    )    
}

export default EventListView;