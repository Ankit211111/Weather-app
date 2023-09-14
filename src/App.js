import React from 'react';
import Card from './components/Card';
import Input from './components/Input';
import Button from './components/Button';
import {useWeather} from './context/Weather';
import {useEffect} from 'react';

import './App.css';

function App() {
  const weather =useWeather();
  useEffect(() => {
    // get current location

    weather.fetchCurrentUserLocationData();
    
  }, [])
  const currentData =()=>{
    weather.fetchCurrentUserLocationData();
  }
  return (
    <div className="App">
      <h1>Weather </h1>
      <Input />
      <Button onClick={weather.fetchData} value="Search" />
      <Card />
      <Button value ="Refresh" onClick={currentData}/>
    </div>
  );
}

export default App;
