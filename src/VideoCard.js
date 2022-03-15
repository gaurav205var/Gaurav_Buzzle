import React from 'react'
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import './VideoCard.css';
import { Badge, Chip } from '@material-ui/core';

const VideoCard = ({image, title, channel, views, timestamp, channelImage, live=true}) => {
    return (
        <div className='videocard'>
          <img className='videocard__image' src={image} alt='' />
          <div className="videocard__info">
           {live && <Chip color="secondary" size="small" label="LIVE" className="chipOverlay"/>}
            
            {/* <Avatar 
              className='videocard__avatar' 
              alt={channel} 
              src={channelImage} 
            /> */}
            <div className="videocard__text">
              <h4>{title}</h4>
              <p>{channel}</p>
              <p style={{display: "flex", alignItems: "center"}}>{<WatchLaterIcon fontSize='small'/>} &nbsp;&nbsp;{timestamp}</p>
              
            </div> 
          </div>
        </div>
    )
}


// function VideoCard(props) {
//   return (
//     <div>
//         <img src={props.image} alt=""/>
//     </div>
//   )
// }

export default VideoCard