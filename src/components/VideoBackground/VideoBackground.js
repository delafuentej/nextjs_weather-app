import React from 'react';
// import ReactPlayer from 'react-player';
import {sunSee} from '../../../public/videos/sunSee.mp4'
import styles from './VideoBackground.module.css';

// export const VideoBackground = () => {
//     return (
//         <div className={styles.videoBackground}>
//             <ReactPlayer url='/videos/sunSee.mp4' className={styles.video}  playing={true} loop={true} muted={true} >
                
               
//             </ReactPlayer>
//             { <style jsx>{`
//                 .video-background {
//                     position: fixed;
//                     top: 0;
//                     left: 0;
//                     width: 100%;
//                     height: 100%;
//                     overflow: hidden;
//                     z-index: -1;
//                 }

//                 video {
//                     width: 100%;
//                     height: 100%;
//                     object-fit: cover;
//                 }
//             `}</style> }
//         </div>
//     );
// };
export const VideoBackground =()=>{
    return(
        <div className={styles.VideoBackground}>
            <video src={require('../../../public/videos/video-background.mp4')} autoPlay muted loop className={styles.video}/>
        </div>
    )
}