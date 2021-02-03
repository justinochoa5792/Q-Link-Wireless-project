import React from "react";
import { Dropdown } from "react-bootstrap";
const Header = () => {
  return (
    <div className="header">
      <img src="../assets/images/Image5.png" alt="q-link" />
      <div className="drop">
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            Your Q Link
          </Dropdown.Toggle>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            Activity
          </Dropdown.Toggle>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            Shop
          </Dropdown.Toggle>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            Log In
          </Dropdown.Toggle>
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;
