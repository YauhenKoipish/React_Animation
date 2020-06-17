import React, { Component } from "react";

export default class Header extends Component {
  render() {
    const { pageActive, setPage } = this.props;
    return (
      <div className="header">
        <ul className="header__navigations">
          {pageActive === "home" ? (
            <div
              onClick={() => {
                setPage("home");
              }}
              className="header__navigations-list header__navigations-active"
            >
              Главная
            </div>
          ) : (
            <div
              onClick={() => {
                setPage("home");
              }}
              className="header__navigations-list"
            >
              Главная
            </div>
          )}

          {pageActive === "matches" ? (
            <div
              onClick={() => {
                setPage("matches");
              }}
              className="header__navigations-list  header__navigations-active"
            >
              Список матчей
            </div>
          ) : (
            <div
              onClick={() => {
                setPage("matches");
              }}
              className="header__navigations-list "
            >
              Список матчей
            </div>
          )}

          {pageActive === "rules" ? (
            <div
              onClick={() => {
                setPage("rules");
              }}
              className="header__navigations-list  header__navigations-active"
            >
              Условия
            </div>
          ) : (
            <div
              onClick={() => {
                setPage("rules");
              }}
              className="header__navigations-list "
            >
              Условия
            </div>
          )}
        </ul>
      </div>
    );
  }
}
