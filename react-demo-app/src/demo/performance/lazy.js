import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./clear"));
const List = lazy(() => import("../autoComplete"));
// function App() {
//   return (
//     <BrowserRouter>
//       <Link to="/">Home</Link>
//       <Link to="/list">List</Link>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <Suspense fallback={<div>Loading</div>}>
//               <Home />
//             </Suspense>
//           }
//           exact
//         />
//         <Route
//           path="/list"
//           element={
//             <Suspense fallback={<div>Loading</div>}>
//               <List />
//             </Suspense>
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// function App() {
//   return (
//     <Suspense fallback={<div>loading</div>}>
//       {Math.random() > 0.2 ? <Home /> : <List />}
//     </Suspense>
//   );
// }
// import React from "react"
import _ from "lodash";

function App() {
  console.log(_.chunk(["a", "b", "c", "d"], 2));
  return <div>App works</div>;
}

export default App;
