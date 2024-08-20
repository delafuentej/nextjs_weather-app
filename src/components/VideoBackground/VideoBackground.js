import React from 'react';
// import ReactPlayer from 'react-player';

import styles from './VideoBackground.module.css';


export const VideoBackground =()=>{
    return(
        <div>
            <video src={require('../../../public/videos/video-background.mp4')} autoPlay muted loop className={styles.video}/>
        </div>
    )
}