import React, { useEffect, useState } from 'react'

const Saisie = () => {

  return (
    <div className='card'>
        <input placeholder="  Visuel"></input>
        <input placeholder="  Votre plat"></input>
         <button>ENVOYER</button>
    </div>
  )
}

const Repas = () => {

  const [nomRepas, setNomRepas] = useState("");

  return (

    <>
          < Saisie />
    </>
   
  )
}

export default Repas
