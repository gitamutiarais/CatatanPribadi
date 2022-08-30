import React from "react";
import { showFormattedDate } from "../utils/index";

const Content = ({ title, created, body }) => {
  return (
    <div className="item_content">
      <p className="item_title">{title}</p>
      <p className="item_date">{showFormattedDate(created)}</p>
      <p className="item_body">{body}</p>
    </div>
  );
};

export default Content;
