import React, { useState } from "react";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button, Checkbox, TextField } from "@mui/material";

function AllBooks({ books, setBooks }) {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [searchText, setSearchText] = useState('');
    const [selectedBooks, setSelectedBooks] = useState([]);

    const allBooks = books?.map((book) => ({
        id: book.id,
        title: book.title,
        category: book.category.name,
        author: book.author.name,
        language: book.language,
        price: book.price
    }));

    // Filter books based on search text
    const filteredBooks = allBooks.filter((book) =>
        book.title.toLowerCase().includes(searchText.toLowerCase()) ||
        book.category.toLowerCase().includes(searchText.toLowerCase()) ||
        book.author.toLowerCase().includes(searchText.toLowerCase())
    );

    const columns = [
        { id: 'select', label: 'Select', minWidth: 50 },
        { id: 'title', label: 'Title', minWidth: 170 },
        { id: 'category', label: 'Category', minWidth: 100 },
        { id: 'author', label: 'Author', minWidth: 170 },
        { id: 'language', label: 'Language', minWidth: 100 },
        { id: 'price', label: 'Price', minWidth: 70, align: 'right', format: (value) => value.toFixed(2) },
    ];

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleSelectBook = (bookId) => {
        setSelectedBooks((prevSelected) =>
            prevSelected.includes(bookId)
                ? prevSelected.filter((id) => id !== bookId)
                : [...prevSelected, bookId]
        );
    };

    const handleAddToCart = () => {
        const selectedBookDetails = filteredBooks.filter((book) => selectedBooks.includes(book.id));
        console.log("Selected Books:", selectedBookDetails);
        // Here you can handle the selected books, like adding them to a cart or making an API call.
    };

    return (
        <div>
            <div className="container min-h-screen">
                <div className="mt-10">
                    <div className="flex justify-between">
                        <TextField
                            id="standard-multiline-flexible"
                            label="Search by name, category, author ..."
                            multiline
                            maxRows={4}
                            variant="standard"
                            value={searchText}
                            onChange={handleSearchChange}
                        />
                        <Button variant="outlined" onClick={handleAddToCart}>
                            Add to Cart
                        </Button>
                    </div>
                    <Paper className="mt-5" sx={{ width: '100%' }}>
                        <TableContainer sx={{ maxHeight: 440 }}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        {columns.map((column) => (
                                            <TableCell
                                                key={column.id}
                                                align={column.align || 'left'}
                                                style={{ fontSize: "16px", fontWeight: "800", minWidth: column.minWidth }}
                                            >
                                                {column.label}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {filteredBooks
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((row) => (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                                <TableCell padding="checkbox">
                                                    <Checkbox
                                                        checked={selectedBooks.includes(row.id)}
                                                        onChange={() => handleSelectBook(row.id)}
                                                    />
                                                </TableCell>
                                                {columns.slice(1).map((column) => { // Skip the first column since it's the checkbox
                                                    const value = row[column.id];
                                                    return (
                                                        <TableCell key={column.id} align={column.align || 'left'}>
                                                            {column.format && typeof value === 'number'
                                                                ? column.format(value)
                                                                : value}
                                                        </TableCell>
                                                    );
                                                })}
                                            </TableRow>
                                        ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={filteredBooks.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>
                </div>
            </div>
        </div>
    );
}

export default AllBooks;