import React from 'react';

//making list of videos with what the actual video is
const VideoListItem = ({video}) => {
  // const video = props.video;  this LOC is the same as ({video}), ES6 syntax
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li className="list-group-item">
     <div className="video-list media">
      <div className="media-left">
        <img className="media-object" src={imageUrl} />
      </div>
      <div className="media-body">
        <div className="media-heading">{video.snippet.title}</div>
      </div>
     </div>
    </li>
  )
}

export default VideoListItem;
