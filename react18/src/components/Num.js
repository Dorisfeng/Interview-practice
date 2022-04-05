const User = ({ resource }) => {
  const num = resource.num.read();

  return (
    <div className="wrapper">
      <div>Num-setTimeout模拟</div>
      <div>{num}</div>
    </div>
  );
};

export default User;
