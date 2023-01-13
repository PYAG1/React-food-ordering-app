import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../store/cartslice';

export default function SimpleSnackbar() {

//to show snack bar
  const openn = useSelector((state)=> state.cart.showSnack)

  const dispatch = useDispatch()

  const setopen = ()=>{
    dispatch(cartActions.close())
  }



  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;

    }
    setopen()
  };

  const opencart = ()=>{
    dispatch(cartActions.togglestae())
    dispatch(cartActions.close())
  }

  const action = (
    <React.Fragment>
      <Button color="primary" size="small" onClick={opencart}>
        View
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      
      <Snackbar
        open={openn}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Item added to Cart"
        action={action}
      />
    </div>
  );
}