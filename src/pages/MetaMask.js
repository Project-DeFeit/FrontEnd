import React from 'react';
import MenuBar3 from '../Menubar3';
import {styled, Grid, Box, Typography} from "@material-ui/core";
import QRscanner from './Qrscan';

function Metamask() {
  return (
    
            <div>
                  <MenuBar3/>
                  <Grid>
                    <Grid container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center">
                          <Txt><h1>Connect to wallet</h1></Txt>   
                        <Cam>
                            <Grid >
                                <QRscanner/>
                            </Grid>
                         
                        </Cam>    
                    </Grid>
                  </Grid>
            </div>
         );
}




const Cam = styled(Box)
({
    
    borderRadius:'15px',
    background: 'ivory',
    top:'100px',
    display: 'flex',
    minHeight:'300px',
    minWidth:'250px',
    flexDirection: 'column',
    padding: '15px 15px',
    margin:'10px 10px',
    position:'relative',
    boxShadow: '0px 7px 29px 0px rgba(100, 100, 111, 0.2)',   
}
);

const Txt= styled(Typography)
({
  color:'black',  
  fontFamily: 'Poppins',
  fontWeight: 500,
  letterSpacing: '0.5px',
  padding : '5px'
});

export default Metamask;