import React from "react";
import "./Gallery.css";

const GalleryPop = (props) => {
  return props.trigger ? (
    <div className="gallery_popup">
      <div className="gallery_inner">
        <i
          className="fas fa-times gallery_pop_close"
          onClick={() => props.setTrigger(false)}
        />
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default GalleryPop;
