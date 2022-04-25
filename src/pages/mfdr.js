import React from 'react';
import MenuBar2 from '../Menubar2';
import {styled, Grid, Box, Button} from "@material-ui/core"
import { MdLocalShipping} from 'react-icons/md';
import { FaBell} from 'react-icons/fa';
import { FaBoxOpen } from 'react-icons/fa';
import { FaShoppingCart} from 'react-icons/fa';


function Mfdr() {
  return (
    
            <div>
                  <MenuBar2/>
                  <Grid>
                    <Grid container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center">
                      <EntDet>
                            <h2>Enter Drug Details</h2>
                      </EntDet> 
                      <EntDet>
                            <h2>Enter Lot Details</h2>
                      </EntDet>
                    </Grid>
                    <Grid container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center">
                        <IconBox>
                            <Ibox>
                              <MdLocalShipping size={45}/>
                            </Ibox>
                            <Ibox>
                              <FaBoxOpen size={45}/>
                            </Ibox>
                            <Ibox>
                              <FaBell size={45}/>
                            </Ibox>
                            <Ibox>
                              <FaShoppingCart size={45}/>
                            </Ibox>
                        </IconBox>
                    </Grid>
                    
                  </Grid>
            </div>
         );
}

const EntDet = styled(Button)
({
    background: 'linear-gradient(315deg, #01224a 0%,  #033840 100% )',
    margin:'15px',
    borderRadius:'15px',
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
})

export default Mfdr;