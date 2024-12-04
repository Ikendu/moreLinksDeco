import { Link } from "react-router-dom";

export default function () {
  return (
    <div>
      <Link
        to={
          "https://wa.me/2348061632276?text=Hello%20there!%20I%20want%20to%20discuss%20with%20you."
        }
        target="_blank"
      >
        <i class="fa-brands fa-whatsapp whatsapp"></i>
      </Link>
    </div>
  );
}
