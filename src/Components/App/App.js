import React, { Component } from "react";
import Header from "../Header/header";
import Home from "../Home/home";
import Matches from "../Matches/matches";
import Rules from "../Rules/rules";
import Mouse from "../Mouse/mouse";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageActive: "home",
    };
  }

  setPage = (pageName) => {
    this.setState({ pageActive: pageName });
  };

  render() {
    const { pageActive } = this.state;
    return (
      <div className="desktop">
        <Header setPage={this.setPage} pageActive={pageActive} />
        <div className="background">
          {pageActive === "home" ? (
            <>
              <div className="background__black "></div>
              <div className="background__green "></div>
            </>
          ) : pageActive === "matches" ? (
            <>
              <div className="background__black background__black-wide"></div>
              <div className="background__green background__green-wide"></div>
            </>
          ) : pageActive === "rules" ? (
            <>
              <div className="background__black "></div>
              <div className="background__green background__green-hidden"></div>
            </>
          ) : (
            ""
          )}
        </div>
        <Home pageActive={pageActive} />
        <Matches pageActive={pageActive} />
        <Rules pageActive={pageActive} />
        <Mouse />
      </div>
    );
  }
}
