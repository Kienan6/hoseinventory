import React, {useState} from 'react';
import { Paper, Box, makeStyles,Typography, Grid } from '@material-ui/core';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import 'typeface-roboto';

const useStyles = makeStyles(theme => ({
	container: {
        maxWidth: 225,
    },
    headingGreater: {
        color: "#ffffff",
        backgroundColor: "#66d17f",
        width: "100%",
        padding: 10,
    },
    headingLess: {
        color: "#ffffff",
        backgroundColor: "#de5454",
        width: "100%",
        padding: 10,
    },
    information: {
        padding: 10,
    }
}));

export default function ProgressWidget(props) {
        const classes = useStyles();
        const [progress, setProgress] = useState(0);
        return (
            <Box style={{padding: 10}}>
                <Paper className={classes.container}>
                    <Grid container
                        direction="column"
                        justify="flex-start"
                        alignItems="flex-start">
                        <Grid item
                            className={ props.percentage >= 50 ? classes.headingGreater : classes.headingLess}>
                                <Grid container
                                direction="row"
                                justify="space-between"
                                alignItems="center"
                                style={{width: "100%"}}>
                                    <Grid item>
                                    <Typography
                                    variant="subtitle1" style={{opacity: 0.75}}>
                                        { props.loading ? "Loading..." : props.for}
                                    </Typography>
                                        
                                    <Typography 
                                    align="center" 
                                    variant="h5">
                                        <strong>{ props.percentage }</strong>%
                                    </Typography>
                                    </Grid>

                                    <Grid item
                                    style={{width: "25%", marginRight: "10%"}}>
                                            <CircularProgressbar 
                                            strokeWidth={14}
                                            styles={buildStyles({
                                                strokeLinecap: 'butt',
                                                pathTransitionDuration: 1,
                                                pathColor: `#5095b5`,
                                                textColor: '#f88',
                                                trailColor: '#e3f0ff',
                                              })}
                                            value={props.percentage} />

                                    </Grid>
                                </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        );
}