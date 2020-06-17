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

    this.homePage = document.querySelector(".home");
  }

  setPage = (pageName) => {
    this.setState({ pageActive: pageName });
    let homePage = document.querySelector(".home");

    let matchesPage = document.querySelector(".matches");
    let matchesBg = document.querySelector(".matches__bg");
    let matchesTable = document.querySelector(".matches__table");

    let rulesPage = document.querySelector(".rules");

    if (pageName === "home") {
      setTimeout(() => {
        homePage.classList.add("page-active");
      }, 1000);
    } else {
      homePage.classList.remove("page-active");
    }

    if (pageName === "matches") {
      setTimeout(() => {
        matchesPage.classList.add("page-active");
        matchesBg.classList.add("matches__bg-active");

        setTimeout(() => {
          matchesTable.classList.add("matches__table-active");
        }, 1000);
      }, 1000);
    } else {
      matchesPage.classList.remove("page-active");
      matchesBg.classList.remove("matches__bg-active");
      matchesTable.classList.remove("matches__table-active");
    }

    if (pageName === "rules") {
      setTimeout(() => {
        rulesPage.classList.add("page-active");
      }, 1000);
    } else {
      rulesPage.classList.remove("page-active");
    }
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
