import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import ReactWeather from 'react-open-weather';
// import 'react-open-weather/lib/css/ReactWeather.css';

const Home = () => (
  <div>
    <Head title="Mini Weather App" />
    {/* <Nav /> */}

    <div className="hero">
      <h1 className="title">Mini Weather App</h1>
      <p className="description">
        Show you current weather in cities
      </p>
      <br></br>
      <p className="description">
        <p>Your Current Location Weather</p>
        <ReactWeather
          forecast="today"
          apikey="4e45587b41fc449bad413550192602"
          type="auto"/>
      </p>
      {/* <p className="description">
        <p>Find other city..</p>
        <ReactWeather
          forecast="today"
          apikey="4e45587b41fc449bad413550192602"
          type="city"
          city="{}"/>
      </p> */}

      <div className="row">
        {/* <Link href="https://github.com/zeit/next.js#getting-started">
        </Link> */}
        <a className="card">
          <ReactWeather
              forecast="today"
              apikey="4e45587b41fc449bad413550192602"
              type="city"
              city="Banda Aceh"/>
        </a>
        {/* <Link href="https://open.segment.com/create-next-app">
        </Link> */}
        <a className="card">
          <ReactWeather
            forecast="today"
            apikey="4e45587b41fc449bad413550192602"
            type="city"
            city="Pekanbaru"/>
        </a>
        {/* <Link href="https://github.com/segmentio/create-next-app">
        </Link> */}
        <a className="card">
          <ReactWeather
            forecast="today"
            apikey="4e45587b41fc449bad413550192602"
            type="city"
            city="Jakarta"/>
        </a>
        <a className="card">
          <ReactWeather
            forecast="today"
            apikey="4e45587b41fc449bad413550192602"
            type="city"
            city="Bandung"/>
        </a>
        <a className="card">
          <ReactWeather
            forecast="today"
            apikey="4e45587b41fc449bad413550192602"
            type="city"
            city="Yogyakarta"/>
        </a>
        <a className="card">
          <ReactWeather
            forecast="today"
            apikey="4e45587b41fc449bad413550192602"
            type="city"
            city="Makassar"/>
        </a>
        <a className="card">
          <ReactWeather
            forecast="today"
            apikey="4e45587b41fc449bad413550192602"
            type="city"
            city="Ambon"/>
        </a>
        <a className="card">
          <ReactWeather
            forecast="today"
            apikey="4e45587b41fc449bad413550192602"
            type="city"
            city="Jayapura"/>
        </a>
      </div>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
)

export default Home
