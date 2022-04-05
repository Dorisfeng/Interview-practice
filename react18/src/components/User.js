const User = ({ resource }) => {
  const user = resource.user.read();
  return (
    <div className="wrapper">
      <div>用户：{user.name.first + user.name.last}</div>
    </div>
  );
};

export default User;
