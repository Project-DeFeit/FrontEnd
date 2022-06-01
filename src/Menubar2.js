import React from 'react' 
import AppBar from '@material-ui/core/AppBar';
import {styled, Grid,Button, Typography, Box} from "@material-ui/core";
import { MdOutlineMenu } from 'react-icons/md';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Link } from "react-router-dom";


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
                       <Grid container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center">
                
                           <TBox>
                           <Topic>
                               DeFeit
                           </Topic>
                           </TBox>
                           
                       </Grid>   
                       
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
    position:'relative',
    // left:'43vw',//issues
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