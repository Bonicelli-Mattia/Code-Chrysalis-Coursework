import React from "react";
import "../styles/navbar.css";
import Upload from "./Upload.jsx";
import { saveObject } from "../utils/index.js";

export default function Navbar({ setCurrentView, displayPhotos }) {
  function viewDefaulter() {
    setCurrentView("allPhotos");
    displayPhotos();
  }

  function uploadFile(file) {
    saveObject(file);
  }

  return (
    <>
      <div id="flex-container">
        <a href="#" className="navbar" onClick={viewDefaulter}>
          Home
        </a>
        <Upload uploadFile={uploadFile} />
      </div>
    </>
  );
}
