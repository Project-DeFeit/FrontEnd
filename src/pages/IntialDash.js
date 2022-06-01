import React from 'react';
import { FaUser } from 'react-icons/fa';
import { FaClinicMedical } from 'react-icons/fa';
import {styled, Grid, Box, Button, Typography} from "@material-ui/core"
import MenuBar from '../Menubar';
import {Link } from "react-router-dom";
import { InjectedConnector } from "@web3-react/injected-connector"
import { useWeb3React } from '@web3-react/core';

function LandPg() {
    
  return (
    
            <div>
             
                    
            <MenuBar/>
                <Grid container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center">
                        
                            <BBox>
                            <Link to="/ULogin" style={{textDecoration: 'none'}}>
                                <UserB >
                                    <FaUser size={145} />
                                    <Txt>User Login</Txt>
                                </UserB>
                            </Link>
                            <Link to="/RLogin" style={{textDecoration: 'none'}}>
                                <UserB>
                                    <FaClinicMedical size={145} />
                                    <Txt>Retail Login</Txt>
                                </UserB>
                            </Link>    
                            </BBox>
                </Grid>
                   
                </div> 
         );
}

const BBox = styled(Box)
({
    
    borderRadius:'15px',
    background: 'ivory',
    display: 'flex',
    minWidth:'350px',
    flexDirection: 'column',
    padding: '10px 10px',
    margin:'20vh 10px',
    position:'relative',
    boxShadow: '0px 7px 29px 0px rgba(100, 100, 111, 0.2)',

});

const UserB = styled(Button)({
    background: 'linear-gradient(315deg, #01224a 0%,  #033840 100% )',
    margin:'5px',
    color:'white',
    position:'relative',
    flexGrow:'1',
    width:'40vw',
    height:'180px',
    minWidth:'335px',
    display:'flex',
    flexDirection:'column'

  });
  
  const Txt= styled(Typography)
  ({
      color:'white',  
      fontFamily: 'Poppins',
      fontWeight: 500,
      letterSpacing: '0.5px',
      padding : '5px',
      fontSize:'45px',
  }); 


export default LandPg;