import React from 'react';
// import './ApiCall.css';
import './Source.css';

export default class Source extends React.Component {
  constructor() {
    super();
    this.state = {
      country: [],
      confirmed: [],
      deaths: [],
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
    const key = 'da328055e2e940d8b28055e2e9e0d851';
    fetch(
      `https://api.weather.com/v3/wx/disease/tracker/countryList/current?format=json&language=en-US&apiKey=${key}`,
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
          country: response.covid19.recordLocation,
          confirmed: response.covid19.confirmed,
          deaths: response.covid19.deaths,
          isLoading: false,
        })
      )
      .catch((error) => console.log(error));
  }

  render() {
    const { country, confirmed, deaths, isLoading } = this.state;
    const totalConfirmed =
      confirmed.length > 0
        ? confirmed.reduce((count, item) => count + item)
        : 0;
    const totalDeaths =
      deaths.length > 0
        ? deaths.reduce((count, item) => count + item)
        : 0;

    return isLoading ? (
      <div class="loaderWrapper">
        <div class="loader"></div>
        <p>Loading Dashboard</p>
      </div>
    ) : (
        <div class="container">
          <h1>COVID-19 Tracker</h1>
          <h4>Track the spread of Coronavirus outbreak</h4>

          <div class="totalWrapper">
            <div class="totalCard">
              <div class="desc">
                <p class="title">Total Cases</p>
                <p class="figure confirmedFigure">
                  {this.numberWithCommas(totalConfirmed)}
                </p>
              </div>
              <div class="confirmedIcon">
                <i class="fas fa-viruses"></i>
              </div>
            </div>
            <div class="totalCard">
              <div class="desc">
                <p class="title">Total Deaths</p>
                <p class="figure deathsFigure">
                  {this.numberWithCommas(totalDeaths)}
                </p>
              </div>
              <div class="deathsIcon">
                <i class="fas fa-skull-crossbones"></i>
              </div>
            </div>
          </div>

          <div class="tableWrapper">
            <h3>Country Breakdown</h3>

            <div class="table">
              <div class="tr th">
                <div class="td">ID</div>
                <div class="td">Country</div>
                <div class="td">Confirmed</div>
                <div class="td">Deaths</div>
              </div>
              {country.map((item, index) => (
                <div class="tr" key={index}>
                  <div class="td">{index + 1}</div>
                  <div class="td">{item}</div>
                  <div class="td">
                    {confirmed[index] == null
                      ? 0
                      : this.numberWithCommas(
                        confirmed[index]
                      )}
                  </div>
                  <div class="td">
                    {deaths[index] == null
                      ? 0
                      : this.numberWithCommas(deaths[index])}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
  }
}
