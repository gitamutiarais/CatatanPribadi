import React from "react";
import Item from "./Item";

const List = ({ notes, hapus, arsip, unArsip, keyword }) => {
  const showActive = notes
    .filter((note) => note.arsipkan === false)
    .filter((note) => {
      return note.title.toLowerCase().includes(keyword.toLowerCase());
    });
  const showArchived = notes
    .filter((note) => note.arsipkan === true)
    .filter((note) => {
      return note.title.toLowerCase().includes(keyword.toLowerCase());
    });

  return (
    <>
      <h2 className="txt_catatan">Catatan</h2>
      <div className="item_list">{showActive.length > 0 ? showActive.map((note) => <Item hapus={hapus} unArsip={unArsip} arsip={arsip} key={note.id} {...note} />) : <p className="item_list_empty-message">Tidak ada catatan</p>}</div>
      <h2 className="txt_arsip">Arsip</h2>
      <div className="item_list">{showArchived.length > 0 ? showArchived.map((note) => <Item hapus={hapus} unArsip={unArsip} arsip={arsip} key={note.id} {...note} />) : <p className="item_list_empty-message">Tidak ada catatan</p>}</div>
    </>
  );
};

export default List;
