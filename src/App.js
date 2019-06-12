import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Filter from './components/Filter'
import axios from 'axios';


const App = () => {



  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {

      
        const result = await axios(
          'https://swapi.co/api/people/',
        );

        setData(result.data.results);
      
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <Filter data={data} /> 
      </div>
  );

}


export default App;