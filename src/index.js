import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyCoQ10LAtQjQg1CAjkpIYhE1J_-JrgWVaE';

// Create a new component. This component should produce some HTML
// add concept of selected video, video object always passed into video detail
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} /> //now passing selected video into video detail
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}

// Take this component's generated HTML and put it on the page(DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
