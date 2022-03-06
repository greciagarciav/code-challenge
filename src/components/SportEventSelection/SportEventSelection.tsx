import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function SportEventSelection() {

    return(
        <Box 
            sx={{
                border: '1px solid grey',
                m: 1,
                textAlign: "center",
                borderRadius: '12px',
                backgroundColor: '',
                '&:active': {
                backgroundColor: 'green'
                },
            }}
            >
            <Typography component="div">
                <Box sx={{ pt: 0.5}}> Arsenal </Box>
                <Box sx={{ pt: 0.5}}> 1.2 </Box>
            </Typography>
            </Box>
    )
    
}