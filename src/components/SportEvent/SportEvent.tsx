import React from "react";
import {Box, Divider, List, Typography} from '@mui/material';
import SportEventMarket from "../SportEventMarket/SportEventMarket";

export default function SportEvent(props:EventListProps) {

    const listEvents = props.list;

    return(
        <div style={{ width: '100%' }}>
            <List sx={{alignItems: 'center' }}>
                {listEvents.map((event) => (
                    <Box key={event.id}
                    style={{ width: '100%' }}
                    sx={{border: '2px solid grey', mb: 2 }}>               
                    <Typography component="div">
                        <Box sx={{ 
                                fontWeight: 'bold', 
                                m: 1, 
                                textAlign: 'center',
                                textTransform: 'uppercase'
                                }}>
                                {event.name}
                            </Box>
                    </Typography>
                    <Divider />
                    <SportEventMarket list={event.markets} />           
                </Box>  
                ))}
            </List>
        </div>

              
    )    
}

interface EventListProps{
    list : Array<[any]>;
}