import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyBn7kTORO8keZ7Lnw_F9EIRBgE3CE-7ci4';

class App extends Component {
	constructor (props) {
		super(props);

		this.state = { 
			videos : [], 
			selectedVideo : null
		}

		this.videoSearch('surfBoards')
		
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({ 
				videos,
				selectedVideo: videos[0]
			});
		})
	}

	render () {
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

		return (
			<div>
				<h1 className="site-header">YouTube Clone</h1>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
				onVideoSelect={selectedVideo => this.setState({selectedVideo})}
				videos={this.state.videos} 
				/>
			</div>
		);
	}
} 
	

ReactDOM.render(<App />, document.querySelector('.container'));