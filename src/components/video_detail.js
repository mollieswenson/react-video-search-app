import React from 'react';

/**
 * Video player, title, and details.
 * If no videos are retured by Youtube API,
 * the element displays a loading message.
 */
const VideoDetail = ({video}) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  /**
  * Video id from object returned by Youtube API
  */
  const videoId = video.id.videoId;

  /**
  * Youtube video url to be embeded via iframe
  */
  const url = `https://www.youtube.com/embed/${videoId}`;

  /**
  * Returns video details element with video player, title and description.
  */
  return (
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url}></iframe>
        </div>
        <div className="details">
          <div className="title">{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
        </div>
      </div>
  );
};

export default VideoDetail;
