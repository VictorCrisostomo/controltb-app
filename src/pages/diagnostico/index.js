// import React from 'react'

import { BsFillPlayFill } from "react-icons/bs";

import microscopio from "../../img/icons/microscopio.png";

const Diagnostico = () => {
  return (
    <main className="Container">
      <div className="Cards">
        <div className="TopTitleCard">
          <div className="imgToptitleCard">
            <img style={{width: '2em'}} src={microscopio} alt="" />
          </div>
          <div className="textToptitleCard">
            <h2>Diagnostico</h2>
          </div>
        </div>
        <button className="btnAudio">Audio descrição <BsFillPlayFill /></button>
      </div>
    </main>
  )
}

export default Diagnostico