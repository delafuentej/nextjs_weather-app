import styles from './UnitSwitch.module.css';

export const UnitSwitch=()=>{
    return(
        <div className={styles.wrapper}>
            <h5 className={styles.switch}>Metric System</h5> 
            <h5 className={styles.switch}>Imperial System</h5> 
        </div>
    )
};