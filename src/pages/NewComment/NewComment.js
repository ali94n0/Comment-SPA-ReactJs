import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { postNewComment } from "../../Services/postNewCommentService";
import "./newComment.css";
const NewComment = ({ addNewComment }) => {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    body: "",
  });

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };
  const postCommentHandler = async (comment) => {
    try {
      await postNewComment({
        ...comment,
        postId: 1,
      });
      navigate("/");
      toast.success("you'r comment added successfully!");
    } catch (error) {
      console.log(error);
    }
  };
  const addComment = (e) => {
    e.preventDefault();
    if (!comment.name || !comment.email || !comment.body)
      return toast.error("enter your data!");
    postCommentHandler(comment);
    e.target.reset();
    setComment({
      name: "",
      email: "",
      body: "",
    });
  };

  return (
    <div className="newComment">
      <h2>Add New Comment</h2>
      <form
        onSubmit={(e) => {
          addComment(e);
        }}
      >
        <div className="formControl">
          <label>Name</label>
          <input type="text" onChange={changeHandler} name="name"></input>
        </div>
        <div className="formControl">
          <label>Email</label>
          <input type="email" onChange={changeHandler} name="email"></input>
        </div>
        <div className="formControl">
          <label>Content</label>
          <textarea onChange={changeHandler} name="body"></textarea>
        </div>
        <button type="submit">add new comment</button>
      </form>
    </div>
  );
};

export default NewComment;
