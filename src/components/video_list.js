import React from 'react';
import VideoListItem from './video_list_item';

// Functional Component
const VideoList = ({videos, onVideoClick}) => {

  // map loops over elements of array, passing each into the function
  const videoItems = videos.map( (video) => {
    return (
      <VideoListItem
        onVideoClick={onVideoClick} // callback updates selectedVideo
        key={video.etag} // array elements need unique idea to render
        video={video} />
    )
  });

  // return the list of videos
  return (
    <ul className='col-md-4 list-group'>
      {videoItems}
    </ul>
  );
};

export default VideoList;
