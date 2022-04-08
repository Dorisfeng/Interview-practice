const Demo = () => {
  return (
    <section onClick={(e) => console.log("click section")}>
      <h3>你好</h3>
      <button
        ONCLICK={(e) => {
          // e.stopPropagation();
          console.log("click button");
        }}
      >
        点击
      </button>
    </section>
  );
};

export default Demo;
