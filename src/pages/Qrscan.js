import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import {styled,Grid,Button, Typography} from "@material-ui/core"
 
class QRscanner extends Component {
  state = {
    result: 'No result',
    verify: 'Not Verified'
  }
 
  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      })
    }
  }
  handleError = err => {
    console.error(err)
  }

  render() {
    return (
      <div>
       
        <Grid container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center">
                           <QrReader
                            delay={300}
                            onError={this.handleError}
                            onScan={this.handleScan}
                            style={{ width: '25vw'}}
                           />
                           <p>{this.state.result}</p>
                          <B variant="outlined" onClick={()=>{ alert('Verifed');}}><h2><T>Check Status</T></h2></B>
                        </Grid>
                        {/* //<a>href={this.state.result}</a> */}
        
      </div>
    )
  }
}
const B= styled(Button)
({
    height: '90px',
    borderRadius:'25px',
    padding:'10px 10px',
    margin:'1vh 5vw',
    borderWidth:'2px',
    position:'relative',
    background:'linear-gradient(315deg, #01224a 0%,  #033840 100% )',
});
const T= styled(Typography)
({
  color:'white',  
  fontFamily: 'Poppins',
  fontWeight: 500,
  letterSpacing: '0.5px',
  fontSize:'32px',
  padding : '5px'
});
export default QRscanner;