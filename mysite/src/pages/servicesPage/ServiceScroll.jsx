import { useEffect } from "react";

export default function ServiceScroll() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}
