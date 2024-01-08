import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  //first way of handling api calls
  const [data, setdata] = useState(0);
  fetch("https://api.github.com/users/hiteshchoudhary")
    .then((res) => res.json())
    .then((res) => {
      setdata(res);
    });

  //second way of handling api calls
  //   const data = useLoaderData();
  return (
    <>
      <div className="bg-gray-700 text-white text-3xl p-4">
        Github Followers: {data.followers}
        <img src={data.avatar_url} alt="image" width={300} />
      </div>
    </>
  );
}
export default Github;
