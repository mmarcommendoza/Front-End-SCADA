import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Link from '../src/Link';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const IndexComponent = ({ state }) => {
  console.log(state);
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}><Link href="/about" color="secondary">Go to about us</Link></Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}><b>Address:</b> {state.data.address}</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}><b>Case count:</b> {state.data.pre}</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}><b>Total Daily Case Count:</b> {state.data.contador_acumulado}</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}><b>Efficiencia:</b> {state.data.eficiencia}</Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default class extends Component {
  static async getInitialProps() {
    const res = await fetch('http://localhost:3001/test-address');
    const data = await res.json();
    return data
  }

  componentWillMount() {
    this.setState({
      data: this.props
    });

    this.startTimer();
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  startTimer() {
    setInterval(async () => {
      const res = await fetch('http://localhost:3001/test-address');
      const data = await res.json();
      this.setState({
        data: data
      });
    }, 3000);
  }

  stopTimer() {
    clearInterval(this.timer)
  }

  render() {
    return (<IndexComponent state={this.state} />)
  }
}
