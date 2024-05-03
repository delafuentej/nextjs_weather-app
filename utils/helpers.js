import { unixToLocalTime, kmToMiles, metersPerSecondToMilesPerHour, toAmPmFormat} from './converters';

export const windSpeed = (unitSystem, windInMps) =>{
    (unitSystem === 'metric') ? windInMps : metersPerSecondToMilesPerHour(windInMps);
}

export const visibility = (unitSystem, visibilityInMeters)=>{
    (unitSystem === 'metric') ? 
    (visibilityInMeters/1000).toFixed(1) :
    kmToMiles(visibilityInMeters/1000)
}

export const time = (unitSystem , currentTime, timeZone) =>{
    (unitSystem === 'metric') ?
    unixToLocalTime(currentTime, timeZone) :
    toAmPmFormat(unixToLocalTime(currentTime, timeZone));
}

export const amPmFormat = (unitSystem, currentTime, timeZone)=>{
    (unitSystem === 'imperial') ?
    unixToLocalTime(currentTime, timeZone).split(':')[0] >=12 ?
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
    return weekDay[ new Date((weatherData.dt + weatherData.timeZone)*1000).getUTCDay()];

};