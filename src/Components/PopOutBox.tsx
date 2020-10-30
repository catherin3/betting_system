import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import RegisterForm from './RegisterForm'


export default function Register() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


    
  return (
    <div>
      <Button  style={{color:'white'}} onClick={handleClickOpen}>
        Register
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Login/Register</DialogTitle>
        <DialogContent>
          <DialogContentText style={{color:'black'}}>
            Welcome to new Betting Place
          </DialogContentText>
          <RegisterForm/>
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
