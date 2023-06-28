import React from 'react'
import { Box, Panel, Typography } from '@mui/material'

const PanelComponent = ({ title, children }) => {
    return (
      <Panel>
        <Typography variant="h5" sx={{ marginBottom: '10px' }}>{title}</Typography>
        <Box>{children}</Box>
      </Panel>
    );
  };

export default PanelComponent;