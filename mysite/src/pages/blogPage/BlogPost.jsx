import { useNavigate } from "react-router-dom";
import EmptyComp from "../../components/EmptyComp/EmptyComp";
import ScrollToTop from "../../components/ScrollToTop";
import "./blog.css";
import CommentSection from "./CommentSection";
import { useEffect, useState } from "react";
import axios from "axios";

export default function BlogPost({ postId }) {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [reactions, setReactions] = useState({});

  // Fetch all posts and their reactions
  useEffect(() => {
    axios.get("http://localhost/deco/posts.php").then((response) => {
      console.log(response);
      setPosts(response.data.posts);

      console.log(posts);

      // Set initial reactions for each post
      const initialReactions = {};
      response?.data?.posts?.forEach((post) => {
        initialReactions[post.id] = {
          like: post.likes.like || 0,
          love: post.likes.love || 0,
        };
      });
      setReactions(initialReactions);
    });
  }, []);

  const handleReaction = (postId, type) => {
    axios.post(`/api/post/${postId}/react`, { type }).then(() => {
      setReactions((prev) => ({
        ...prev,
        [postId]: {
          ...prev[postId],
          [type]: prev[postId][type] + 1,
        },
      }));
    });
  };

  return (
    <div>
      <ScrollToTop />
      <div className="blog">
        <div onClick={() => navigate(-1)}>
          <i class="fa-solid fa-arrow-left fa-beat-fade blogBackIcon"></i>
        </div>
        <div>
          {" "}
          <div className="post-page">
            <h1>Blog Posts</h1>
            {posts?.map((post) => (
              <div key={post.id} className="post-container">
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                <div className="reaction-buttons">
                  <button onClick={() => handleReaction(post.id, "like")}>
                    👍 Like ({reactions[post.id]?.like || 0})
                  </button>
                  <button onClick={() => handleReaction(post.id, "love")}>
                    ❤️ Love ({reactions[post.id]?.love || 0})
                  </button>
                </div>
                <CommentSection postId={post?.id} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
