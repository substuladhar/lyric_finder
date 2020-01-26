import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../../context";
import { Link, withRouter } from "react-router-dom";
import "./Search1.css";

class Search1 extends Component {
  state = {
    trackTitle: ""
  };

  searchInputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      //   <Consumer>
      //     {value => {
      //       const { dispatch } = value;

      //       return (
      <div className="card card-body mb-4 t-4">
        {/* <h1 className="display-4 text-center">
          <i className="fas fa-music"></i> Search For A Song
        </h1>
        <p className="lead text-center">Get The Lyrics For Any Song</p> */}
        <div className="row">
          <div className="form-group col-9">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Song Title....."
              name="trackTitle"
              onKeyPress={e => {
                if (e.key == "Enter") {
                  this.props.history.push("/search/" + this.state.trackTitle);
                }
              }}
              onChange={e => this.searchInputHandler(e)}
            />
          </div>
          <div class="text-right col-3">
            <a
              href={"/search/" + this.state.trackTitle}
              className="btn btn-dark btn-primary btn-lg mb-5"
            >
              Get Track Lyrics
            </a>
          </div>
        </div>
      </div>
    );
    // }}
    //   </Consumer>
    // );
  }
}

export default withRouter(Search1);
