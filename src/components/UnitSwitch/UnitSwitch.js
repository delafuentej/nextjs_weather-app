import styles from './UnitSwitch.module.css';

export const UnitSwitch=({unitSystem, onClick})=>{
    return(
        <div className={styles.wrapper}>
            <button 
                className={`${styles.switch} ${styles.btn} ${(unitSystem === 'metric') ? styles.active : styles.inactive}`}
                onClick = {onClick}
            >Metric System</button> 
            <button className={`${styles.switch}  ${styles.btn}  ${(unitSystem === 'imperial') ? styles.active : styles.inactive}`}
                onClick = {onClick}
            >Imperial System</button> 
        </div>
    )
};