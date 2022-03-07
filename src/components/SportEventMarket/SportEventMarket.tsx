import React from "react";
import { Box, List, Typography } from '@mui/material';
import SportEventSelection from "../SportEventSelection/SportEventSelection";

export default function SportEventMarket(props:EventMarketProps) {

const marketsList = props.list;

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
                        <SportEventSelection list={market.selections}/>                  
                    </Box>
                ))}
            </List>
        </div>
    )
}

interface EventMarketProps {
    list : Array<[any]>;
}