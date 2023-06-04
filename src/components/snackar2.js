import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import { IconButton } from '@mui/material';
import {AiOutlineClose} from 'react-icons/ai'

export default function PositionedSnackbar({value, setshow,text}) {
  const [state, setState] = React.useState({
    
    vertical: 'top',
    horizontal: 'center',
  });
 
  const { vertical, horizontal } = state;




  const handleClose = () => {
    setState({ ...state });
    setshow(false)



  };

  

  const action = (
    <div className=' text-white'>
    <React.Fragment>
     
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <AiOutlineClose size={20} className='text-white' />
      </IconButton>
    </React.Fragment>
    </div>
  );



  return (
    <div>
     
      <Snackbar
     
        anchorOrigin={{ vertical, horizontal }}
        open={value}
        onClose={handleClose} 
        autoHideDuration={2200}
        key={vertical + horizontal}
        action={action}
    
       
     

      >
        <p className='w-full md:min-w-[210px] rounded-[10px] p-3 text-white bg-[#081226] text-[Archivo]'>{text}</p>
        </Snackbar>
    </div>
  );
}
