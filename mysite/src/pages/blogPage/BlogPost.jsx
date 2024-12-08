import { useNavigate } from "react-router-dom";
import EmptyComp from "../../components/EmptyComp/EmptyComp";
import ScrollToTop from "../../components/ScrollToTop";
import "./blog.css";
import CommentSection from "./CommentSection";

export default function BlogPost({ postId }) {
  const navigate = useNavigate();

  const [post, setPost] = useState({});
  const [likeCount, setLikeCount] = useState(0);
  const [loveCount, setLoveCount] = useState(0);

  useEffect(() => {
    // Fetch post details
    axios.get(`/api/post/${postId}`).then((response) => {
      setPost(response.data.post);
      setLikeCount(response.data.likes.like);
      setLoveCount(response.data.likes.love);
    });
  }, [postId]);

  const handleReaction = (type) => {
    axios.post(`/api/post/${postId}/react`, { type }).then((response) => {
      if (type === "like") setLikeCount((prev) => prev + 1);
      else setLoveCount((prev) => prev + 1);
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
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          <div className="reaction-buttons">
            <button onClick={() => handleReaction("like")}>
              👍 Like ({likeCount})
            </button>
            <button onClick={() => handleReaction("love")}>
              ❤️ Love ({loveCount})
            </button>
          </div>
          <CommentSection postId={postId} />
        </div>
      </div>
    </div>
  );
}
