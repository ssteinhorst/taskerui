import React from 'react';
import { Box, Checkbox, Typography } from '@mui/material';

function TaskRow({ task }) {
  const { id, title, description, expirationDate, isComplete } = task;

  return (
    <Box display="flex" alignItems="center" mb={1}>
      <Checkbox checked={isComplete} />
      <Box flexGrow={1} ml={1}>
        <Typography variant="body1">{title}</Typography>
        <Typography variant="caption">
          {expirationDate ? `Expires on: ${expirationDate}` : 'No expiration'}
        </Typography>
      </Box>
    </Box>
  );
}

export default TaskRow;
