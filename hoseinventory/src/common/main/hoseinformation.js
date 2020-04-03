import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {sizes} from '../utils/department';
import { Divider, Grid } from '@material-ui/core';

const useStyles = makeStyles( theme => ({
    card: {
        minWidth: 225
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)'
    },
    title: {
        fontSize: 14
    },
    pos: {
        marginBottom: 12
    }
}));
/*
props:
hose
*/
export default function HoseInformation(props) {
    const classes = useStyles();
    return (
            <div>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>Hose Information</Typography>
                        <Typography variant="h6" color="textPrimary" component="h2">
                            Inventory #: {props.info.inventoryNum}
                        </Typography>
                        <Typography variant="h6" component="h2">
                            Previous Location: {props.info.previous.unit}
                        </Typography>
                        <Typography variant="h6" color="textPrimary" component="h2">
                            Previous Test
                        </Typography>
                        <Typography variant="h6" color="textSecondary" component="h2">
                            Date: {props.info.test}
                        </Typography>
                        <Divider />
                        <Typography variant="h6" color="textPrimary" component="h2">
                            <Grid container
                                direction="row"
                                justify="center"
                                spacing={2}>
                                    <Grid item>
                                    Hose {props.info.hoseOK ? <div style={{color: "green"}}>   Pass</div>
                                            : <div style={{color: "red"}}>  Fail</div>}
                                    </Grid>
                                    <Grid item>
                                    Gasket {props.info.gasketOK ? <div style={{color: "green"}}>   Pass</div>
                                            : <div style={{color: "red"}}>  Fail</div>}
                                    </Grid>
                                </Grid>
                        </Typography>
                        <Divider />
                        <Typography variant="h6" color="textSecondary" component="h2">
                            Hose #: {props.info.number}
                        </Typography>
                        <Typography variant="h6" color="textSecondary" component="h2">
                            Size: {sizes.filter(s => s.value == props.info.size)[0].label}
                        </Typography>
                        <Typography variant="h6" color="textSecondary" component="h2">
                            Length: {props.info.length}
                        </Typography>
                        <Typography variant="h6" color="textSecondary" component="h2">
                            Year Manufactured: {props.info.mfgDate}
                        </Typography>
                        <Typography variant="h6" color="textSecondary" component="h2">
                            Manufactured By: {props.info.manufacturer}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
    );
}