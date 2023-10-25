import React, { useEffect, useState } from 'react'
import '../estilos/FormCssPuro.css'
const FormCssPuro = () => {

  const [nombre, setNombre] = useState('');
  const [errorName, setErrorName] = useState(undefined);

  const [contraseña, setContraseña] = useState('');

  const [lastName, setLastName] = useState('');
  

  function hangleSubmit(e) {
    e.preventDefault();
    console.log("hola");
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);

    setErrorName('El nombre es requerido')
  }


  return (


    <div className='conteiner-form'>
      <h3>Formulario</h3>
      <form className='form' method="post" onSubmit={hangleSubmit}>
        <div className="div-group-form">
          <label className='form-label'>Nombre</label>
          <input className={`input-text ${errorName !== undefined ? 'border-error' : ''}`} value={nombre} name='lastnombre' onChange={e => setNombre(e.target.value)} 
          type="text" placeholder='Ingrese su nombre' />
          {errorName !== undefined ? <span className='errorMessaje'>{errorName}</span> : <></> }
        </div>
        <div className="div-group-form">
          <label className='form-label'>Prueba</label>
          <input className='input-text' value={lastName} name='nombre' onChange={e => setLastName(e.target.value)} 
          type="text" placeholder='Ingrese su nombre' />
          
        </div>
        <div className="div-group-form">
          <label className='form-label'>Contraseña</label>
          <input className='input-text' value={contraseña} name='contraseña' onChange={e => setContraseña(e.target.value)} type="password" placeholder='Ingrese su contraseña' />
        </div>
        <div className="div-group-form">
          <label className='form-label'>Seleccion Pais</label>
          <select name="DatosSelect" defaultValue='2'>
            <option value="1">Opcion 1</option>
            <option value="2">Opcion 2</option>
            <option value="3">Opcion 3</option>
            <option value="4">Opcion 4</option>
          </select>
        </div>
        <div className="div-group-form">
          <label className='form-label'>Tipo de tarjeta</label>
          <label className='form-label-radio'>
            <input type="radio" name="myRadio" value="debito" />
            Debito
          </label>
          <label className='form-label-radio'>
            <input type="radio" name="myRadio" value="credito" />
            Credito  
          </label>
          

        </div>
        <div div className="div-group-form">
          <label className='form-label'>Descripcion</label>
          <textarea name='descripcion' rows={4} defaultValue="texto descriptivo text area " resi />
        </div>
        <button className='btn-enviar'>Enviar</button>
      </form>
    </div>

  )
}

export default FormCssPuro