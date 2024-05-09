//Celsius to Fahrenheit
export const celsiusToFahrenheit = (celsius) => (celsius * 9)/ 5 + 32;

export const fahrenheitToCelsius = (fahrenheit) => (fahrenheit -32) * 5/9;

export const kelvinToCelsius = (kelvin) => kelvin - 273.15;



//wind speed meters per second to miles per hour
export const metersPerSecondToMilesPerHour = (mps) => (mps * 2.236936).toFixed(2);
// distance: km to miles
export const kmToMiles = (km) => (km/ 1.609).toFixed(1);
// time: 24-hour format to AM/PM format
export const toAmPmFormat=(time) => {
    let [hours, minutes ] = time.split(':');
    return `${(hours %= 12) ? hours : 12}:${minutes}`;
};

//angles in degrees to direction => 360°/ 16 (there is 16 directions)= 22.5
export const degToCompass= (number) =>{
    //nearest integer=> val, wich it uses to calculate 'modulus' form a detec the position in the given arrayDirections
    let val = Math.round( number / 22.5);
    let arrayDirections = [
        "N",
        "NNE",
        "NE",
        "ENE",
        "E",
        "ESE",
        "SE",
        "SSE",
        "S",
        "SSW",
        "SW",
        "WSW",
        "W",
        "WNW",
        "NW",
        "NNW",
    ];
    return arrayDirections[ val % 16];
};
//unixToLocalTime takes in the UNIX time in seconds (UTC) and the difference in the seconds for the local timezone.
// The new Date object is created, where both values are added and then multiplied by 1000, since Date object requires milliseconds.
// .toISOString() => Get a date as a string, using the ISO standard 2024-05-03T10:16:27.871Z /  YYYY-MM-DDTHH:mm:ss.sssZ:
//  regex => to get the first result in the hh:mm pattern. 
//time.startsWith => returned string starts with “0” =>it  removes (time.substring(1)) the first character ( 05:45 to 5:45).
export const unixToLocalTime = (unixSeconds, timezone) => {
    let time = new Date((unixSeconds + timezone) * 1000)
      .toISOString()
      .match(/(\d{2}:\d{2})/)[0];
  
    return time.startsWith("0") ? time.substring(1) : time;
  };