import Resta from "../../../assets/img/restaunante.png";

export const Acerca = () => {
  return (
    <>
      <div className="-100 py-5" style={{ backgroundColor: "#B32821" }}>
        <div className="row">
          <div className="col-md-6">
            <h2 className="display-4 text-white">
              Acerca de Unicosta Fast Food
            </h2>
            <p className="lead text-white">
              ¡Bienvenidos a Unicosta Fast Food! En nuestro restaurante, nos
              dedicamos a ofrecer una experiencia culinaria única con
              ingredientes frescos y recetas auténticas.
            </p>
            <p className="lead text-white">
              Desde nuestra fundación en 2022, hemos sido conocidos por nuestra
              atención al detalle, la calidad de nuestros platos y el ambiente
              acogedor. Nos apasiona brindar a nuestros comensales una
              experiencia gastronómica memorable.
            </p>
          </div>

          <div className="col-md-6">
            <img
              src={Resta}
              alt="Imagen restaurante"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12">
            <h3 className="lead text-white">Nuestra Historia</h3>
            <p className="lead text-white">
              Unicosta Fast Food comenzó con el deseo de ofrecer un espacio
              donde la comida de calidad se combinara con una experiencia de
              servicio excepcional para los estudiantes de la univesidad de la
              costa.
            </p>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12">
            <h3 className="lead text-white">Misión</h3>
            <p className="lead text-white">
              Ofrecer a nuestros clientes una
              experiencia gastronómica de calidad con ingredientes frescos y un
              excelente servicio.
            </p>
            <h3 className="lead text-white">Visión</h3>
            <p className="lead text-white">
              Ser el restaurante líder en la ciudad,
              reconocido por nuestra cocina auténtica y ambiente único.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
