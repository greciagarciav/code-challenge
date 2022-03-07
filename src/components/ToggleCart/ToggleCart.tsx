import React from 'react';
import { Box, Button, Card, CardActions, CardContent, Divider, Drawer, List, Typography } from '@mui/material';

type Anchor = 'right';

export default function ToggleCart() {
  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{alignItems: 'center' }}>
        {[{
						"id": "SEL_1",
						"name": "Real Madrid",
						"price": 1.23
					}, {
						"id": "ddddEL_23",
						"name": "Real Madrid",
						"price": 1.23
					},].map((item) => (
          <Card key={item.id} sx={{ minWidth: 275, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <CardContent key={item.id}> 
              <Typography variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2">
                {item.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Delete</Button>
            </CardActions>
            <Divider variant="middle" />
        </Card>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {(['right'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}