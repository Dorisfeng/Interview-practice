const User = ({ resource }) => {
  return (
    <div>
      <div>用户：{resource.user.read().name}</div>
    </div>
  );
};

export default User;
