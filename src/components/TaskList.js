import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import AxiosSvc from '../services/AxiosSvc';
import { Box, Container, Typography } from '@mui/material';
import TaskRow from './TaskRow';
import TaskForm from './TaskForm';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from the API
    AxiosSvc
      .get('/tasks')
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Container maxWidth="md">
      <Box my={3}>
        <Typography variant="h4" align="center" gutterBottom>
          Task List
        </Typography>
        {/* Info Bar */}
        {/* Display logged in user and task count, along with a logout button */}
      </Box>
      <Box my={3}>
        {/* Task Rows */}
        {tasks.map((task) => (
          <TaskRow key={task.id} task={task} />
        ))}
      </Box>
      <Box my={3}>
        {/* Task Form */}
        <TaskForm />
      </Box>
    </Container>
  );
}

export default TaskList;
