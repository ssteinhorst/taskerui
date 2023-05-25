import React from 'react';

function TaskRow({ task }) {
  return (
    <tr>
      <td>
        <input type="checkbox" checked={task.completed} />
      </td>
      <td>{task.title}</td>
      <td>{task.hasReminder ? 'Yes' : 'No'}</td>
    </tr>
  );
}

export default TaskRow;
