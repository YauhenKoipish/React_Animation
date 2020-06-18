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
      homePageActiveClass: { home: "" },
      matchesPageActiveClass: {
        matches: "",
        matches__bg: "",
        matches__table: "",
      },
      rulesPageActiveClass: { rules: "" },
    };

    this.homePage = document.querySelector(".home");
  }

  setPage = (pageName) => {
    this.setState({ pageActive: pageName });

    // let homePage = document.querySelector(".home");
    // let matchesPage = document.querySelector(".matches");
    // let matchesBg = document.querySelector(".matches__bg");
    // let matchesTable = document.querySelector(".matches__table");
    // let rulesPage = document.querySelector(".rules");

    // if (pageName === "home") {
    //   setTimeout(() => {
    //     homePage.classList.add("page-active");
    //   }, 1000);
    // } else {
    //   homePage.classList.remove("page-active");
    // }

    if (pageName === "home") {
      setTimeout(() => {
        this.setState({
          homePageActiveClass: { home: "page-active" },
        });
      }, 1000);
    } else {
      this.setState({
        homePageActiveClass: { home: "" },
      });
    }
    if (pageName === "home") {
      setTimeout(() => {
        this.setState({
          homePageActiveClass: { home: "page-active" },
        });
      }, 1000);
    } else {
      this.setState({
        homePageActiveClass: { home: "" },
      });
    }

    // if (pageName === "matches") {
    //   setTimeout(() => {
    //     matchesPage.classList.add("page-active");
    //     matchesBg.classList.add("matches__bg-active");

    //     setTimeout(() => {
    //       matchesTable.classList.add("matches__table-active");
    //     }, 1000);
    //   }, 1000);
    // } else {
    //   matchesPage.classList.remove("page-active");
    //   matchesBg.classList.remove("matches__bg-active");
    //   matchesTable.classList.remove("matches__table-active");
    // }

    if (pageName === "matches") {
      setTimeout(() => {
        this.setState({
          matchesPageActiveClass: {
            matches: "page-active",
            matches__bg: "matches__bg-active",
            matches__table: this.state.matchesPageActiveClass.matchesTable,
          },
        });

        setTimeout(() => {
          this.setState({
            matchesPageActiveClass: {
              matches: this.state.matchesPageActiveClass.matches,
              matches__bg: this.state.matchesPageActiveClass.matches__bg,
              matches__table: "matches__table-active",
            },
          });
        }, 1000);
      }, 1000);
    } else {
      this.setState({
        matchesPageActiveClass: {
          matches: "",
          matches__bg: "",
          matches__table: "",
        },
      });
    }

    // if (pageName === "rules") {
    //   setTimeout(() => {
    //     rulesPage.classList.add("page-active");
    //   }, 1000);
    // } else {
    //   rulesPage.classList.remove("page-active");
    // }

    if (pageName === "rules") {
      setTimeout(() => {
        this.setState({ rulesPageActiveClass: { rules: "page-active" } });
      }, 1000);
    } else {
      this.setState({ rulesPageActiveClass: { rules: "" } });
    }
  };

  componentDidMount() {
    this.setPage(this.state.pageActive);
  }

  render() {
    const {
      pageActive,
      homePageActiveClass,
      rulesPageActiveClass,
      matchesPageActiveClass,
    } = this.state;

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
        <Home pageActiveClass={homePageActiveClass} />
        <Matches pageActiveClass={matchesPageActiveClass} />
        <Rules pageActiveClass={rulesPageActiveClass} />
        <Mouse />
      </div>
    );
  }
}
