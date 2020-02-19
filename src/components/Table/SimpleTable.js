import React, {useState} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Grid} from '@material-ui/core'
import {TablePagination} from '@material-ui/core'
import _, { get } from 'lodash'

const StyledTableCell = withStyles(theme => ({
  root:{
    
    borderBottom: '1px solid #DBDBDB',
    // '&:nth-of-type(odd)': {
    //   borderLeft: '17px solid #4949F0',
    // }
  },
  head: {
    backgroundColor: theme.palette.common.white,
    color: '#919191',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '24px',
    textAlign: 'center',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  body: {
    color: '#43425D',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '24px',
    textAlign: 'center'
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    // '&:nth-of-type(odd)': {
    //   backgroundColor: theme.palette.background.default,
    //   borderBottom: '10px solid #DBDBDB',
    //   borderLeft: '10px solid #4949F0'
    // },
    borderBottom: '10px solid #DBDBDB'
  },
}))(TableRow);

const StyledPagination = withStyles( theme => ({
  root:{
    borderRadius: '8px'
  },
  toolbar: {
    backgroundColor: '#ffffff'
  },
  caption: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '20px',
    color: '#43425D'
  },
  select:{
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '20px',
    color: '#43425D'
  },
  menuItem:{
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '20px',
    color: '#43425D'
  }
}))(TablePagination)


const useStyles = makeStyles({
  table: {
    minWidth: 700,
    
  },
  tableContainer:{
    background: '#FFFFFF',
    boxShadow: '0px 6px 40px rgba(0, 0, 0, 0.07)',
    borderRadius: '8px',
    height: 700,
  },
  styledPaper: {
    background: '#FFFFFF',
    boxShadow: '0px 6px 40px rgba(0, 0, 0, 0.07)',
    borderRadius: '8px',
  }
});

export default function ModTables(props) {
    console.log('in mod table ------------')
    console.log(props)
  const { columns, data } = props
  const classes = useStyles();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Grid container>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>

        </Grid>
        <Grid item xs={10} sm={10} md={10} lg={10} xl={10} style={{marginTop: '32px'}}>
          <Paper className={classes.styledPaper}>
            <TableContainer component={Paper} className={classes.tableContainer}>
                <Table className={classes.table} stickyHeader aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        {
                            columns.map( (slice, index) => {
                                
                                return(
                                    <StyledTableCell>{slice.name}</StyledTableCell>
                                )
                            })
                        }
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map( (row, index) => (
                        <StyledTableRow key={row.name}>
                            {
                                columns.map((slice, index)=>{
                                    return(
                                    slice.data === true ? <StyledTableCell align="right">{_.get(row, slice.field, '')}</StyledTableCell> : <StyledTableCell align="right">{slice.actionComponent}</StyledTableCell>
                                    )
                                })
                            }
                        </StyledTableRow>
                        
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <StyledPagination
                  rowsPerPageOptions={[10, 25, 100]}
                  component="div"
                  count={data.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
        </Grid>
    </Grid>
  );
}