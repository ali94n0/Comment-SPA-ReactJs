import { useEffect, useState } from "react";
import Comment from "./Comment/Comment";
import { Link } from "react-router-dom";
import "./comments.css";

// import { render } from "react-dom";
import { toast } from "react-toastify";
import { getAllComments } from "../../Services/getAllCommentsService";
const CommentsList = () => {
  const [comments, setComments] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getComments = async () => {
      try {
        const { data } = await getAllComments();
        setComments(data);
      } catch (error) {
        setError(true);
      }
    };
    getComments();
  }, []);
  const renderComments = () => {
    let renderValue = <p>is loading ...</p>;
    if (error) {
      renderValue = <p>fetching data failed!</p>;
      toast.error("Ops, fetching data failed!");
    }
    if (comments && !error)
      renderValue = comments.map((c) => (
        <Link to={`/comment/${c.id}`} key={c.id}>
          <Comment name={c.name} email={c.email} />
        </Link>
      ));
    return renderValue;
  };
  return (
    <main>
      <section className="allComments">{renderComments()}</section>
    </main>
  );
};

export default CommentsList;
