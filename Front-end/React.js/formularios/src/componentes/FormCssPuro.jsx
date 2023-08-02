import React from 'react'
import '../estilos/estilos-form.css'
const FormCssPuro = () => {
  return (

    <div className='conteiner-form'>
        <h3>Formulario</h3>
      <form className='form'>
        <div className="div-group-form">
          <label className='label-form'>Nombre</label>
          <input className='input-text' type="text" placeholder='Ingrese su nombre' />
        </div>
        <div className="div-group-form">
          <label className='label-form'>Contraseña</label>
          <input className='input-text' type="password" placeholder='Ingrese su contraseña' />
        </div>
        <div className="div-group-form">
          <label className='label-form'>Seleccion Pais</label>
          <select name="" id="">
            <option value="1">Opcion 1</option>
            <option value="2">Opcion 2</option>
            <option value="3">Opcion 3</option>
            <option value="4">Opcion 4</option>
          </select>
        </div>
        <div className="div-group-form">
            <label className='label-form'>Tipo de tarjeta</label>
            <div className='conteiner-radio-inp'>
            <input type="radio" name="Debito" id="" />
            <label htmlFor="">Debito</label>
            </div>
            <div className='conteiner-radio-inp'>
            <input type="radio" name="Credito" id="" />
            <label htmlFor="">Credito</label>
            </div>
            
        </div>
        <div div className="div-group-form">
            <label className='label-form'>Descripcion</label>
            <textarea rows={4} >
              Aqui puede ingresar una descripcion si es necesario
            </textarea>
        </div>
        <button className='btn-enviar'>Enviar</button>
      </form>
    </div>

  )
}

export default FormCssPuro