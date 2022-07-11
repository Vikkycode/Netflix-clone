import React from 'react'
import Navbar from '../Navbar';
import Banner from '../Banner';
import Row from '../Row'
import requests from '../../requests'

const HomeScreen=()=>{
  return (
    <div>

    <Navbar fetchUrl={requests.fetchNetflixOriginals} />
      <Banner />
      <Row title="Netflix Original"
      fetchUrl={requests.fetchNetflixOriginals}
    //   videoid="M1kNc7xTwSs"
      isLargeRow/>
      <Row title="Trending Now"
      fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies"
      fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies"
      fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies"
      fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Roman Movies"
      fetchUrl={requests.fetchRomanMovies} />
      <Row title="Top Rate Movies"
      fetchUrl={requests.fetchTopRated} />
      <Row title="Documentaries"
      fetchUrl={requests.fetchDocumentaries} 
      isPaddingBottom={true}
      />
    </div>
  )
}

export default HomeScreen