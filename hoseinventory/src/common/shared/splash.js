import React from 'react';
import Loader from 'react-loader-spinner';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
export default function Splash(props) {
    return (
        <Container>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={2}
                style={{
                minHeight: "100vh"
            }}>
                <Loader type="RevolvingDot" color="#3573c4" height={200} width={200}/>
            </Grid>
        </Container>
    );
}