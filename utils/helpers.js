import { unixToLocalTime, kmToMiles, metersPerSecondToMilesPerHour, toAmPmFormat} from './converters';

export const getWindSpeed = (unitSystem, windInMps) =>{
    return (unitSystem === 'metric') ? windInMps : metersPerSecondToMilesPerHour(windInMps);
}

export const getVisibility = (unitSystem, visibilityInMeters)=>{
    return (unitSystem === 'metric') ? 
    (visibilityInMeters/1000).toFixed(1) :
    kmToMiles(visibilityInMeters/1000)
}

export const getTime = (unitSystem , currentTime, timezone) =>{
   return (unitSystem === 'metric') ?
     unixToLocalTime(currentTime, timezone) : 
    toAmPmFormat(unixToLocalTime(currentTime, timezone));
}

export const amPmFormat = (unitSystem, currentTime, timezone)=>{
    return (unitSystem === 'metric') ?
    unixToLocalTime(currentTime, timezone).split(':')[0] >=12 ?
    'PM' : 'AM' :''
};

export const getWeekDay = (weatherData) =>{
    const weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    ];
    return weekDay[ new Date((weatherData.dt + weatherData.timezone)*1000).getUTCDay()];

};