import React from 'react';
import MenuBar2 from '../Menubar2';
import QRscanner from './Qrscan';
import {styled, Grid, Box, Button,Typography} from "@material-ui/core"
import { MdHistory } from 'react-icons/md';
import { MdRedeem } from 'react-icons/md';
import { FaTablets } from 'react-icons/fa';
import {Link } from "react-router-dom";



function User() {
  return (
    
            <div>
                  <MenuBar2/>
                  <Grid>
                    <Txt><h1>WELCOME</h1></Txt>
                    <Grid container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center">
                          <Link to="/Scan">                        
                            <Scan>
                                 <h2>Scan</h2>
                            </Scan>
                       </Link>
                    </Grid>
                    <Grid container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center">
                        <IconBox>
                            <Ibox>
                              <MdHistory size={45}/>
                            </Ibox>
                            <Ibox>
                              <MdRedeem size={45}/>
                            </Ibox>
                            <Ibox>
                              <FaTablets size={45}/>
                            </Ibox>
                        </IconBox>
                    </Grid>
                    
                  </Grid>
            </div>
         );
}

const Scan = styled(Button)
({
    background: 'linear-gradient(315deg, #01224a 0%,  #033840 100% )',
    margin:'45px',
    borderRadius:'20px',
    color:'white',
    position:'relative',
    flexGrow:'1',
    width:'70vw',
    height:'75px',
});

const IconBox = styled(Box)
({
    
    borderRadius:'15px', /* added */
    background: 'ivory',
    display: 'flex',
    // height:'350px',
    width:'70vw',
    flexDirection: 'column',
    padding: '10px 10px',
    margin:'10px 10px',
    position:'relative',
    boxShadow: '0px 7px 29px 0px rgba(100, 100, 111, 0.2)',   
}
);

const Ibox= styled(Button)
({
    height: '90px',
    width: '60vw',
    borderRadius:'5px',
    padding:'10px 10px',
    margin:'2vh 5vw',
    background: 'ivory',
    position:'relative',
});

const Txt= styled(Typography)
({
  color:'black',  
  fontFamily: 'Poppins',
  fontWeight: 500,
  letterSpacing: '0.5px',
  padding : '5px'
});

export default User;