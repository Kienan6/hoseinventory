import React from 'react';
import { Grid} from '@material-ui/core';
import HoseForm from './hoseForm';
import HoseInformation from './hoseinformation';
/*
props:
onChange
onSubmit
onAuto
expanded
hose
info
*/
export default function FormPage(props) {
    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
            spacing={2}>
            <Grid item>
                <HoseForm
                    hose={props.hose}
                    onAuto={props.onAuto}
                    onSubmit={props.onSubmit}
                    onChange={props.onChange}
                    onExpand={props.onExpand}
                    expanded={props.expanded}
                />
            </Grid>
            <Grid item>
                <HoseInformation 
                    info={props.info}
                />
            </Grid>
        </Grid>
    );
}