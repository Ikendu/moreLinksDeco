import { useNavigate } from "react-router-dom";
import EmptyComp from "../../components/EmptyComp/EmptyComp";
import ScrollToTop from "../../components/ScrollToTop";
import "./blog.css";
export default function BlogPost() {
  const navigate = useNavigate();
  return (
    <div>
      <ScrollToTop />
      <div className="blog">
        <div onClick={() => navigate(-1)}>
          <i class="fa-solid fa-arrow-left fa-beat-fade blogBackIcon"></i>
        </div>
        <EmptyComp />
      </div>
    </div>
  );
}
