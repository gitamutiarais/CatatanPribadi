import React from "react";
import Content from "./Content";
import Action from "./Action";

const Item = ({ id, title, created, body, arsipkan, hapus, arsip, unArsip }) => {
  return (
    <div className="app_item">
      <Content title={title} created={created} body={body} />
      <Action hapus={hapus} arsip={arsip} unArsip={unArsip} id={id} arsipkan={arsipkan} />
    </div>
  );
};

export default Item;
