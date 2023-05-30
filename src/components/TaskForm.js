import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
// import axios from 'axios';
import AxiosSvc from '../services/AxiosSvc';

function TaskForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [expirationDate, setExpirationDate] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleExpirationDateChange = (event) => {
    setExpirationDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new task object and save it
    const newTask = {
      title,
      description,
      expirationDate,
      isComplete: false,
    };

    // Call the API endpoint to save the new task
    AxiosSvc.post('/api/tasks', newTask).then((response) => {
      // Handle success or display a success message
    });

    // Reset the form values
    setTitle('');
    setDescription('');
    setExpirationDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" alignItems="center">
        <TextField
          label="Title"
          variant="outlined"
          value={title}
          onChange={handleTitleChange}
          required
        />
        <TextField
          label="Description"
          variant="outlined"
          value={description}
          onChange={handleDescriptionChange}
        />
        <TextField
          label="Expiration Date"
          variant="outlined"
          value={expirationDate}
          onChange={handleExpirationDateChange}
        />
        <Button type="submit" variant="contained" color="primary">
          Add Task
        </Button>
      </Box>
    </form>
  );
}

export default TaskForm;
