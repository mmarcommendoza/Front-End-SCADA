import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../src/style/theme';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import css from "../src/style/styles.scss";

class MyApp extends App {
    componentDidMount() {
        // Remove the server-side injected CSS.
        // const jssStyles = document.querySelector('#jss-server-side');
        // if (jssStyles) {
        //   jssStyles.parentNode.removeChild(jssStyles);
        // }
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <Container>
                <Head>
                    <title>Raspberry PLC</title>
                </Head>
                <ThemeProvider theme={theme}>
                    <meta
                        name="viewport"
                        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                    />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                    <div style={{ flexGrow: 1 }}>
                        <Grid container spacing={10}>
                            <Grid item xs={12}>
                                <AppBar position="fixed" >
                                    <Toolbar style={{margin: 'auto'}}>
                                        Raspberry PLC UI
                                    </Toolbar>
                                </AppBar>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{ flexGrow: 1 }}>
                        <Grid container spacing={10}>
                            <Grid item xs={12}>
                                <Container maxWidth="lg">
                                    <Box m={4}>
                                        <Component {...pageProps} />
                                        </Box>
                                </Container>
                                
                            </Grid>
                        </Grid>
                    </div>

                </ThemeProvider>

            </Container>
        );
    }
}

export default MyApp;