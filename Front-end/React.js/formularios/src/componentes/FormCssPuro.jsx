import React from 'react'

const FormCssPuro = () => {
  return (
    <form>
      <div className="div-group-form">
            <label>Nombre</label>
            <input type="text"/>
      </div>
      <div className="div-group-form">
          <label>Contraseña</label>
          <input type="password" />
      </div>
      <div className="div-group-form">
            <select name="" id="">
                <option value="1">Opcion 1</option>
                <option value="2">Opcion 1</option>
                <option value="3">Opcion 1</option>
                <option value="4">Opcion 1</option>
            </select>
      </div>
      <div className="div-group-form">

      </div>
      <div className="div-group-form">

      </div>
    </form>
  )
}

export default FormCssPuro