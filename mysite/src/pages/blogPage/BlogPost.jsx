import EmptyComp from "../../components/EmptyComp/EmptyComp";
import ScrollToTop from "../../components/ScrollToTop";
import "./blog.css";
export default function BlogPost() {
  return (
    <div>
      <ScrollToTop />
      <div className="blog">
        <EmptyComp />
      </div>
    </div>
  );
}
