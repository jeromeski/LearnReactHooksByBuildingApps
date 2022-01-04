import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { FaPlus, FaMinus, FaHome, FaAddressBook } from "react-icons/fa";
import "./styles.css";

const useAxios = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return users;
};

const IconButton = ({ icon, title }) => (
  <button>
    {icon} {title}
  </button>
);

const CTAButton = ({ children }) => {
  return <button>{children}</button>;
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <div className="btn-wrapper">
    <IconButton icon={<FaHome />} title="Home" />
    <IconButton icon={<FaAddressBook />} title="Address" />
    <CTAButton>
      <FaPlus /> Plus
    </CTAButton>
    <CTAButton>
      <FaMinus /> Minus
    </CTAButton>
  </div>,
  rootElement
);
