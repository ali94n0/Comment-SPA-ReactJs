const Comment = ({ name, email, onClick }) => {
  return (
    <div onClick={onClick}>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default Comment;
