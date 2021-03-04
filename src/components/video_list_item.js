import React from 'react';

// Functional Component
const VideoListItem = ({video, onVideoClick}) => {
  // const video = props.video declared by {video} in ES6

  // displays video thumbnail at far left of container
  // displays video title to the right of thumbnail
  // onVideoClick() updates selectedVideo
  return (

    <li
      onClick={() => onVideoClick(video)}
      className="list-group-item">

      <div className="video-list media">

        <div className="media-left">
          <img className="media-object"
            src={video.snippet.thumbnails.default.url}/>
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>

      </div>
    </li>
  );
};

export default VideoListItem;
