import React, {useEffect, useState} from "react";
import {CssBaseline, Container, List, ListItem  } from '@mui/material';
import SportEvent from "../../components/SportEvent/SportEvent";
import Cart from "../../components/Cart/Cart";
import axios from "axios"
import {urlList} from "../../endpoints";

const EventListView = () => {

    const [results, setResults] = useState([]);

   
  useEffect(() => {
    getResults();
  }, [])

  const getResults = async () => {
    const response = await axios.get(urlList);
    setResults(response.data)
  }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl">
                <Cart/>
                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                     <ListItem alignItems="center"></ListItem>
                     
                     <SportEvent list={results} />
                </List>
            </Container>
        </React.Fragment>
    )    
}

export default EventListView;