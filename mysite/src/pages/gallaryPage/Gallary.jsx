import EmptyComp from "../../components/EmptyComp/EmptyComp";
import ScrollToTop from "../../components/ScrollToTop";
import "./gallary.css";

export default function Gallary() {
  return (
    <div className="gallary">
      <ScrollToTop />
      <EmptyComp />
    </div>
  );
}
