import React from "react";
import {Box, Divider, List, Typography} from '@mui/material';
import SportEventMarket from "../SportEventMarket/SportEventMarket";

export default function SportEvent() {

    const listEvents = [{
		"id": "EVT_1",
		"name": "Real Madrid vs Barcelona",
		"markets": []
	},
	{
		"id": "EVT_2",
		"name": "Atletico Madrid vs Malaga",
		"markets": []
	},
	{
		"id": "EVT_3",
		"name": "Empty Event that shouldn't render",
		"markets": []
	}]

    return(
        <div style={{ width: '100%' }}>
            <List sx={{alignItems: 'center' }}>
                {listEvents.map((event) => (
                    <Box 
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
                    <SportEventMarket />           
                </Box>  
                ))}
            </List>
        </div>

              
    )    
}