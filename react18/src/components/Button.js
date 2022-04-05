import { startTransition, useTransition } from "react";

export default function Button({ refresh }) {
  const [isPending, startTransition] = useTransition();
  return (
    <div className="wrapper">
      <h3>Button</h3>
      <button
        onClick={() => {
          startTransition(() => refresh());
          // refresh();
        }}
      >
        点击刷新数据
      </button>
      {isPending ? <div>loading。。。</div> : null}
    </div>
  );
}
