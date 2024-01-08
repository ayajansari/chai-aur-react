import React from "react";
import { defer } from "react-router-dom";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams(); //here we can use userid as we have specified it in main.jsx
  return (
    <>
      <h2 className="bg-gray-700 text-white text3xl p-4">User : {userid}</h2>
    </>
  );
}

export default User;
