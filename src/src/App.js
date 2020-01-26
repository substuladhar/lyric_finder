import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Index from "./components/layout/Index";
import Lyrics from "./components/tracks/Lyrics";
import Search1 from "./components/tracks/Search1";

import { Provider } from "./context";
import SearchTracks from "./components/tracks/SearchTracks";

function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          <Navbar />
          {/* <Search1 /> */}
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/search/:keyword" component={SearchTracks} />
              <Route exact path="/lyrics/track/:id" component={Lyrics} />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
