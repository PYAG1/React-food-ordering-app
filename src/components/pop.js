import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { UseLog } from '../utility';
import { useSelector } from 'react-redux';

export default function SimplePopper() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const toggle= useSelector((state)=> state.cart.showCart)

  

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const move = useNavigate()

  const {getOrderData,logout} = UseLog()


  const check= toggle === true;





  return (
    <div>
      <button aria-describedby={id} type="button" onClick={handleClick}>
      <FaUserCircle className='text-[1.7em] md:text-[1.8em] text-[white] '/>
      </button>
      <Popper id={id} open={open} anchorEl={anchorEl} >
       {!check && (<Box sx={{ border: 1, p: 1, bgcolor: 'background.paper',width:'80px', marginLeft:'10px' }}>
            <div className=' flex flex-col font-[Oswald]'>
          <Link to='/history'
          onClick={getOrderData}
          >History</Link>

<Link onClick={logout}>Logout</Link>


          </div>
        </Box>)}
      </Popper>
    </div>
  );
}