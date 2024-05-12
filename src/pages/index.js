import { useState, useEffect } from 'react';
import {MainCard } from '../components/MainCard/MainCard';
import { ContentBox } from '../components/ContentBox/ContentBox';
import { Header } from '../components/Header/Header';
import { DateAndTime } from '../components/DateAndTime/DateAndTime';
import { Search } from '../components/Search/Search';
import { MetricsBox} from '../components/MetricsBox/MetricsBox';
import { UnitSwitch } from '@/components/UnitSwitch/UnitSwitch';
import { VideoBackground } from '@/components/VideoBackground/VideoBackground';
import { ErrorScreen } from '@/components/ErrorScreen/ErrorScreen';

import styles from '../styles/Home.module.css';
import { LoadingScreen } from '@/components/LoadingScreen/LoadingScreen';
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

    const changeSystem = () =>{
      (unitSystem === 'metric') ? setUnitSystem('imperial') : setUnitSystem('metric');
    }
    

    return (weatherData && weatherData.sys && !weatherData.message) ? (
      
      <div className={`${styles.wrapper} ${styles.levitating} `}>
        <VideoBackground />
        <MainCard 
          city={ weatherData.name}
          country={ weatherData.sys.country}
          description={weatherData.weather[0].description}
          iconName={ weatherData.weather[0].icon}
          temp =  {weatherData.main.temp}
          tempFeelsLike = { weatherData.main.feels_like}
          unitSystem= {unitSystem}
        
        />

        <ContentBox>
          <Header>
            <DateAndTime 
              weatherData = { weatherData}
              dt = {weatherData.dt}
              timezone = { weatherData.timezone }
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
          <MetricsBox 
            unitSystem = {unitSystem}
            humidity = {weatherData.main.humidity}
            windSpeed = { weatherData.wind.speed}
            windDeg = {weatherData.wind.deg }
            visibility = { weatherData.visibility}
            sunrise = {weatherData.sys.sunrise }
            sunset = { weatherData.sys.sunset }
            timezone = {weatherData.timezone }
          />
           
          <UnitSwitch 
            unitSystem = {unitSystem}
            onClick = {changeSystem}
          />
        </ContentBox>

        </div>
    ) : (weatherData && weatherData.message) ? (

      <ErrorScreen 
        errorMessage='City not found! Try again!'>
        <Search
          placeHolder = "Search a city..."
          onFocus={onFocus}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
    </ErrorScreen>)
    : (
      <LoadingScreen
        loadingMessage='Loading data...'
      />
    );
  }
export default App;
