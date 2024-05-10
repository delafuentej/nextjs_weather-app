import { weekDay, time, amPmFormat} from '../../../utils/helpers';
import styles from './DateAndTime.module.css';

export const DateAndTime=({weatherData ,dt, timezone, unitSystem})=>{
   // console.log('dt',dt,'timezone', timezone, 'unitSystem', unitSystem)
    return(
        <div className={styles.wrapper}>
           <h2>
                {/* {`${weekDay(weatherData)}, 
                ${time( unitSystem, dt, timezone)}
                ${amPmFormat(unitSystem, dt, timezone)}
                `} */}

           </h2>
        </div>
    )
};