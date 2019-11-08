import React from "react";
import { useParams } from "react-router-dom";
const Info = ({ find }) => {
  const { id } = useParams();
  return (
    <div>
      <h1>Info</h1>
      <p>{find(id).info}</p>
    </div>
  );
};
export default Info;
