import { MetricsCard } from '../MetricsCard/MetricsCard';
import { getTime, amPmFormat, getVisibility, getWindSpeed} from '../../../utils/helpers';
import {degToCompass} from '../../../utils/converters';
import styles from './MetricsBox.module.css';

export const MetricsBox=({unitSystem, humidity, windSpeed, windDeg, visibility, timezone, sunrise, sunset})=>{
    return(
        <div className ={styles.wrapper}>
           <MetricsCard 
            title={'Humidity'}
            metric ={humidity}
            unit = {'%'}
            iconSrc = {'img/iconStatics/humidity.png'}
           />
           <MetricsCard
            title={'Wind_Speed'}
            metric ={getWindSpeed(unitSystem, windSpeed)}
            unit ={( unitSystem === 'metric') ? 'm/s': 'm/h'}
            iconSrc = {'img/iconStatics/wind.png'}
           />
           <MetricsCard 
            title={'Wind_Direction'}
            metric = {degToCompass(windDeg)}
            iconSrc = {'img/iconStatics/compass.png'}
            
           />
           <MetricsCard 
            title={'Visibility'}
            metric = {getVisibility(unitSystem, visibility)}
            unit = {(unitSystem === 'metric') ? 'km':'miles'}
            iconSrc = {'img/iconStatics/binocular.png'}
           />
           <MetricsCard 
            title={'Sunrise'}
           // metric = {getTime(unitSystem, sunrise, timezone)}
            unit = {amPmFormat(unitSystem, sunrise, timezone)}
            iconSrc = {'img/iconStatics/sunrise.png'}
            />
           <MetricsCard 
            title={'Sunset'}
            //metric = {getTime(unitSystem, sunset, timezone)}
            unit = {amPmFormat(unitSystem, sunset, timezone)}
            iconSrc = {'img/iconStatics/sunset.png'}
            
            />
        </div>
    )
};