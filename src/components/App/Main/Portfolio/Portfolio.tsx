import PortfolioImage from "./PortfolioImage/PortfolioImage";

function Portfolio(props:any) {
  return (
    <section className="portfolio" id={"portfolio"}>
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__items">
        {props.portfolioImages.map((portfolioImage:any, index:any) => {
          return (
            <PortfolioImage
              portfolioImage={portfolioImage}
              onImageClick={props.onImageClick}
              key={index}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default Portfolio;
