import React from "react";

const Action = ({ id, arsipkan, hapus, arsip, unArsip }) => {
  return (
    <div className="item_action">
      <button className="item_hapus" onClick={() => hapus(id)}>
        Hapus
      </button>
      {arsipkan === false ? (
        <button className="item_arsip" onClick={() => arsip(id)}>
          Arsipkan
        </button>
      ) : (
        <button className="item_arsip" onClick={() => unArsip(id)}>
          Batalkan
        </button>
      )}
    </div>
  );
};

export default Action;
