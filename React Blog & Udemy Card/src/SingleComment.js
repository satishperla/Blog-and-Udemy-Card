import React from "react";

function SingleComment(props) {
  return (
    <div className="ui comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img src={props.profile} alt="profile" />
        </a>
        <div className="content">
          <a href="/" className="author">
            {props.name}
          </a>
          <div className="metadata">
            <span className="date">{props.date}</span>
          </div>
          <div className="text">{props.comment}</div>
        </div>
      </div>
    </div>
  );
}

export default SingleComment;
