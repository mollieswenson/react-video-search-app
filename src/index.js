import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'React-dom';
import YTsearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyAgAFzh5mwgC1rzLMD2oCMpL9rg6_hAFaw';

 /**
 * Parent that renders a search bar, video player and list of videos.
 */
 class App extends Component {

  /**
  * Constructor declares props.
  * @param {array} videos - List of videos. Intially empty.
  * @param {string} selectedVideo - The id of a selected video. Initially null.
  */
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
     };

    /**
    * Set videoSearch to 'surfboards' since no user input yet
    */
   this.videoSearch('surfboards');
 }

 /**
 * Calls Youtube API
 * @param {string} term - Search term entered by the user.
 * Sets state of videos and selectedVideo
 */
  videoSearch(term) {
    YTsearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  /**
  * Sets state for selectedVideo and returns the App element
  * with children <SearchBear />, <VideoDetail /> and <VideoList />.
  * Must handle onVideoSelect
  */
  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);

    return (
      <div>
         <SearchBar onSearchTermChange={videoSearch}/ >
         <VideoDetail video={this.state.selectedVideo} />
         <VideoList
           onVideoSelect={selectedVideo => this.setState({selectedVideo})} //this updates App's state with a new video
           videos={this.state.videos} />
      </div>
    );
  }
}

/**
* Renders App element to the DOM
*/
ReactDOM.render(<App />, document.querySelector('.container'));
