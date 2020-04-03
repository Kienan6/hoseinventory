import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Loader from 'react-loader-spinner';
import TablePagination from '@material-ui/core/TablePagination';
import { Fade, TableFooter, IconButton, Toolbar, Typography, makeStyles, Button, withStyles} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {sizes} from '../utils/department';


const useStyles = makeStyles(theme => ({
    toolbar: {
        backgroundColor: "#fafafa",
        minHeight: 100,
    },
    heading: {
        marginLeft: 0,
    }
}));
const AddNewButton = withStyles(theme => ({
    root: {
        padding: "0 30px",
        flexGrow: "100%",
        marginTop: 10,
        borderRadius: 3,
        boxShadow: '0px 2px 3px rgba(0,0,0,.20)',
        backgroundColor: 'rgb(102, 209, 127)',
        color: 'rgb(43, 170, 102)',
        color: 'white',
        height: 40,
        "&:hover": {
            backgroundColor: 'rgb(43, 170, 102)',
        }
    },
})) (Button);
export default function Information(props) {

    //inventory number, hose number, size, length, yearmfg, 
    //previous location, current location, test date,
    //pass/fail gasket and hose, description of fail
    //manufacturer
    //important
    //inventory number, size, length, prev/cur, test date,pass fail,desc

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const classes = useStyles();
    //pagination options
    const handleChangePage = (e, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = e => {
        setRowsPerPage(e.target.value);
        setPage(0);
    };
    if(props.loading){
        return (
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center">
                <Grid item>
                <Loader type="ThreeDots" color="#7cd996" height={150} width={150}/>
                </Grid>
            </Grid>
    );
    } else {
        return (
            <Fade in timeout={1200}>
            <Paper className={classes.toolbar}>
                <Toolbar className={classes.toolbar}>
                    <Grid container
                        direction="column"
                        justify="space-between">
                        <Grid item>
                        <Typography className={classes.heading} variant="h6" id="table-title">
                            Hoses
                        </Typography>
                        </Grid>
                        <Grid item>
                            <AddNewButton onClick={props.onAdd}> Add New </AddNewButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            <TableContainer elevation={0}   style={{marginTop: 10, maxHeight: 650}} component={Paper}>
            <Table stickyHeader aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Actions</TableCell>
                            <TableCell align="left">Inventory #</TableCell>
                            <TableCell align="left">Size</TableCell>
                            <TableCell align="left">Length</TableCell>
                            <TableCell align="left">Location</TableCell>
                            <TableCell align="left">Date Tested</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.data.slice(page * rowsPerPage, page*rowsPerPage + rowsPerPage)
                        .map((row,index) => (
                            <TableRow hover key={index}>
                                <TableCell 
                                padding='none' 
                                style={{width: 100}}>
                                    <IconButton aria-label="edit" color="primary" onClick={(e) => props.onEdit(e, (index+(rowsPerPage*page)))}>
                                        <EditIcon fontSize='small' />
                                    </IconButton>
                                    <IconButton aria-label="delete" style={{ color: "#c24f4f"}} onClick={(e) => props.onDelete(e, (index+(rowsPerPage*page)))}>
                                        <DeleteIcon fontSize='small' />
                                    </IconButton>
                                </TableCell>
                                <TableCell component="th" scope="row">{row.inventoryNum}</TableCell>
                                <TableCell align="left">{sizes.filter(size => size.value == row.size)[0].label}</TableCell>
                                <TableCell align="left">{row.length}</TableCell>
                                <TableCell align="left">{row.curLoc.unit}</TableCell>
                                <TableCell align="left">{row.dateTest}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>             
            </Table>
            </TableContainer>
            <TablePagination
                        rowsPerPageOptions={[10, 20, 30]}
                        component="div"
                        count={props.data.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
            />
            </Paper>
            </Fade>
        );
    }
}