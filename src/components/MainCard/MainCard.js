import Image from 'next/image';
import {kelvinToCelsius, kelvinToFahrenheit} from '../../../utils/converters';
import styles from'./MainCard.module.css';



 export const MainCard=({ city, country, description, iconName, unitSystem, temp, tempFeelsLike })=>{
    //console.log(description)
    //console.log('iconName',iconName)
    //console.log('temp', temp)
    console.log('temp feels like', tempFeelsLike)
    return(
        <div className={styles.wrapper}>
            <h1 className={styles.location}>
               {city}, {country}
            </h1>

            <p className={styles.description}> {description}</p>

            <Image 
               width = '250'
               height = '250'
               src={`/img/iconsStatics/${iconName}.svg`}
               alt='weatherIcon'
               
                
                /> 

            <h2 className={styles.temperatur}> 
                {(unitSystem === 'metric') ? `${Math.round(kelvinToCelsius(temp))} °C` : `${Math.round(kelvinToFahrenheit(temp))} F`}
                
            
            </h2>

            <p>
               Feels like {" "}
                {(unitSystem === 'metric') ? `${Math.round(kelvinToCelsius(tempFeelsLike))} °C` : `${Math.round(kelvinToFahrenheit(tempFeelsLike))} F`}

            </p>
        </div>
    )
};

