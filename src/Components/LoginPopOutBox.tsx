import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import LoginPage from './LoginPage'
import FormControl from '@material-ui/core/FormControl';

export default function Register() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const useStyles = makeStyles(() =>
        createStyles({

            formControl: {
                minWidth: 400,
                minHeight: 230
            },

        }),
    );
    const classes = useStyles();

    return (
        <div>
            <Button style={{ color: 'white' }} onClick={handleClickOpen}>
                Login
      </Button>
            <Dialog maxWidth='lg' open={open} onClose={handleClose} aria-labelledby="max-width-dialog-title">
                <DialogTitle id="max-width-dialog-title">Login</DialogTitle>
                <DialogContent>
                    <DialogContentText style={{ color: 'black' }}>
                        Welcome to new Betting Place
          </DialogContentText>
                    <FormControl className={classes.formControl}>
                        <LoginPage />
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleClose} color="primary">
                        Login
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
