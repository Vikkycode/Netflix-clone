
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Row from './components/Row'
import requests from './requests'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row title="Netflix Original"
      fetchUrl={requests.fetchNetflixOriginals} 
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
  );
}

export default App;
