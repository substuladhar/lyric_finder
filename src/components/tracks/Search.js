import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../../context";
import { Link, withRouter } from "react-router-dom";

class Search extends Component {
  state = {
    trackTitle: ""
  };

  searchInputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    console.log("Search", this.props);

    return (
      //   <Consumer>
      //     {value => {
      //       const { dispatch } = value;

      //       return (
      <div className="card card-body mb-4 p-4">
        <h1 className="display-4 text-center">
          <i className="fas fa-music"></i> Search For A Song
        </h1>
        <p className="lead text-center">Get The Lyrics For Any Song</p>
        <div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Song Title....."
              name="trackTitle"
              width="20 px"
              onKeyPress={e => {
                if (e.key == "Enter") {
                  this.props.history.push("/search/" + this.state.trackTitle);
                }
              }}
              onChange={e => this.searchInputHandler(e)}
            />
          </div>
          <div class="text-center">
            <Link
              to={"/search/" + this.state.trackTitle}
              className="btn btn-dark btn-primary btn-lg mb-5"
            >
              Get Track Lyrics
            </Link>
          </div>
        </div>
      </div>
    );
    // }}
    //   </Consumer>
    // );
  }
}

export default withRouter(Search);
