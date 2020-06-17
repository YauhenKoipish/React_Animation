import React, { Component } from "react";

// export default function Matches({ pageActive }) {
//   let matchesClassName, matchesBgClassName;

//   console.log(pageActive);

//   if (pageActive === "matchies") {
//     matchesClassName = "matches page-active";
//     matchesBgClassName = "matches__bg matches__bg-active";
//   } else {
//     matchesClassName = "matches";
//     matchesBgClassName = "matches__bg";
//   }
//   //   pageActive === "matches"?
//   //      ((matchesClassName = "matches page-active"),
//   //       (matchesBgClassName = "matches__bg matches__bg-active"))

//   //     : ((matchesClassName = "matches"), (matchesBgClassName = "matches__bg"));

//   return (
//     <>
//       <div className={matchesClassName}>22132</div>
//     </>
//   );
// }

// export default class Matches extends Component {
//   constructor(props) {
//     super(props);
//     this.matchesClassName = "";
//     this.matchesBgClassName = "";
//     this.matchesTable = "";
//   }

//   componentDidUpdate(prevProps) {
//     if (this.props.pageActive !== prevProps.pageActive) {
//       this.updatePage();
//     }
//   }

//   updatePage = () => {
//     if (this.props.pageActive === "matches") {
//       this.matchesClassName = "matches page-active";
//       this.matchesBgClassName = "matches__bg matches__bg-active";
//       this.matchesTable = "matches__table matches__table-active";
//     } else {
//       this.matchesClassName = "matches";
//       this.matchesBgClassName = "matches__bg";
//       this.matchesTable = "matches__table";
//     }

//     return (
//       <div className={this.matchesClassName}>
//         <div className={this.matchesBgClassName}></div>
//         <div className={this.matchesTable}></div>
//       </div>
//     );
//   };

//   render() {
//     return <>{this.updatePage()}</>;
//   }

export default function Matches() {
  return (
    <div className="matches">
      <div className="matches__bg"></div>
      <div className="matches__table"></div>
    </div>
  );
}
