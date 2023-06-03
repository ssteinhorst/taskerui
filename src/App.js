import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import TaskList from './components/TaskList';
import TaskGrid from './components/TaskGrid';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/grid" element={<TaskGrid />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

