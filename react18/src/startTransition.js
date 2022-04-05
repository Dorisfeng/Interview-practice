import { useState, useEffect, Suspense } from "react";
import Button from "./components/Button";
import User from "./components/User";
import Num from "./components/Num";
import { fetchData } from "./fetch";

const initialResource = fetchData();

export default function TransitionPage(props) {
  const [resource, setResource] = useState(initialResource);
  useEffect(() => {
    console.log("resource", resource);
  }, [resource]);

  return (
    <div>
      <h3>Transition</h3>
      <Suspense fallback={<h1 className="wrapper">loading -user</h1>}>
        <User resource={resource} />
      </Suspense>
      <Suspense fallback={<h1 className="wrapper">loading -num</h1>}>
        <Num resource={resource} />
      </Suspense>
      <Button
        refresh={() => {
          setResource(fetchData());
        }}
      />
    </div>
  );
}
