import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./fullComment.css";
import { getOneComment } from "../../Services/getOneCommentService";
import { deleteComment } from "../../Services/deleteCommentService";
import { toast } from "react-toastify";
const FullComment = () => {
  const params = useParams();
  const commentId = params.id;
  const navigate = useNavigate();

  const [comment, setComment] = useState(null);
  useEffect(() => {
    if (commentId) {
      getOneComment(commentId)
        .then((response) => {
          setComment(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [commentId]);

  const deleteHandler = async () => {
    try {
      await deleteComment(commentId);
      navigate("/");
      toast.warning("you'r comment deleted!");
    } catch (error) {
      console.log(error);
    }
  };

  if (commentId == null)
    return <p>Want to see FullComment? Select a comment!</p>;

  let commentDetails = <p>want to see comment? select a comment!</p>;
  if (commentId) commentDetails = <p>comments are loading ...</p>;
  if (comment)
    commentDetails = (
      <div className="FullComment">
        <p>{comment.name}</p>
        <p>{comment.email}</p>
        <p>{comment.body}</p>
        <button onClick={deleteHandler}>Delete</button>
        <Link to="/">See All Comments?</Link>
      </div>
    );
  return commentDetails;
};

export default FullComment;
