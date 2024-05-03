import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
//https://iconos8.es/icons/set/clima--animated
const App=()=>{
  //state
  const [cityInput, setCityInput ] = useState('Segovia');
  const [triggerFetch, setTriggerFetch ] = useState(true);
  const [ weatherData, setWeatherData ] = useState();
  const [ unitSystem, setUnitSystem ] = useState('metric');

  // fetching data
  useEffect(()=> {
    const getData = async()=>{
        const res= await fetch('api/data', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({cityInput}),
        });
        const data = await res.json();
        console.log('data',data);
        setWeatherData({...data});
        setCityInput('');
    };
    getData();
  },[triggerFetch]);

  console.log('weatherData',weatherData);


    return (
      <div className={styles.wrapper}>
        <h1>Weather App</h1>

      </div>
    )
}

export default App;
