import React from 'react';

/**
* A single video in the video list.
* @param {string} video - The selected video object.
* @param {function} onVideoSelect - Runs when user clicks a different video.
*/
const VideoListItem = ({video, onVideoSelect}) => {

  /**
  * URL for a video thumbnail.
  */
  const imageURL = video.snippet.thumbnails.default.url;

  /**
  * Returns a single list item with the video title and thumbnail.
  */
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageURL} />
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
