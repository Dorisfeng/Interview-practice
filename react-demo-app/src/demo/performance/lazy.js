import React, { lazy, Suspense } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./clear"));
const List = lazy(() => import("../autoComplete"));
function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/list">List</Link>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading</div>}>
              <Home />
            </Suspense>
          }
          exact
        />
        <Route
          path="/list"
          element={
            <Suspense fallback={<div>Loading</div>}>
              <List />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
