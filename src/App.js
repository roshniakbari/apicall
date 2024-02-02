import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  let [data, setdata] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(function (response) {
        console.log(response.data.results);
        setdata(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])

  return (
    <div className="App">
      <h1 className='title'>The Rick and Morty API</h1>
      <div className='black-back'>
        <Container>
          <div className='pic' style={{ display: 'flex', flexWrap: 'wrap' }}>
            {
              data.map((ele, ind) => {
                return (
                  <div className='back' style={{ width: '50%' }}>
                    <div className='img-text'>
                      <div className='img'><img src={ele.image}></img></div>
                      <div className='item'>
                        <h1 className='name'>{ele.name}</h1>
                        <li>{ele.status}-{ele.species}</li>
                        <span className='gray-text'>Last known location:</span>
                        <p>{ele.location.name}</p>

                        <div className='gender'>Gender:{ele.gender}</div>
                        <span>First seen in:</span>
                        <h1 className='name'>{ele.episode.name}</h1>

                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </Container>
      </div>
    </div>
  );
}
export default App;