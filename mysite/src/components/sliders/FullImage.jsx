import { useParams } from "react-router-dom";
import "./image.css";

const images = [
  { id: 1, name: first, altText: "" },
  { id: 2, name: third, altText: "" },
  { id: 3, name: image10, altText: "" },
  { id: 4, name: image12, altText: "" },
  { id: 5, name: image13, altText: "" },
  { id: 6, name: image14, altText: "" },
];

export default function FullImage() {
  const { imageId } = useParams();
  return <div className="fullISpace"></div>;
}
