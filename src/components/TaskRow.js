// // import React from 'react';
// // import { Box, Checkbox, Typography } from '@mui/material';

// // function TaskRow({ task }) {
// //   const { id, title, description, expirationDate, isComplete } = task;

// //   return (
// //     <Box display="flex" alignItems="center" mb={1}>
// //       <Checkbox checked={isComplete} />
// //       <Box flexGrow={1} ml={1}>
// //         <Typography variant="body1">{title}</Typography>
// //         <Typography variant="caption">
// //           {expirationDate ? `Expires on: ${expirationDate}` : 'No expiration'}
// //         </Typography>
// //       </Box>
// //     </Box>
// //   );
// // }

// // export default TaskRow;
// import React from 'react';




// function TaskRow({ task }) {
//   const isExpired = new Date(task.expirationDate) < new Date();

//   const formattedExpirationDate = new Date(task.expirationDate).toLocaleString('en-US', {
//     year: 'numeric',
//     month: '2-digit',
//     day: '2-digit',
//     hour: '2-digit',
//     minute: '2-digit'
//   });

//   return (
//     <Grid container spacing={2} sx={{ flexGrow: 1 }}>
//   <Grid xs={12}>
//     {/* <Item>{task.title}</Item> */}
//   </Grid>
//   {/* <Grid xs={4}>
//     <Item>xs=4</Item>
//   </Grid>
//   <Grid xs={4}>
//     <Item>xs=4</Item>
//   </Grid>
//   <Grid xs={8}>
//     <Item>xs=8</Item>
//   </Grid> */}

//     <tr style={{ color: isExpired ? 'red' : 'inherit' }}>
//       <td>
//         <input type="checkbox" checked={task.isComplete} />
//       </td>
//       <td>{task.title}</td>
//       <td>{formattedExpirationDate}</td>
//     </tr>
//     </Grid>
//   );
// }

// export default TaskRow;
import React from 'react';
import { TableRow, TableCell } from '@mui/material';

function TaskRow({ task }) {
  const { id, title, expiration } = task;

  const isExpired = new Date(expiration) < new Date();

  return (
    <TableRow>
      <TableCell>
        <input type="checkbox" />
      </TableCell>
      <TableCell>{title}</TableCell>
      <TableCell style={{ color: isExpired ? 'red' : 'inherit' }}>{new Date(expiration).toLocaleString()}</TableCell>
    </TableRow>
  );
}

export default TaskRow;
