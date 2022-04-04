const User = ({ resource }) => {
  const list = resource.posts.read();
  console.log("list", list);
  return (
    <div>
      <div>list</div>
    </div>
  );
};

export default User;
