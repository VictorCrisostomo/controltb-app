// import React from 'react'

import { BsFillPlayFill } from "react-icons/bs";

import frutas from "../../img/icons/frutas.png";

const Terapianutricional = () => {
  return (
    <main className="Container">
      <div className="Cards">
        <div className="TopTitleCard">
          <div className="imgToptitleCard">
            <img style={{width: '2.3em'}} src={frutas} alt="" />
          </div>
          <div className="textToptitleCard">
            <h2>Terapia nutricional</h2>
          </div>
        </div>
        <button className="btnAudio">Audio descrição <BsFillPlayFill /></button>
      </div>
    </main>
  )
}

export default Terapianutricional