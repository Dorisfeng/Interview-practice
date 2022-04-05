import { Suspense, useTransition, useState, useId } from "react";
import User from "./components/User";
import Num from "./components/Num";
import { fetchData } from "./fetch";
const initialResource = fetchData();

export default function Demo() {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState("photos");
  const [resource, setResource] = useState(initialResource);

  function handleClick() {
    startTransition(() => {
      setTab("comments");
      setResource(fetchData());
    });
  }
  return (
    <div>
      <Suspense fallback={"loading..."}>
        <div style={{ opacity: isPending ? 0.8 : 1 }}>
          {tab === "photos" ? (
            <User resource={resource} />
          ) : (
            <Num resource={resource} />
          )}
        </div>
      </Suspense>
      <button id={useId()} onClick={handleClick}>
        change
      </button>
    </div>
  );
}
