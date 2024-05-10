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
  const [ weatherData, setWeatherData ] = useState({});
  const [ unitSystem, setUnitSystem ] = useState('metric');

  // fetching data
  useEffect(()=> {
    const getData = async()=>{
        const res= await fetch('api/data', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({cityInput}),
        }).catch((err) =>{
          console.log('err.message',err)
        });
        const data = await res.json();
        //console.log('data',data);
        console.log('typeof data',typeof data)
        setWeatherData({...data});
        setCityInput('');
    }
    getData();
  },[triggerFetch]);

    // functions Search Component
    const onChange = e =>{
      setCityInput(e.target.value)
    };

    const onFocus = e =>{
      e.target.value = '';
      e.target.placeHolder = '';
     };

    const onKeyDown = e =>{
      e.keyCode === 13 && setTriggerFetch(!triggerFetch);
      e.target.placeHolder = "Search a city...";
    };


    

    return (
      <div className={styles.wrapper}>
        
        <MainCard 
          city={( weatherData && weatherData.name) ? weatherData.name : 'loading Data...'}
          country={ (weatherData && weatherData.sys) ? weatherData.sys.country: 'loading Data...'}
          description={(weatherData && weatherData.weather && weatherData.weather[0].description) ? weatherData.weather[0].description : 'loading Data...'}
          iconName={( weatherData && weatherData.weather) ? weatherData.weather[0].icon : 'loading Data...'}
          temp = {(weatherData && weatherData.main) ? weatherData.main.temp : 'loading data'}
          tempFeelsLike = { (weatherData && weatherData.main) ? weatherData.main.feels_like: 'loading data'}
          unitSystem= {unitSystem}
          

        
        
        />

        <ContentBox>
          <Header>
            <DateAndTime 
              weatherData = { weatherData ? weatherData: 'loading data...'}
              dt = {(weatherData && weatherData.dt) ? weatherData.dt : 'loading data...'}
              timezone = {( weatherData && weatherData.timezone) ? weatherData.timezone : 'loading data...'}
              unitSystem= {unitSystem}

            />
            <Search 
              placeHolder = "Search a city..."
              value = {cityInput}
              onChange = {onChange}
              onFocus = {onFocus}
              onKeyDown = {onKeyDown}

            
            />
          </Header>
          <MetricsBox />
           
          <UnitSwitch />
        </ContentBox>
       


      </div>
    )
}

export default App;
