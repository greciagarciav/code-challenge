import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import SportEvent from "../../components/SportEvent/SportEvent";

const EventListView = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl">
                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                     <ListItem alignItems="center"></ListItem>
                     <SportEvent/>
                </List>
            </Container>
        </React.Fragment>
    )    
}

export default EventListView;