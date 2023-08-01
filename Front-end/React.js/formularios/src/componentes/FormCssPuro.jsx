import React from 'react'
import '../estilos/estilos-form.css'
const FormCssPuro = () => {
  return (

    <div className='conteiner-form'>
        <h3>Formulario</h3>
      <form className='form'>
        <div className="div-group-form">
          <label>Nombre</label>
          <input className='input-text' type="text" placeholder='Ingrese su nombre' />
        </div>
        <div className="div-group-form">
          <label>Contraseña</label>
          <input className='input-text' type="password" />
        </div>
        <div className="div-group-form">
          <label>Seleccion Pais</label>
          <select name="" id="">
            <option value="1">Opcion 1</option>
            <option value="2">Opcion 2</option>
            <option value="3">Opcion 3</option>
            <option value="4">Opcion 4</option>
          </select>
        </div>
        {/* <div className="div-group-form">
            <label>Tipo de tarjeta</label>
            <input type="radio" name="Debito" id="" />
            <input type="radio" name="Credito" id="" />
        </div> */}
        <button className='btn-enviar'>Enviar</button>
      </form>
    </div>

  )
}

export default FormCssPuro