import { MetricsCard } from '../MetricsCard/MetricsCard';
import styles from './MetricsBox.module.css';

export const MetricsBox=()=>{
    return(
        <div className ={styles.wrapper}>
           <MetricsCard 
            title={'Humidity'}
           />
           <MetricsCard
            title={'Wind_Speed'}
           />
           <MetricsCard 
            title={'Wind_Direction'}
           />
           <MetricsCard 
            title={'Visibility'}
           />
           <MetricsCard 
            title={'Sunrise'}/>
           <MetricsCard 
            title={'Sunset'} />
        </div>
    )
};