import React from 'react';
// import './ApiCall.css';
// import './Source.css';
import Grid from '@material-ui/core/Grid';
import FlightCard from './FlightCard';

export default class Flights extends React.Component {
  constructor() {
    super();
    this.state = {
      flights: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.callCovidApi();
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  callCovidApi() {
    console.log('Calling Api');
    // Fetching data from FaceBook Jest Repo
    // const key = 'da328055e2e940d8b28055e2e9e0d851';
    fetch(
      `https://api.spaceXdata.com/v3/launches?limit=100`,
      {
        method: 'GET',
        headers: new Headers({
          accept: 'application/json',
        }),
      }
    )
      .then((res) => res.json())
      .then((response) =>
        this.setState({
          flights: response,
          isLoading: false,
        })
      )
      .catch((error) => console.log(error));
  }

  render() {
    const { flights, isLoading } = this.state;
    console.log(flights);

    return isLoading ? (
      <div class="loaderWrapper">
        <div class="loader"></div>
          <p>Loading Dashboard</p>
      </div>
    ) : (
      <Grid container spacing={3}>
        {flights.map((flight) => (
          // <GridListTile key={repo.flight_number} cols={repo.flight_number || 1}>
          //   <span className='repo-text'>{repo.flight_number} </span>
          //   <span className='repo-description'>{repo.mission_name}</span>
          // </GridListTile>
          <Grid item xs>
            <FlightCard flight = {flight}/>
          </Grid>
        ))}
      </Grid>
      );
  }
}
