import React from 'react';
import {styled, Grid, Box, Button, TextField, Typography} from "@material-ui/core"
import MenuBar from '../Menubar';
import { useState } from "react";

function CreateUser() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("../data/udata.json", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          mobileNumber: mobileNumber,
          password: password,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setEmail("");
        setMobileNumber("");
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };


  return (
    
            <div>
              <MenuBar/>
              <Txt><h1>Create New User</h1></Txt>
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
                         <form onSubmit={handleSubmit} >
                             <Grid>
                                 <Uid required
                                 label="Name"
                                 type="username"
                                 variant="filled"
                                 value={name}
                                 onChange={(e) => setName(e.target.value)}/>
                             </Grid>
                             <Grid>
                                 <Uid required
                                 label="Email"
                                 type="username"
                                 variant="filled"
                                 value={email}
                                 onChange={(e) => setEmail(e.target.value)}/>
                             </Grid>
                             <Grid>
                                 <Uid required
                                 label="Phone No"
                                 type="username"
                                 variant="filled"
                                 value={mobileNumber}
                                 onChange={(e) => setMobileNumber(e.target.value)}/>
                             </Grid>
                             <Grid>
                                <Pwd required
                                 label="Password"
                                 type="password"
                                 variant="filled"
                                 value={password}
                                 onChange={(e) => setPassword(e.target.value)}/>
                             </Grid>
                             {/* <Grid>
                                <Pwd required
                                 label="Confirm Password"
                                 type="password"
                                 variant="filled"/>
                             </Grid> */}
                             
                             <Grid container
                                spacing={0}
                                direction="column"
                                alignItems="center"
                                justifyContent="center">
                                <Submit><Btxt>Submit</Btxt></Submit>
                                
                             </Grid>
                         </form>
                        </Grid>
                    </LBox>
                  </Grid>
                  <div className="message">{message ? <p>{message}</p> : null}</div>

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
    minWidth:'150px',

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

const Btxt= styled(Typography)
({
    color:'primary',  
    fontFamily: 'Poppins',
    fontWeight: 750,
    letterSpacing: '0.5px',
    fontSize:'20px',
    padding : '5px',
   
}); 

export default CreateUser;