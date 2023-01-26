import React from "react";
import { Link } from "react-router-dom";
import ViewerLikedCard from "./ViewersLikedCard";

const ViewersAlsoLikedSection = ({ viewersLikedData }) => {
  return (
    <>
      {viewersLikedData.map((el) => {
        return (
          <div>
            <Link to={`/details/${el.id}`}><ViewerLikedCard key={el.id} el={el} /></Link>
          </div>
        );
      })}
    </>
  );
};

export default ViewersAlsoLikedSection;
