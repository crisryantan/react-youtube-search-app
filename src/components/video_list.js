import React from 'react';
import VideoListItem from './video_list_item';

// function based component
// does not record any user interaction
// does not need to re-render
const VideoList = ( props ) => {

	const videoItems = props.videos.map( ( video ) => {
		return <VideoListItem video={video} key={video.etag} />
	} );

	return (
		<ul className="col-md-4 list-group">
			{ videoItems }
		</ul>
	)
}

export default VideoList;