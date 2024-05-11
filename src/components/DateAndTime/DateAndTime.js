import {getWeekDay, getTime, amPmFormat} from '../../../utils/helpers';
import styles from './DateAndTime.module.css';

export const DateAndTime=({weatherData ,dt, timezone, unitSystem})=>{
    console.log('dt',dt,'timezone', timezone, 'unitSystem', unitSystem)
    console.log('getTime()', getTime(unitSystem, dt, timezone))
    return(
        <div className={styles.wrapper}>
           <h3>
                {`${getWeekDay(weatherData)}, 
                ${getTime(unitSystem, dt, timezone)}
                ${amPmFormat(unitSystem, dt, timezone)}
                `}

           </h3>
        </div>
    )
};