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

      console.log('weatherData', weatherData)
      console.log('typeof weatherData', typeof weatherData)
      console.log('weatherData.sys', weatherData.sys)
      console.log('typeof weatherData.sys', typeof weatherData.sys)

     console.log('weatherData.weather', weatherData.weather)

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
