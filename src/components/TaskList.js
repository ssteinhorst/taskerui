import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskRow from './TaskRow';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  TextField,
  Button,
  Box,
} from '@mui/material';
import { DatePicker } from '@mui/lab';
import data from '../data.json';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    expirationDate: null,
  });

  useEffect(() => {
    // Fetch tasks from the API
    setTasks(data);
    // axios
    //   .get('/api/tasks')
    //   .then(response => {
    //     setTasks(response.data);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
  }, []);

  const handleNewTaskChange = event => {
    setNewTask(prevTask => ({
      ...prevTask,
      [event.target.name]: event.target.value,
    }));
  };

  const handleExpirationDateChange = date => {
    setNewTask(prevTask => ({
      ...prevTask,
      expirationDate: date,
    }));
  };

  const handleAddTask = () => {
    // Add new task to the API
    axios
      .post('/api/tasks', newTask)
      .then(response => {
        const createdTask = response.data;
        setTasks(prevTasks => [...prevTasks, createdTask]);
        setNewTask({ title: '', description: '', expirationDate: null });
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <Typography variant="h2">Task List</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Checkbox</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Expiration</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map(task => (
            <TaskRow key={task.id} task={task} />
          ))}
        </TableBody>
      </Table>
      <Box mt={4}>
        <Typography variant="h3">Add New Task</Typography>
        <TextField
          label="Task Title"
          name="title"
          value={newTask.title}
          onChange={handleNewTaskChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Description"
          name="description"
          value={newTask.description}
          onChange={handleNewTaskChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <DatePicker
          label="Expiration Date"
          value={newTask.expirationDate}
          onChange={handleExpirationDateChange}
          renderInput={params => <TextField {...params} />}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <Button variant="contained" color="primary" onClick={handleAddTask}>
          Add Task
        </Button>
      </Box>
    </div>
  );
}

export default TaskList;
