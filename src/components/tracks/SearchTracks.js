import React, { Component } from "react";
import axios from "axios";
import Track from "./Track";

class SearchTracks extends Component {
  state = {
    track_list: []
  };
  findTrack = val => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${val}&page_size=10&page=1&s_track_ratingdesc&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then(res => {
        console.log(res.data);
        this.setState({ track_list: res.data.message.body.track_list });
        //  dispatch({
        //    type: "SEARCH_TRACKS",
        //    payload: res.data.message.body.track_list
        //  });
        // this.setState({ trackTitle: " " });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.findTrack(this.props.match.params.keyword);
  }

  render() {
    return (
      <div>
        {/* <span className="navbar-brand mb-0 h1 mx-auto">
          List of Searched Tracks
        </span> */}
        <React.Fragment>
          <h3 className="text-center mb-5">
            Found Results for "{this.props.match.params.keyword}"
          </h3>
          <div className="row">
            {this.state.track_list.map(item => (
              <Track key={item.track.track_id} track={item.track} />
            ))}
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default SearchTracks;
