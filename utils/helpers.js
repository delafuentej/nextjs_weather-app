import { unixToLocalTime, kmToMiles, metersPerSecondToMilesPerHour, toAmPmFormat} from './converters';

export const windSpeed = (unitSystem, windInMps) =>{
    (unitSystem === 'metric') ? windInMps : metersPerSecondToMilesPerHour(windInMps);
}

export const visibility = (unitSystem, visibilityInMeters)=>{
    (unitSystem === 'metric') ? 
    (visibilityInMeters/1000).toFixed(1) :
    kmToMiles(visibilityInMeters/1000)
}

export const time = (unitSystem , currentTime, timezone) =>{
    (unitSystem === 'metric') ?
    unixToLocalTime(currentTime, timezone) :
    toAmPmFormat(unixToLocalTime(currentTime, timezone));
}

export const amPmFormat = (unitSystem, currentTime, timezone)=>{
    (unitSystem === 'imperial') ?
    unixToLocalTime(currentTime, timezone).split(':')[0] >=12 ?
    'PM' : 'AM' :''
};

export const weekDay = (weatherData) =>{
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