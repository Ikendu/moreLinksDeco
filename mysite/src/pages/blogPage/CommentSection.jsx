import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentSection = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    axios.get(`/api/post/${postId}/comments`).then((response) => {
      setComments(response.data.comments);
    });
  }, [postId]);

  const addComment = () => {
    axios
      .post(`/api/post/${postId}/comment`, { comment: newComment })
      .then((response) => {
        setComments((prev) => [...prev, response.data.comment]);
        setNewComment("");
      });
  };

  return (
    <div className="comment-section">
      <h3>Comments</h3>
      <div className="comment-input">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
        />
        <button onClick={addComment}>Submit</button>
      </div>
      <ul className="comments-list">
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.username}:</strong> {comment.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;
