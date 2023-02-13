import { useState } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import ImagePopup from "./ImagePopup/ImagePopup";
import {
  portfolioImages,
  questionsDataList,
  servicesData,
} from "../../utils/constants";
import ScrollUp from "./ScrollUp/ScrollUp";
import Topnav from "./Topnav/Topnav";

function App() {
  const [isToggleBurger, setIsToggleBurger] = useState(false);
  const [selectedImage, setSelectedImage] = useState({});

  function handleToggleBurger() {
    setIsToggleBurger(!isToggleBurger);
  }

  function closeAllPopups() {
    setSelectedImage(false);
  }

  function handleOverlayClick(e: Event) {
    (e.currentTarget === e.target ||
      (e.target as HTMLElement).classList.contains("swiper-slide")) &&
      closeAllPopups();
  }

  function handleImageClick(imageSrc: any) {
    imageSrc.isOpen = true;
    setSelectedImage(imageSrc);
  }

  return (
    <div className="page">
      <Header />
      <Topnav
        isToggleBurger={isToggleBurger}
        onToggleBurger={handleToggleBurger}
      />
      <Main
        portfolioImages={portfolioImages}
        servicesData={servicesData}
        questionsDataList={questionsDataList}
        onImageClick={handleImageClick}
      />
      <Footer />
      <ScrollUp />
      <ImagePopup
        portfolioImage={selectedImage}
        onClose={closeAllPopups}
        onOverlayClose={handleOverlayClick}
        name="image-viewing"
      />
    </div>
  );
}

export default App;
