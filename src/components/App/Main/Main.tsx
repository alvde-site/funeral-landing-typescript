import Advertisement from "./Advertisement/Advertisement";
import Competence from "./Competence/Competence";
import Services from "./Services/Services";
import Portfolio from "./Portfolio/Portfolio";
import Working from "./Working/Working";
import Faq from "./Faq/Faq";
import About from "./About/About";
import Reviews from "./Reviews/Reviews";
import Conditions from "./Conditions/Conditions";
import Catalog from "./Catalog/Catalog";
import Calculator from "./Calculator/Calculator";
import { IMainProps } from "../../../utils/interfaces";

function Main(props: IMainProps) {
  return (
    <main className="content">
      <Advertisement />
      <Competence />
      <Catalog onImageClick={props.onImageClick} />
      <Portfolio
        portfolioImages={props.portfolioImages}
        onImageClick={props.onImageClick}
      />
      <Services servicesData={props.servicesData} />
      <Working />
      <Faq questionsDataList={props.questionsDataList} />
      <About />
      <Reviews />
      <Calculator onInfoClick={props.onImageClick} />
      <Conditions />
    </main>
  );
}

export default Main;
