import styles from './ContentBox.module.css';

export const ContentBox=({children})=>{
    return(
        <div className={styles.wrapper}> 
            ContentBox {children}
        </div>
    )
};