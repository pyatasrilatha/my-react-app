import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import MediaCard from '../Header/Mediacard';
import Grid from '@material-ui/core/Grid';
import corona2 from './corona2.jpeg';
import corona3 from './need_help.png';
import corona4 from './Testcenter.jpeg';
import corona5 from './tax.jpg';
import metrics from './performance-metrics.jpg';
import corona6 from './benefits.jpg'
import Pdf from './coronvavirushelplinenumber.pdf';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    // backgroundcolor: skyblue,
    // color: grey,
    color: theme.palette.text.secondary,
  },
}));


export default function Home() {
  const classes = useStyles();
  const handlechange = () => {
    console.log('hello');
  }
  return (
    <div className={classes.root}>
      <Form inline>
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Select State
        </Dropdown.Toggle>

            <Dropdown.Menu onSelect = {handlechange}>
                <Dropdown.Item href="#/action-1">Telangana</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Andhra Pradesh</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Delhi</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Bengalore</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </Form><br/>
      <div class="float-left"><strong>Covid Related Alerts</strong></div><br/>
      <Grid container spacing={3}>
      <Grid item xs>
          <MediaCard img = {corona2} link= "/source" title= "COVID-19" 
          description="Live statistics and coronavirus news tracking the number of confirmed cases,tests, and death toll due to the COVID-19 accross world"
          />
        </Grid>
        <Grid item xs>
          <MediaCard img = {corona3} link= {Pdf} title= "CALL FOR HELP??"
          description="Responding to COVID-19 211 provides a 24/7 helpline that is connected to a prepared team, capable of providing updated information."/>
        </Grid>
        <Grid item xs>
          <MediaCard img = {corona4} title= "Test Centres Information!!"
          link = "https://www.news18.com/covid-testing-centres/"
          description="What Will You Do If You see corona symptoms? Where should I be going to the hospital or an emergency room for COVID-19?"/>
        </Grid>
      </Grid>
      <br/><div class="float-left"><strong>Government Offered Benefits</strong></div><br/>
      {/* {this.state.isActive &&  */}
      <Grid container spacing={3}>
        <Grid item xs>
          <MediaCard img = {corona5}  title = "Govt Covid Tax Updates"
          description="On 31 March 2020, the President promulgated the Taxation and Other Laws (Relaxation of Certain Provisions) Ordinance, 2020"
          link="https://home.kpmg/xx/en/home/insights/2020/04/india-tax-developments-in-response-to-covid-19.html"/>
        </Grid>
        <Grid item xs>
          <MediaCard img = {corona6} title = "State Benefits during COVID"
          description="With state governments imposing mandatory closure of non-essential businesses to help slow the spread of the novel coronavirus (COVID-19),"/>
        </Grid>
        <Grid item xs>
          <MediaCard img = {metrics} title = "Govt Benefits during covid-19"
          link="https://home.kpmg/xx/en/home/insights/2020/04/india-government-and-institution-measures-in-response-to-covid.html"
          description = "March 26: INR 1.7 trillion relief package announced by the Finance Minister.Government of India announced the 24 March 2020..."/>
        </Grid>
      </Grid>
    </div>
  );
}
