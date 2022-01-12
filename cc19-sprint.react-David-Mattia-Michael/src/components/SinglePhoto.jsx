import React from "react";
import "../styles/photo.css";

export default function SinglePhoto({ selectedPhoto }) {
  return (
    <>
      <div className="single-photo">
        <img
          src={"data:image/png;base64," + selectedPhoto}
          className="selectedPhoto"
          alt="I'm a thing"
        ></img>
      </div>
    </>
  );
}
