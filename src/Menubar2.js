import React from 'react' 
import AppBar from '@material-ui/core/AppBar';
import {styled, Grid,Button, Typography, Box} from "@material-ui/core";
import { MdOutlineMenu } from 'react-icons/md';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


function MenuBar2() 
{
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
            <div>
                 <Bar > 
                       <Grid>
                           <TBox>
                           <Topic>
                               DeFeit
                           </Topic>
                           </TBox>
                           <MenuButton onClick={handleClick}
                            sx={{ ml: 2 }}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}>
                               <MdOutlineMenu size={55}/>
                        </MenuButton>
                       </Grid>   
                       <Menu
                            anchorEl={anchorEl}
                            id="account-menu"
                            open={open}
                            onClose={handleClose}
                            onClick={handleClose}
                            PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                                },
                                '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                                },
                            },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                                <MenuItem>
                                   Profile
                                </MenuItem>
                                <MenuItem>
                                   Settings
                                </MenuItem>
                                <MenuItem>
                                   Logout
                                </MenuItem>
    
                        </Menu>
                       
                </Bar>
            </div>
        );
}

const Bar = styled(AppBar)
({
    
    background: '#ff0000',
    position:'sticky',
    width:'100% vw',
    top:'0px',
    minHeight:'70px'
    
});

const Topic= styled(Typography)
({
    color:'white',
    position:'absolute',
    left:'43vw',//issues
    fontFamily: 'Poppins',
    // align:'center',
    fontWeight: 500,
    letterSpacing: '0.5px',
    fontSize:'32px',
    padding : '5px'
})
const MenuButton = styled(Button)({
    background: '#ff0000',
    margin:'5px',
    top: '1.25vh',
    right:'1vh',
    color:'white',
    position:'absolute',
    flexGrow:'1',
    width:'35px',
    height:'35px'
  });
  const TBox = styled(Box)
  ({
      
     margin:'1vh 35vw', 
  }
  );

export default MenuBar2;