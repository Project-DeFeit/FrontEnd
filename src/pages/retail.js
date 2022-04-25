import React from 'react';
import MenuBar2 from '../Menubar2';
import {styled, Grid, Box, Button} from "@material-ui/core"
import { MdHistory } from 'react-icons/md';
import { MdLocalShipping} from 'react-icons/md';
import { FaShoppingCart} from 'react-icons/fa';


function Retail() {
  return (
    
            <div>
                  <MenuBar2/>
                  <Grid>
                    <Grid container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center">
                      <Sale>
                            <h1>Sale</h1>
                      </Sale> 
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
                              <MdLocalShipping size={45}/>
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

const Sale = styled(Button)
({
    background: 'linear-gradient(315deg, #01224a 0%,  #033840 100% )',
    margin:'45px',
    color:'white',
    position:'relative',
    flexGrow:'1',
    width:'70vw',
    height:'75px',
});

const IconBox = styled(Box)
({
    
    borderRadius:'15px',
    background: 'ivory',
    display: 'flex',
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

export default Retail;