import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SportEventSelection from "../SportEventSelection/SportEventSelection";

export default function SportEventMarket() {

    return(
        <div style={{ width: '100%' }}>
            <Typography component="div">
                <Box sx={{ mx:2 }}>
                    To WIN
                </Box>
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', mx:1 }}>
                <SportEventSelection />
                <SportEventSelection />
                <SportEventSelection />
            </Box>
        </div>
    )
}