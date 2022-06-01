import { Grid, TextField } from "@material-ui/core";
import React, { useState } from "react";
import QRCode from "react-qr-code";

function QrGen()
{
    
        const [value1, setValue] = useState("");
        return (
            <div>
                <TextField 
                value={value1}
                onChange={(e) => setValue(e.target.value)}>

                </TextField>
                {/* <br/>
                <br/> */}
                <Grid container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center">
                 <QRCode value={value1} align="center"/>
                </Grid>
            </div>
        )
        
    
}
export default QrGen;