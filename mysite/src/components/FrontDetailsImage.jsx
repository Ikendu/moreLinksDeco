import React from "react";

export default function FrontDetailsImage({ header, para, reverse, img }) {
  return (
    <div className="imageDetails">
      <div className="pageContent">
        <h3>🎨 Custom Creations, Perfectly Your likeness</h3>
        <p>
          No two events are alike, and neither are our designs. Whether you
          dream of a chic minimalist wedding or a vibrant corporate gala, our
          team works closely with you to craft unique designs that speak to your
          personality and purpose.
        </p>
      </div>
      <img src={image1} alt="" className="serviceIage" />
    </div>
  );
}
