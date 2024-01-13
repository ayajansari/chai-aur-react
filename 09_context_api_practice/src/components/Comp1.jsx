import React, { useContext } from "react";
import Comp3 from "./Comp3";
import MyContext from "../context/MyContext";

function Comp1() {
  const { user } = useContext(MyContext);
  return (
    <>
      <div style={{ border: "5px solid gray" }}>
        <h2>Components 1 </h2>
        <h3>
          Global User's name:{user.username} and password :{user.password}
        </h3>
        <Comp3 />
      </div>
    </>
  );
}
export default Comp1;
