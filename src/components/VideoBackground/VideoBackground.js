import React from 'react';

import styles from './VideoBackground.module.css';


export const VideoBackground =()=>{
    return(
        <div>
            <video src={require('../../../public/assets/videos/video-background.mp4')} autoPlay muted loop className={styles.video}/>
        </div>
    )
}