import React from 'react';

// Functional Component
const VideoDetail = ({video}) => {
  // const video = props.video declared by {video} in ES6

  // constructor will pass empty video to videodetail when initialized
  // display AJAX spinner
  if (!video) {
    return <div>Loading...</div>
  }

  // backticks string works like python f-strings
  const url = `https://www.youtube.com/embed/${video.id.videoId}`;

  // broswer will access url and grab content for iframe and details
  return (
    <div className="video-detail col-md-8">

      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>

      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>

    </div>
  );
};

export default VideoDetail;
