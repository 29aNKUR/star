import React, { useState } from "react";

const StarRating = (props) => {
  let limit = props.limit || 5;
  const [rating, setRating] = useState(props.rating || 2);

  const handleRating = (e) => {
    // console.log(e.target.dataset.value)
    setRating(e.target.dataset.value);
  };
  return (
    <div onClick={handleRating}>
      {/* event delegation */}
      {/* arr.keys() - array iterator */}
      {[...new Array(limit).keys()].map((i) => {
        return (
          <span
          style={{cursor:'pointer'}}
            key={i}
            data-value={i + 1}
          >{i < rating ? '😄' : '😞'}</span>
        );
      })}
    </div>
  );
};

export default StarRating;
