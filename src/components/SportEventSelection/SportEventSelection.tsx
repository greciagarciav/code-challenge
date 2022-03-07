import React from "react";
import {
  Box,
  Card,
  CardContent,
  List,
  Typography,
} from "@mui/material";

export default function SportEventSelection(props:EventSelectionProps) {
  const selectionList = props.list;

  return (
    <div style={{ width: "100%" }}>
      <List sx={{
                display: "grid",
                gridTemplateColumns: `repeat(${selectionList.length}, 1fr)`,
                mx: 1,
                alignItems: "center"
              }} >
        {selectionList.map((selection) => (
            <Card  key={selection.id}>
                <CardContent
                 
                  sx={{
                    border: "1px solid grey",
                    m: 1,
                    textAlign: "center",
                    borderRadius: "12px",
                    backgroundColor: "",
                    "&:active": {
                      backgroundColor: "green",
                    },
                  }}
                >
                  <Typography component="div">
                    <Box sx={{ pt: 0.5 }}>
                    {selection.name} 
                    </Box>
                  </Typography>
                  <Typography component="div">
                    <Box sx={{ pt: 0.5 }}> {selection.price} </Box>
                  </Typography>
                </CardContent>
            </Card>
        ))}
      </List>
    </div>
  );
}

interface EventSelectionProps {
    list : Array<[any]>;
}
