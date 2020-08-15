import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function Tables() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="spanning table">
                <TableBody>

                    <TableRow>
                        <TableCell rowSpan={4} align="center">Frontend technologies</TableCell>
                        <TableCell align="center">React/Redux</TableCell>
                        <TableCell align="center"><Rating name="read-only" value="5" readOnly /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">Angular 7</TableCell>
                        <TableCell align="center"><Rating name="read-only" value="4" readOnly /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">HTML5/CSS3/Bootstrap4</TableCell>
                        <TableCell align="center"><Rating name="read-only" value="4" readOnly /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">ASP.Net MVC5</TableCell>
                        <TableCell align="center"><Rating name="read-only" value="3" readOnly /></TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell rowSpan={2} align="center">Backend technologies</TableCell>
                        <TableCell align="center">Node JS</TableCell>
                        <TableCell align="center"><Rating name="read-only" value="3" readOnly /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">Net Core</TableCell>
                        <TableCell align="center"><Rating name="read-only" value="3" readOnly /></TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell rowSpan={2} align="center">Database</TableCell>
                        <TableCell align="center">MongoDB</TableCell>
                        <TableCell align="center"><Rating name="read-only" value="3" readOnly /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">Oracle Database</TableCell>
                        <TableCell align="center"><Rating name="read-only" value="3" readOnly /></TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell rowSpan={3} align="center">Languages</TableCell>
                        <TableCell align="center">JavaScript</TableCell>
                        <TableCell align="center"><Rating name="read-only" value="3" readOnly /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">TypeScript</TableCell>
                        <TableCell align="center"><Rating name="read-only" value="3" readOnly /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">C#</TableCell>
                        <TableCell align="center"><Rating name="read-only" value="3" readOnly /></TableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </TableContainer>
    );
}
