import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function SimplePopper() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const move = useNavigate()

  return (
    <div>
      <button aria-describedby={id} type="button" onClick={handleClick}>
      <FaUserCircle className='text-[1.7em] md:text-[1.8em] text-[white]'/>
      </button>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper',width:'80px', marginLeft:'10px' }}>
            <div>
          <Link to='/history'>History</Link>

          </div>
        </Box>
      </Popper>
    </div>
  );
}