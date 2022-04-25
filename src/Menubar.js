import React from 'react' 
import AppBar from '@material-ui/core/AppBar';
import {styled, Grid, Typography} from "@material-ui/core";



function MenuBar() 
{
    return (
            <div>
                 <Bar > 
                       <Grid container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center">
                           <Topic>
                               DeFeit
                           </Topic>
                       </Grid>    
                </Bar>
            </div>
        );
}

const Bar = styled(AppBar)
({
    
    background: '#ff0000',
    position:'sticky',
    width:'100%vw',
    top:'0px',
    
});

const Topic= styled(Typography)
({
    color:'white',
    fontFamily: 'Poppins',
    fontWeight: 500,
    letterSpacing: '0.5px',
    fontSize:'32px',
    padding : '5px'
})
export default MenuBar;