
import React from "react";

export const Card = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        {props.text}
      </div>
      <div className="card-footer" />
    </div>
  )
}