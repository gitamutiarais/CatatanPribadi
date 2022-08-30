import React from "react";

const Header = ({ cari, keyword }) => {
  return (
    <div className="app_header">
      <h1>Catatan PribadiKu</h1>
      <div className="app_cari">
        <input type="text" placeholder="Cari catatan... " onChange={cari} value={keyword} />
        <i class="bx bx-search-alt"></i>
      </div>
    </div>
  );
};

export default Header;
