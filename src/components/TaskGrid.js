import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'title',
    headerName: 'Title',
    width: 150,
    editable: true,
  },
  {
    field: 'notes',
    headerName: 'Notes',
    width: 150,
    editable: true,
  },
  {
    field: 'expirationDate',
    headerName: 'Alarm',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'isComplete',
    headerName: 'Finished',
    type: 'boolean',
    width: 50,
    editable: true,
  },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];

const rows = [
  { id: 1, title: 'Snow', description: 'Jon', expirationDate: 35, isComplete: false },
  { id: 2, title: 'Lannister', description: 'Cersei', expirationDate: 42, isComplete: false },
  { id: 3, title: 'Lannister', description: 'Jaime', expirationDate: 45, isComplete: false },
  { id: 4, title: 'Stark', description: 'Arya', expirationDate: 16, isComplete: false },
  { id: 5, title: 'Targaryen', description: 'Daenerys', expirationDate: null, isComplete: false },
  { id: 6, title: 'Melisandre', description: null, expirationDate: 150, isComplete: false },
  { id: 7, title: 'Clifford', description: 'Ferrara', expirationDate: 44, isComplete: false },
  { id: 8, title: 'Frances', description: 'Rossini', expirationDate: 36, isComplete: false },
  { id: 9, title: 'Roxie', description: 'Harvey', expirationDate: 65, isComplete: false },
];

export default function DataGridDemo() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}