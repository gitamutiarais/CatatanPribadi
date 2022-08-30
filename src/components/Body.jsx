import React from "react";
import Input from "./Input";
import List from "./List";

const Body = ({ notes, addNote, hapus, arsip, unArsip, keyword }) => {
  return (
    <div className="app_body">
      <Input addNote={addNote} />
      <List notes={notes} hapus={hapus} unArsip={unArsip} arsip={arsip} keyword={keyword} />
    </div>
  );
};

export default Body;
