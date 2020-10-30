import React from 'react'
import { makeStyles, AppBar, Toolbar, Typography, Button, TextField } from '@material-ui/core';
import MaterialTable from 'material-table'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        textAlign: 'center'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function LandingPage() {
    const classes = useStyles();
    const data= [{date: '30 October 2020'},
                  {number: ''}  
                ]
    const column = [{title: 'Date', field: 'date'},
                    {title: 'Number', field: 'number'}
                ]


    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ alignItems: 'flex-end' }}>
                <Toolbar>
                    <Button color="inherit" >Login</Button>
                    <Typography>/</Typography>
                    <Button color="inherit" >Register</Button>
                </Toolbar>
            </AppBar>
            <TextField label="Countdown Timer" variant="outlined" style={{ margin: 20 }} />
            <MaterialTable
                columns={column}
                data={data}
                title="Demo Title"
            />
        </div>
    );
}
export default LandingPage
