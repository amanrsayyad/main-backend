import React from "react";
import "./Popups.css";

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup_inner">
        <i
          class="fas fa-times popup_close"
          onClick={() => props.setTrigger(false)}
        />
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
