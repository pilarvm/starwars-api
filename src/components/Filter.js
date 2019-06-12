import React, { useState } from 'react';


// import { Link } from "react-router-dom";
const Filter = ({ data }) => {
  const [filter, setFilter] = useState([]);

  const filterCharacter = data.filter((character) => {
    return character.name.toLowerCase().indexOf(filter) !== -1;
  });

  return (
    <div>
      <input onChange={e => setFilter(e.currentTarget.value)} className="center justify-content-center input l5 white-text" type="text" placeholder="BUSCAR" />
      <div className="container">
        <div className="m5">
          <p className="white-text center">RESULTADOS</p>
        </div>
        <div className="row">
          <div>
            {filterCharacter.map(ele => (

              <div key={ele.name} className="card blue col s12 m5" style={{ margin: "1rem" }} >
                <div className="card-content white-text">

                  <div className="card-title">
                    <h5>
                      {ele.name}
                    </h5>
                    <div className="card-action white-text">
                      <a href="#">VER DETALLE</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Filter; 