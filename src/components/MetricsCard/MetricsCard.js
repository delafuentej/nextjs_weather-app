import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './MetricsCard.module.css';

export const MetricsCard=({ title, iconSrc, metric, unit})=>{

    const [imageSize, setImageSize] = useState({ width: 60, height: 60 });

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth <= 450){
                setImageSize({ width: 70, height: 70});
            }
            else if (window.innerWidth <= 600) {
                setImageSize({ width: 60, height: 60});
            } else if (window.innerWidth <= 900) {
                setImageSize({ width: 65, height: 65});
            } else {
                setImageSize({ width: 70, height: 70 });
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Llama a la función inmediatamente para establecer el tamaño inicial

        return () => window.removeEventListener('resize', handleResize);
    }, []);
    //console.log('iconSrc', iconSrc)
    return(
        <div styles={styles.wrapper}>
            <h3 className={styles['card-title']}>{title}</h3>
            <div className={styles.content}>
                <div className={styles.metricsImg}>
                    <Image 
                    width={imageSize.width}
                    height={imageSize.height}
                    src = {iconSrc}
                    alt = 'weatherIcon'
                
                    />
                </div>
               
                <div className={styles.unitMetric}>
                    <h4 >{metric}</h4>
                    <p>{unit}</p>
                </div>

            </div>
        </div>
    );
};