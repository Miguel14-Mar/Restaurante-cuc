export const MenuListar = () => {
  return (
    <>
      <div className="pt-5 d-flex justify-content-center">
        <div className="col-md-8">
          <table className="table">
            <thead>
              <tr>
                <th style={{width:"5%" }}>No.</th>
                <th style={{width:"30%" }}>Nonbre Plato</th>
                <th style={{width:"25%" }}>Acompañamiento</th>
                <th style={{width:"20%" }}className ="text-center">Precio</th>
                <th style={{width:"20%" }}> Region</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Bandeja paisa</td>
                <td>Con Aguacate</td>
                <td className ="text-center">35000</td>
                <td>Paisa</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Ajiaco</td>
                <td>Con Arroz</td>
                <td className ="text-center">28000</td>
                <td>Andina</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Mute Santanderiano </td>
                <td>Con Arroz</td>
                <td className ="text-center">25000</td>
                <td>Santander</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
