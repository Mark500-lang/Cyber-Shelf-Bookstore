import React, { useState, useEffect } from "react";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

function AllBooks({ books, setBooks }){
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [searchText, setSearchText] = useState('');

    const allBooks = books?.map((book) => ({
        id: book.id,
        title: book.title,
        category: book.category.name,
        author: book.author.name,
        language: book.language,
        price: book.price
      }));

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        // <Paper sx={{ width: '100%' }}>
        // <TableContainer sx={{ maxHeight: 440 }}>
        //     <Table stickyHeader aria-label="sticky table">
        //     <TableHead>
        //         <TableRow>
        //         <TableCell align="center" colSpan={2}>
        //             Country
        //         </TableCell>
        //         <TableCell align="center" colSpan={3}>
        //             Details
        //         </TableCell>
        //         </TableRow>
        //         <TableRow>
        //         {columns.map((column) => (
        //             <TableCell
        //             key={column.id}
        //             align={column.align}
        //             style={{ top: 57, minWidth: column.minWidth }}
        //             >
        //             {column.label}
        //             </TableCell>
        //         ))}
        //         </TableRow>
        //     </TableHead>
        //     <TableBody>
        //         {rows
        //         .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        //         .map((row) => {
        //             return (
        //             <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
        //                 {columns.map((column) => {
        //                 const value = row[column.id];
        //                 return (
        //                     <TableCell key={column.id} align={column.align}>
        //                     {column.format && typeof value === 'number'
        //                         ? column.format(value)
        //                         : value}
        //                     </TableCell>
        //                 );
        //                 })}
        //             </TableRow>
        //             );
        //         })}
        //     </TableBody>
        //     </Table>
        // </TableContainer>
        // <TablePagination
        //     rowsPerPageOptions={[10, 25, 100]}
        //     component="div"
        //     count={rows.length}
        //     rowsPerPage={rowsPerPage}
        //     page={page}
        //     onPageChange={handleChangePage}
        //     onRowsPerPageChange={handleChangeRowsPerPage}
        // />
        // </Paper>
        <></>
    );
}

export default AllBooks;