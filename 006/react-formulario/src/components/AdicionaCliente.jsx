import React from 'react'
import { Formik } from 'formik'



const AdicionaCliente = () => {
   return (
      <>
         <h1>Cadastro de Clientes</h1>
   
         <Formik initialValues={{ nome: 'Mel', email: 'mel@gmail.com', nascimento: '11/09/2019' }} onSubmit={(values) => {
            alert(JSON.stringify(values))
         }} >
            {(props) => (
               <form onSubmit={props.handleSubmit} noValidate >
                  <div className="form-group">
                     <label htmlFor="nome">Nome</label>
                     <input type="text" id="nome" name="nome" value={props.values.nome} onChange={props.handleChange} />
                  </div>
                  <div className="form-group">
                     <label htmlFor="email">Email</label>
                     <input type="email" id="email" name="email" value={props.values.email} onChange={props.handleChange} />
                  </div>
                  <div className="form-group">
                     <label htmlFor="date">Data de Nascimento</label>
                     <input type="date" id="nascimento" name="nascimento" value={props.values.nascimento} onChange={props.handleChange} />
                  </div>
                  <button type="submit">Adicionar</button>
               </form>
            )}
         </Formik>
      </>
   )
}

export default AdicionaCliente
