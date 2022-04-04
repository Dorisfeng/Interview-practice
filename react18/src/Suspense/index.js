import { useState, Suspense } from "react";
import User from "./components/User";
import Num from "./components/Num";
import { fetchData } from "./fetch";
import ErrorBoundaryPage from "./ErrorBoundary";

const initialResource = fetchData();

export default function SuspensePage() {
  const [resource, setResource] = useState(initialResource);

  return (
    <div>
      <h3>SuspensePage</h3>
      <ErrorBoundaryPage fallback={<h1>网络出错了</h1>}>
        <Suspense fallback={<h1>loading - user</h1>}>
          <User resource={resource} />
        </Suspense>
      </ErrorBoundaryPage>

      <Suspense fallback={<h1>loading-num</h1>}>
        <Num resource={resource} />
      </Suspense>

      <button onClick={() => setResource(fetchData())}>refresh</button>
    </div>
  );
}
