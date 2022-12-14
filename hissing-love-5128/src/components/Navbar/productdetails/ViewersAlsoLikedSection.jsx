import React from "react";
import ViewerLikedCard from "./ViewersLikedCard";

const ViewersAlsoLikedSection = ({ viewersLikedData }) => {
  return (
    <>
      {viewersLikedData.map((el) => {
        return (
          <div>
            <ViewerLikedCard key={el.id} el={el} />
          </div>
        );
      })}
    </>
  );
};

export default ViewersAlsoLikedSection;
