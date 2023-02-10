import ServicesCard from "./ServicesCard/ServicesCard";

function Services(props:any) {
  return (
    <section className="services" id={"grave"}>
      <h2 className="services__title">Примеры благоустройств</h2>
      <p className="services__subtitle">Помогу вам с любой задачей</p>

      <ul className="services__catalog">
        {props.servicesData.map((servicesCard:any, index:any) => {
          return <ServicesCard servicesCard={servicesCard} key={index} />;
        })}
      </ul>
    </section>
  );
}

export default Services;
