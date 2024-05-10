import styles from './Search.module.css';

export const Search=({placeHolder, value, onChange, onFocus, onKeyDown})=>{
    return(
        <input 
            className={styles.search} 
            type= 'text'
            value= {value}
            onChange = {onChange}
            placeholder = {placeHolder}
            onFocus = {onFocus}
            onKeyDown = {onKeyDown}
            />
    )
};