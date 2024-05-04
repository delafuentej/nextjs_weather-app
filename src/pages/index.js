import { useState, useEffect } from 'react';
import {MainCard } from '../components/MainCard/MainCard';
import { ContentBox } from '../components/ContentBox/ContentBox';
import { Header } from '../components/Header/Header';
import { DateAndTime } from '../components/DateAndTime/DateAndTime';
import { Search } from '../components/Search/Search';
import { MetricsBox} from '../components/MetricsBox/MetricsBox';
import { UnitSwitch } from '@/components/UnitSwitch/UnitSwitch';


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
        <MainCard />

        <ContentBox>
          <Header>
            <DateAndTime />
            <Search />
          </Header>
          <MetricsBox />
           
          <UnitSwitch />
        </ContentBox>
       


      </div>
    )
}

export default App;
