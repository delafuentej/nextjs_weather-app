import Image from 'next/image';
import {celsiusToFahrenheit} from '../../../utils/converters';
import styles from'./MainCard.module.css';



 export const MainCard=()=>{
    return(
        <div className={styles.wrapper}>
            <h1 className={styles.location}>
                city, country
            </h1>

            <p className={styles.description}> description weather</p>

            <Image /> 

            <h2 className={styles.temperatur}> °C/F</h2>

            <p>Feels like</p>
        </div>
    )
};

