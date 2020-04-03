import React from 'react';
import { Grid, Paper, Typography, Divider } from '@material-ui/core';

export default function Guide(props) {
    return (
        <div>
            <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="center">
                    <Grid item
                        style={{height: "100%", width:"200px", color: "#292929"}}>
                                <Typography variant="h5" style={{textAlign: "center"}}>
                                    Hose Inventory
                                </Typography>
                                <Divider/>
                                <p style={{textAlign: "left", padding: 5, color: "#212121", fontSize: "18px"}}>
                                This project allows fire departments to test and keep track of hoses on their units.
                                </p>
                                <Typography variant="h6" style={{textAlign:"center"}}>
                                    Credentials
                                </Typography>
                                <Divider />
                                <Typography variant="h6" style={{textAlign:"left", marginTop:10}}>
                                    Username: admin
                                    Password: password
                                </Typography>
                    </Grid>
                </Grid>
        </div>
    )
}