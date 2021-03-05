import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

// Import app components from files from components folder
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// Youtube API Key
const API_KEY = 'PLACE_API_KEY_HERE'

// Class Component
class App extends React.Component {

  constructor(props) {
    super(props);

    //initialize state, calls render()
    this.state = {
      videos: [],
      selectedVideo: null
    };

    // run an initial search, calls render()
    this.videoSearch('cat videos');
  }

  // query youtube API to return array of videos pretaining to search term
  // set the first result as selected video by default
  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    // only execute every 300 ms
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    // render must return JSX
    // onSearch: update search term (callback by SearchBar)
    // onVideoClick: update selectedVideo (callback by VideoListItem)
    return (
      <div>
        <SearchBar
          onSearch={videoSearch} />
        <VideoDetail
          video={this.state.selectedVideo} />
        <VideoList
          onVideoClick={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>);
  };
}

// Instantiate component with <Class /> tag
// Render component to <div class="cointainer" </div> in ../index.html
ReactDOM.render(<App />, document.querySelector('.container'));
