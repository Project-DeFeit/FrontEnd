import React from 'react';
import {styled, Grid, Box, Button, TextField, Typography} from "@material-ui/core"
import MenuBar from '../Menubar';
import {Link } from "react-router-dom";

function Login() {
  return (
    
            <div>
              <MenuBar/>
              <Txt><h1>User Login</h1></Txt>
                  <Grid container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center">
                    <LBox>
                      <Grid container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"> 
                         <form >
                             <Grid>
                                 <Uid required
                                 label="Email"
                                 type="username"
                                 variant="filled"/>
                             </Grid>
                             <Grid>
                                <Pwd required
                                 label="Password"
                                 type="password"
                                 variant="filled"/>

                             </Grid>
                             
                             <Grid container
                                spacing={0}
                                direction="column"
                                alignItems="center"
                                justifyContent="center">
                                <Link to="/Udash">
                                  <Submit><Btxt>Submit</Btxt></Submit>
                                </Link>
                                <Link to="/CUser">
                                  <NewUser variant="outlined"><Btxt>Create Account</Btxt></NewUser>
                                </Link>
                                
                             </Grid>
                         </form>
                        </Grid>
                    </LBox>
                  </Grid>
            
            </div>
         );
}

const LBox = styled(Box)
({
    
    borderRadius:'15px',
    background: 'ivory',
    display: 'flex',
    minWidth:'350px',
    flexDirection: 'column',
    padding: '10px 10px',
    margin:'150px 10px',
    position:'relative',
    boxShadow: '0px 7px 29px 0px rgba(100, 100, 111, 0.2)',

});

const Submit = styled(Button)({
    background: 'linear-gradient(315deg, #01224a 0%,  #033840 100% )',
    margin:'5px',
    color:'white',
    position:'relative',
    flexGrow:'1',
    width:'40vw',
    display:'flex',
    flexDirection:'column',
    minWidth:'250px',

  });
  

const Uid = styled(TextField)({
    background:'white',
    width:'50vw',
    minWidth:'300px',
    margin:'1vw',
    borderColor:'black'
  });

const Pwd = styled(TextField)({
    background:'white',
    margin:'1vw',
    minWidth:'300px',
    width:'50vw',
    borderColor:'black'
   

});

const Txt= styled(Typography)
({
    color:'black',  
    fontFamily: 'Poppins',
    fontWeight: 500,
    letterSpacing: '0.5px',
    padding : '5px'
}); 

const NewUser = styled(Button)({
  borderColor: '#01214F',
  borderWidth:'5px',
  margin:'10px',
  display:'flex',
  flexDirection:'column',
  position:'relative',
  width:'40vw',
  minWidth:'250px',

});



const Btxt= styled(Typography)
({
    color:'primary',  
    fontFamily: 'Poppins',
    fontWeight: 750,
    letterSpacing: '0.5px',
    fontSize:'20px',
    padding : '5px',
   
}); 

export default Login;