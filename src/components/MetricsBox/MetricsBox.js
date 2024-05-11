import { MetricsCard } from '../MetricsCard/MetricsCard';
import { getTime, amPmFormat, getVisibility, getWindSpeed} from '../../../utils/helpers';
import {degToCompass} from '../../../utils/converters';
import styles from './MetricsBox.module.css';

export const MetricsBox=({unitSystem, humidity, windSpeed, windDeg, visibility, timezone, sunrise, sunset})=>{
    // console.log('windSpeed',windSpeed)
    // console.log('getWindSpeed',getWindSpeed)
    // console.log('getWindSpeed', getWindSpeed(unitSystem, windSpeed))
    // console.log('getVisibiliy',getVisibility)
    // console.log('unitSystem', unitSystem)
    // console.log('getVisibility',getVisibility(unitSystem, visibility))
    return(
        <div className ={styles.wrapper}>
           <MetricsCard 
            title={'Humidity'}
            metric ={humidity}
            unit = {'%'}
            iconSrc = {'/img/iconsStatics/humidity.png'}
           />
           <MetricsCard
            title={'Wind Speed'}
            metric ={getWindSpeed(unitSystem, windSpeed)}
            unit ={( unitSystem === 'metric') ? 'm/s': 'm/h'}
            iconSrc = {'/img/iconsStatics/wind.png'}
           />
           <MetricsCard 
            title={'Wind Direction'}
            metric = {degToCompass(windDeg)}
            iconSrc = {'/img/iconsStatics/compass.png'}
            
           />
           <MetricsCard 
            title={'Visibility'}
            metric = {getVisibility(unitSystem, visibility)}
            unit = {(unitSystem === 'metric') ? 'km':'miles'}
            iconSrc = {'/img/iconsStatics/binocular.png'}
           />
           <MetricsCard 
            title={'Sunrise'}
            metric = {getTime(unitSystem, sunrise, timezone)}
            unit = {amPmFormat(unitSystem, sunrise, timezone)}
            iconSrc = {'/img/iconsStatics/sunrise.png'}
            />
           <MetricsCard 
            title={'Sunset'}
            metric = {getTime(unitSystem, sunset, timezone)}
            unit = {amPmFormat(unitSystem, sunset, timezone)}
            iconSrc = {'/img/iconsStatics/sunset.png'}
            
            />
        </div>
    )
};