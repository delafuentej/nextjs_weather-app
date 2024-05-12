import Image from 'next/image';
import styles from './MetricsCard.module.css';

export const MetricsCard=({ title, iconSrc, metric, unit})=>{
    //console.log('iconSrc', iconSrc)
    return(
        <div styles={styles.wrapper}>
            <h2>{title}</h2>
            <div className={styles.content}>
                <Image 
                    width='75'
                    height='75'
                    src = {iconSrc}
                    alt = 'weatherIcon'
                
                />
                <div>
                    <h3>{metric}</h3>
                    <p>{unit}</p>
                </div>

            </div>
        </div>
    );
};