import React from 'react';
import VideoListItem from './video_list_item';


/**
 * A list of videos the user can click.
 * @param {object} props - Contains video object.
 */
const VideoList = (props) => {

  /**
  * Returns video list item with information about the video.
  * @param {object} video 
  */
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />
    );
  });

  /**
  * Returns the element as a list of videos.
  */
  return (
    <ul className="col-md-4 list-group">
    {videoItems}
    </ul>
  );
}

export default VideoList;
