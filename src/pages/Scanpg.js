import React from 'react';
import MenuBar2 from '../Menubar2';
import {styled, Grid, Box, Typography} from "@material-ui/core";
import QRscanner from './Qrscan';


function Scan() {
  
  return (
    
            <div>
                  <MenuBar2/>
                  <Grid>
                    <Grid container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center">
                          <Txt><h1>Drug Scan</h1></Txt>   
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
    top:'10px',
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

export default Scan;