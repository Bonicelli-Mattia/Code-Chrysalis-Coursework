import React, { useState, useEffect } from "react";
import "../styles/styles.css";
import Navbar from "./Navbar.jsx";
import AllPhotos from "./AllPhotos.jsx";
import SinglePhoto from "./SinglePhoto.jsx";
import "../utils/index.js";
import { listObjects, getSingleObject } from "../utils/index.js";

export default function App() {
  const [currentView, setCurrentView] = useState("allPhotos");
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState("");

  async function displayPhotos() {
    let temp = [];
    let list = await listObjects(20);
    for (let obj of list) {
      temp.push(await getSingleObject(obj.Key));
    }
    setPhotos(temp);
  }

  function getSinglePhoto(photoIndex) {
    setSelectedPhoto(photos[photoIndex]);
    setCurrentView("Whatever we want");
  }

  useEffect(() => {
    displayPhotos();
  }, []);

  let state;
  if (currentView === "allPhotos") {
    state = <AllPhotos photos={photos} getSinglePhoto={getSinglePhoto} />;
  } else {
    state = <SinglePhoto selectedPhoto={selectedPhoto} />;
  }

  return (
    <>
      <div className="app">
        <Navbar setCurrentView={setCurrentView} displayPhotos={displayPhotos} />
        {state}
      </div>
    </>
  );
}
