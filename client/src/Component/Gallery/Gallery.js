import React, { useState } from "react";
import "./Gallery.css";
import Footer from "../Footer/Footer";
import GalleryPop from "./GalleryPop";
import outdoor1 from "../../Assets/outdoor1.jpg";
import Outdoor2 from "../../Assets/Outdoor2.jpg";
import bornfire from "../../Assets/bornfire.jpg";
import pool from "../../Assets/pool.jpg";
import superiorKing1 from "../../Assets/superiorKing1.jpg";
import gameroom from "../../Assets/gameroom.jpg";
import resto from "../../Assets/resto.jpg";
import executivePool from "../../Assets/executivePool.jpg";
import executive2 from "../../Assets/executive2.jpg";
import executiveBathTub from "../../Assets/executiveBathTub.jpg";
import spa from "../../Assets/spa.jpg";
import superiorQueen from "../../Assets/superiorQueen.jpg";
import skyview1 from "../../Assets/skyview1.jpg";
import skyview2 from "../../Assets/skyview2.jpg";
import hotel1 from "../../Assets/hotel1.jpg";
import clean1 from "../../Assets/clean1.jpg";
import clean2 from "../../Assets/clean2.jpg";
import clean3 from "../../Assets/clean3.jpg";

const Gallery = () => {
  const [galleryPopup, setGalleryPopup] = useState(false);
  const [galleryPopup2, setGalleryPopup2] = useState(false);
  const [galleryPopup3, setGalleryPopup3] = useState(false);
  const [galleryPopup4, setGalleryPopup4] = useState(false);
  const [galleryPopup5, setGalleryPopup5] = useState(false);
  const [galleryPopup6, setGalleryPopup6] = useState(false);
  const [galleryPopup7, setGalleryPopup7] = useState(false);
  const [galleryPopup8, setGalleryPopup8] = useState(false);
  const [galleryPopup9, setGalleryPopup9] = useState(false);
  const [galleryPopup10, setGalleryPopup10] = useState(false);
  const [galleryPopup11, setGalleryPopup11] = useState(false);
  const [galleryPopup12, setGalleryPopup12] = useState(false);
  const [galleryPopup13, setGalleryPopup13] = useState(false);
  const [galleryPopup14, setGalleryPopup14] = useState(false);
  const [galleryPopup15, setGalleryPopup15] = useState(false);
  const [galleryPopup16, setGalleryPopup16] = useState(false);
  const [galleryPopup17, setGalleryPopup17] = useState(false);
  const [galleryPopup18, setGalleryPopup18] = useState(false);

  return (
    <div className="gallery">
      <div class="gallery_new">
        <div class="gallery__content">
          <h1 className="animate-hero">Gallery</h1>
        </div>
      </div>
      <div class="image-gallery">
        <div className="image-box">
          <img
            src={skyview1}
            alt="img.jpg"
            onClick={() => setGalleryPopup13(true)}
          />
          <GalleryPop
            trigger={galleryPopup13}
            setTrigger={setGalleryPopup13}
            className="gallery_popup_container"
          >
            <div>
              <img src={skyview1} alt="" />
            </div>
          </GalleryPop>
        </div>
        <div className="image-box">
          <img
            src={Outdoor2}
            alt="img.jpg"
            onClick={() => setGalleryPopup(true)}
          />
          <GalleryPop
            trigger={galleryPopup}
            setTrigger={setGalleryPopup}
            className="gallery_popup_container"
          >
            <div>
              <img src={Outdoor2} alt="" />
            </div>
          </GalleryPop>
        </div>
        <div className="image-box">
          <img
            src={bornfire}
            alt="img.jpg"
            onClick={() => setGalleryPopup2(true)}
          />
          <GalleryPop
            trigger={galleryPopup2}
            setTrigger={setGalleryPopup2}
            className="gallery_popup_container"
          >
            <div>
              <img src={bornfire} alt="" />
            </div>
          </GalleryPop>
        </div>
        <div className="image-box">
          <img
            src={pool}
            alt="img.jpg"
            onClick={() => setGalleryPopup3(true)}
          />
          <GalleryPop
            trigger={galleryPopup3}
            setTrigger={setGalleryPopup3}
            className="gallery_popup_container"
          >
            <div>
              <img src={pool} alt="" />
            </div>
          </GalleryPop>
        </div>
        <div class="image-box">
          <img
            src={outdoor1}
            alt="img.jpg"
            onClick={() => setGalleryPopup4(true)}
          />
          <GalleryPop
            trigger={galleryPopup4}
            setTrigger={setGalleryPopup4}
            className="gallery_popup_container"
          >
            <div>
              <img src={outdoor1} alt="" />
            </div>
          </GalleryPop>
        </div>
        <div class="image-box">
          <img
            src={skyview2}
            alt="img.jpg"
            onClick={() => setGalleryPopup14(true)}
          />
          <GalleryPop
            trigger={galleryPopup14}
            setTrigger={setGalleryPopup14}
            className="gallery_popup_container"
          >
            <div>
              <img src={skyview2} alt="" />
            </div>
          </GalleryPop>
        </div>
        <div class="image-box">
          <img
            src={superiorKing1}
            alt="img.jpg"
            onClick={() => setGalleryPopup5(true)}
          />
          <GalleryPop
            trigger={galleryPopup5}
            setTrigger={setGalleryPopup5}
            className="gallery_popup_container"
          >
            <div>
              <img src={superiorKing1} alt="" />
            </div>
          </GalleryPop>
        </div>
        <div class="image-box">
          <img
            src={hotel1}
            alt="img.jpg"
            onClick={() => setGalleryPopup15(true)}
          />
          <GalleryPop
            trigger={galleryPopup15}
            setTrigger={setGalleryPopup15}
            className="gallery_popup_container"
          >
            <div>
              <img src={hotel1} alt="" />
            </div>
          </GalleryPop>
        </div>
        <div class="image-box">
          <img
            src={gameroom}
            alt="img.jpg"
            onClick={() => setGalleryPopup6(true)}
          />
          <GalleryPop
            trigger={galleryPopup6}
            setTrigger={setGalleryPopup6}
            className="gallery_popup_container"
          >
            <div>
              <img src={gameroom} alt="" />
            </div>
          </GalleryPop>
        </div>
        <div class="image-box">
          <img
            src={resto}
            alt="img.jpg"
            onClick={() => setGalleryPopup7(true)}
          />
          <GalleryPop
            trigger={galleryPopup7}
            setTrigger={setGalleryPopup7}
            className="gallery_popup_container"
          >
            <div>
              <img src={resto} alt="" />
            </div>
          </GalleryPop>
        </div>
        <div class="image-box">
          <img
            src={clean1}
            alt="img.jpg"
            onClick={() => setGalleryPopup16(true)}
          />
          <GalleryPop
            trigger={galleryPopup16}
            setTrigger={setGalleryPopup16}
            className="gallery_popup_container"
          >
            <div>
              <img src={clean1} alt="" />
            </div>
          </GalleryPop>
        </div>
        <div class="image-box">
          <img
            src={executivePool}
            alt="img.jpg"
            onClick={() => setGalleryPopup8(true)}
          />
          <GalleryPop
            trigger={galleryPopup8}
            setTrigger={setGalleryPopup8}
            className="gallery_popup_container"
          >
            <div>
              <img src={executivePool} alt="" />
            </div>
          </GalleryPop>
        </div>
        <div class="image-box">
          <img
            src={executive2}
            alt="img.jpg"
            onClick={() => setGalleryPopup9(true)}
          />
          <GalleryPop
            trigger={galleryPopup9}
            setTrigger={setGalleryPopup9}
            className="gallery_popup_container"
          >
            <div>
              <img src={executive2} alt="" />
            </div>
          </GalleryPop>
        </div>
        <div class="image-box">
          <img
            src={clean3}
            alt="img.jpg"
            onClick={() => setGalleryPopup18(true)}
          />
          <GalleryPop
            trigger={galleryPopup18}
            setTrigger={setGalleryPopup18}
            className="gallery_popup_container"
          >
            <div>
              <img src={clean3} alt="" />
            </div>
          </GalleryPop>
        </div>
        <div class="image-box">
          <img
            src={clean2}
            alt="img.jpg"
            onClick={() => setGalleryPopup17(true)}
          />
          <GalleryPop
            trigger={galleryPopup17}
            setTrigger={setGalleryPopup17}
            className="gallery_popup_container"
          >
            <div>
              <img src={clean2} alt="" />
            </div>
          </GalleryPop>
        </div>
        <div className="image-box">
          <img
            src={executiveBathTub}
            alt="img.jpg"
            onClick={() => setGalleryPopup10(true)}
          />
          <GalleryPop
            trigger={galleryPopup10}
            setTrigger={setGalleryPopup10}
            className="gallery_popup_container"
          >
            <div>
              <img src={executiveBathTub} alt="" />
            </div>
          </GalleryPop>
        </div>
        <div className="image-box">
          <img
            src={executiveBathTub}
            alt="img.jpg"
            onClick={() => setGalleryPopup10(true)}
          />
          <GalleryPop
            trigger={galleryPopup10}
            setTrigger={setGalleryPopup10}
            className="gallery_popup_container"
          >
            <div>
              <img src={executiveBathTub} alt="" />
            </div>
          </GalleryPop>
        </div>
        <div className="image-box">
          <img
            src={spa}
            alt="img.jpg"
            onClick={() => setGalleryPopup11(true)}
          />
          <GalleryPop
            trigger={galleryPopup11}
            setTrigger={setGalleryPopup11}
            className="gallery_popup_container"
          >
            <div>
              <img src={spa} alt="" />
            </div>
          </GalleryPop>
        </div>
        <div className="image-box">
          <img
            src={superiorQueen}
            alt="img.jpg"
            onClick={() => setGalleryPopup12(true)}
          />
          <GalleryPop
            trigger={galleryPopup12}
            setTrigger={setGalleryPopup12}
            className="gallery_popup_container"
          >
            <div>
              <img src={superiorQueen} alt="" />
            </div>
          </GalleryPop>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
