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

function App() {
  const [isToggleBurger, setIsToggleBurger] = useState(false);
  const [selectedImage, setSelectedImage] = useState({});

  function handleToggleBurger() {
    setIsToggleBurger(!isToggleBurger);
  }

  function closeAllPopups() {
    setSelectedImage(false);
  }

  function handleOverlayClick(e: any) {
    (e.currentTarget === e.target ||
      e.target.classList.contains("swiper-slide")) &&
      closeAllPopups();
  }

  function handleImageClick(imageSrc: any) {
    imageSrc.isOpen = true;
    setSelectedImage(imageSrc);
  }

  return (
    <div className="page">
      <Header />
      <Main
        isToggleBurger={isToggleBurger}
        onToggleBurger={handleToggleBurger}
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
