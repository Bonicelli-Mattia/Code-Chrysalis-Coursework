import React from "react";
import "../styles/photos.css";

export default function AllPhotos({ photos, getSinglePhoto }) {
  return (
    <>
      <div className="all-photos">
        {photos.map((photo, photoIndex) => {
          return (
            <img
              src={"data:image/png;base64," + photo}
              key={photoIndex}
              alt="broken"
              onClick={() => {
                getSinglePhoto(photoIndex);
              }}
            />
          );
        })}
      </div>
    </>
  );
}
