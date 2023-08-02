import React, { useState } from 'react'
import '../estilos/estilos-form.css'
const FormCssPuro = () => {

  const [nombre, setNombre] = useState('');
  const [contraseña, setContraseña] = useState('');


  function hangleSubmit(e) {
    e.preventDefault();
    console.log("hola");
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }


  return (


    <div className='conteiner-form'>
      <h3>Formulario</h3>
      <form className='form' method="post" onSubmit={hangleSubmit}>
        <div className="div-group-form">
          <label className='label-form'>Nombre</label>
          <input className='input-text' value={nombre} name='nombre' onChange={e => setNombre(e.target.value)} 
          type="text" placeholder='Ingrese su nombre' />
          { nombre === '' ? <p>Esto no debe estar vacio</p> : <></> }
        </div>
        <div className="div-group-form">
          <label className='label-form'>Contraseña</label>
          <input className='input-text' value={contraseña} name='contraseña' onChange={e => setContraseña(e.target.value)} type="password" placeholder='Ingrese su contraseña' />
        </div>
        <div className="div-group-form">
          <label className='label-form'>Seleccion Pais</label>
          <select name="DatosSelect" defaultValue='2' id="">
            <option value="1">Opcion 1</option>
            <option value="2">Opcion 2</option>
            <option value="3">Opcion 3</option>
            <option value="4">Opcion 4</option>
          </select>
        </div>
        <div className="div-group-form">
          <label className='label-form'>Tipo de tarjeta</label>
          <label>
            <input type="radio" name="myRadio" value="debito" />
            Option 1
          </label>
          <label>
            <input type="radio" name="myRadio" value="credito" />
            Option 2
          </label>
          

        </div>
        <div div className="div-group-form">
          <label className='label-form'>Descripcion</label>
          <textarea name='descripcion' rows={4} defaultValue="texto descriptivo text area " />
        </div>
        <button className='btn-enviar'>Enviar</button>
      </form>
    </div>

  )
}

export default FormCssPuro