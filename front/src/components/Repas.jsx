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

const ButtonDelete = ({ plat, deletePlat }) => {

  return (


    <button id='delete'>
      <img src="https://i.ibb.co/qLnpv7rb/trash.png" 
      width={20} 
      alt="trash" 
      onClick={deletePlat}
      />
    </button> 

  )

}

const Display = ({ plat, img, deletePlat }) => {

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
        <button id='modify'>
          <img src="https://i.ibb.co/dwZfRd1M/pen-1.png" width={20} alt="pen" border="0" />
        </button>       
        < ButtonDelete plat={plat} deletePlat={deletePlat} />
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

  const deletePlat = () => {
    setPlat(''); 
    setRepasIsDefined(false);
  };


  return (

    <>
          {!repasIsDefined ? 
          < Saisie handleSubmit={handleSubmit} handleChange={handleChange} handleImgChange={handleImgChange} /> 
          : 
          < Display plat={plat} img={img}  deletePlat={deletePlat} />}
    </>
   
  )
}

export default Repas
