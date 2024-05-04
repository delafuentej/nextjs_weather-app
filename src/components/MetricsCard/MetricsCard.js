import Image from 'next/image';
import styles from './MetricsCard.module.css';

export const MetricsCard=()=>{
    return(
        <div styles={styles.wrapper}>
            <h1>Title</h1>
            <div className={styles.content}>
                <Image />
                <div>
                    <h3>Metric</h3>
                    <p>Unit</p>
                </div>

            </div>
        </div>
    );
};