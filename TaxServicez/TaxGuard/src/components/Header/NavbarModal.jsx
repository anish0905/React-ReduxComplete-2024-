import React from "react";

const NavbarModule = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  // Divide data into chunks of 7 items
  const columns = data.reduce((acc, val, index) => {
    if (index % 7 === 0) {
      acc.push([]);
    }
    acc[acc.length - 1].push(val);
    return acc;
  }, []);

  return (
    <div className="navbar-modal">
      <div className="navbar-content">
        <button onClick={onClose} className="close-button">
          Close
        </button>
        <div className="navbar-columns" style={{ display: "flex" }}>
          {columns.map((column, columnIndex) => (
            <ul
              key={columnIndex}
              className="navbar-list"
              style={{ marginRight: "20px" }}
            >
              {column.map((val, index) => (
                <li key={index}>{val}</li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavbarModule;
