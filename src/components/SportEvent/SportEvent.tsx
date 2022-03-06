import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import SportEventMarket from "../SportEventMarket/SportEventMarket";

export default function SportEvent() {

    return(
        <Box 
            style={{ width: '100%' }}
            sx={{border: '2px solid grey' }}>               
            <Typography component="div">
                <Box sx={{ 
                        fontWeight: 'bold', 
                        m: 1, 
                        textAlign: 'center',
                        textTransform: 'uppercase'
                        }}>
                         Real Madrid vs Barcelona
                    </Box>
            </Typography>
            <Divider />
            <SportEventMarket />           
        </Box>        
    )    
}