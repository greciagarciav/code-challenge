import React from "react";
import { Box, List, Typography } from '@mui/material';
import SportEventSelection from "../SportEventSelection/SportEventSelection";

export default function SportEventMarket() {

const marketsList = [
    {
        "id": "MKT_1",
        "name": "Team to Win",
        "selections": []
    },
    {
        "id": "MKT_2",
        "name": "Player to Score First",
        "selections": []
    }]

    return(     
        <div style={{ width: '100%' }}>
            <List sx={{alignItems: 'center' }}>
                {marketsList.map((market) => (
                    <Box key={market.id}>
                        <Typography component="div">
                            <Box sx={{ mx:2 }}>
                                {market.name}
                            </Box>
                        </Typography>
                        <SportEventSelection />                  
                    </Box>
                ))}
            </List>
        </div>
    )
}