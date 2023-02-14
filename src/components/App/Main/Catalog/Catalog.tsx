import CatalogCard from "./CatalogCard/CatalogCard";
import { catalogData } from "../../../../utils/memorials";
import { ICatalogProps } from "../../../../utils/interfaces";

function Catalog(props:ICatalogProps) {
  return (
    <section className="services" id={"services"}>
      <h2 className="services__title">Каталог памятников</h2>

      <ul className="services__catalog">
        {catalogData.map((catalogCard, index) => {
          return (
            <CatalogCard
              onImageClick={props.onImageClick}
              catalogCard={catalogCard}
              key={index}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default Catalog;
