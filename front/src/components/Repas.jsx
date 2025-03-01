import React, { useState, useEffect } from 'react'

const Saisie = ({ handleSubmit, handleChange, handleImgChange }) => {

  return (
    <form className='card' onSubmit={handleSubmit}>
        <input type='text' name="visuel"  onChange={handleImgChange} id="img-plat" placeholder="  Visuel"></input>
        <input type='text' name="name" required onChange={handleChange} id="name-plat" placeholder="  Votre plat"></input>
        <button>ENVOYER</button>
    </form>
  )
}

const Display = ({ plat, img }) => {

  const [ picture, setPicture ] = useState("");
  const [ noPicture, setNoPicture ] = useState('https://img.freepik.com/psd-gratuit/conception-du-logo-du-restaurant_23-2151249852.jpg')

  useEffect(() => {

    if(img!=undefined) {
      setPicture(img)
    }  
    else {
      setPicture(noPicture)
    }

  }, [img])


  return (
    <div className='card'>
      <img 
        src={picture}
        width="90%"
        height="50%"
        alt=''></img>
      <p>{plat}</p>
      <div className='buttons'>
        <button id='modify'></button>       
        <button id='delete'></button>
      </div>

    </div>
  )

}

const Repas = () => {

  const [repasIsDefined, setRepasIsDefined] = useState(false);
  const [plat, setPlat] = useState('');
  const [img, setImg] = useState(undefined);

  const handleChange = (e) => {
    setPlat(e.target.value);
  }

  const handleImgChange = (e) => {
    setImg(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setRepasIsDefined(true);
  };



  return (

    <>
          {!repasIsDefined ? 
          < Saisie handleSubmit={handleSubmit} handleChange={handleChange} handleImgChange={handleImgChange} /> 
          : 
          < Display plat={plat} img={img} />}
    </>
   
  )
}

export default Repas
