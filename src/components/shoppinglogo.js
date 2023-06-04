import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import zIndex from '@mui/material/styles/zIndex';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    zIndex:'0px'
  
  },
}));

export default function CustomizedBadges() {

  const show = useSelector((state)=> state.cart.showCart)

    const cartnum = useSelector((state)=>state.cart.totalQuantity)
  
  return (
    <IconButton aria-label="cart" >
      
      <StyledBadge badgeContent={cartnum} className='z-0' color="secondary">
        <ShoppingCartIcon className=' text-[white]' />
      </StyledBadge>
    </IconButton>
  );
}