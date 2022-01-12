import React, { useRef } from "react";
import "../styles/upload.css";

export default function Upload({ uploadFile }) {
  const fileInput = useRef();

  function uploadOnClick() {
    fileInput.current.click();
  }

  function actuallyUploadFile(event) {
    let file = event.target.files[0];
    uploadFile(file);
  }

  return (
    <>
      <button className="file-upload" onClick={uploadOnClick}>
        UPLOAD
      </button>
      <input
        type="file"
        id="fileInput"
        ref={fileInput}
        onChange={actuallyUploadFile}
      />
    </>
  );
}
