import Image from 'next/image';
import { useState, useEffect } from 'react';
import {kelvinToCelsius, kelvinToFahrenheit} from '../../../utils/converters';
import styles from'./MainCard.module.css';



 export const MainCard=({ city, country, description, iconName, unitSystem, temp, tempFeelsLike })=>{
    //console.log(description)
    //console.log('iconName',iconName)
    //console.log('temp', temp)
    const [imageSize, setImageSize] = useState({ width: 150, height: 150 });

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 600) {
                setImageSize({ width: 150, height: 150 });
            } else if (window.innerWidth <= 900) {
                setImageSize({ width: 200, height: 200 });
            } else {
                setImageSize({ width: 250, height: 250 });
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Llama a la función inmediatamente para establecer el tamaño inicial

        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return(
        <div className={styles.wrapper}>
            <h1 className={styles.location}>
               {city}, {country}
            </h1>

            <p className={styles.description}> {description}</p>

            <Image 
               width = {imageSize.width}
               height = {imageSize.height}
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

