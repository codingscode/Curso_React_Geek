import React from 'react'
import { Formik } from 'formik'



const AdicionaCliente = () => {
   return (
      <>
         <h1>Cadastro de Clientes</h1>
   
         <Formik initialValues={{ nome: '', email: '', nascimento: '' }} validate={(values) => {
            const errors = {}
            if (!values.nome) {
               errors.nome = 'O nome é obrigatório'
            }
            if (!values.email) {
               errors.email = 'O email é obrigatório'
            }
            if (!values.nascimento) {
               errors.nascimento = 'A data de nascimento é obrigatória'
            }
            return errors
         }} onSubmit={(values) => {
            alert(JSON.stringify(values))
         }} >
            {(props) => (
               <form onSubmit={props.handleSubmit} noValidate >
                  <div className="form-group">
                     <label htmlFor="nome">Nome</label>
                     <input type="text" id="nome" name="nome" value={props.values.nome} onChange={props.handleChange} />
                     {props.errors.nome ? (<div className="feedback-invalido" >{props.errors.nome}</div>) : null}
                  </div>
                  <div className="form-group">
                     <label htmlFor="email">Email</label>
                     <input type="email" id="email" name="email" value={props.values.email} onChange={props.handleChange} />
                     {props.errors.email ? (<div className="feedback-invalido" >{props.errors.email}</div>) : null}
                  </div>
                  <div className="form-group">
                     <label htmlFor="date">Data de Nascimento</label>
                     <input type="date" id="nascimento" name="nascimento" value={props.values.nascimento} onChange={props.handleChange} />
                     {props.errors.nascimento ? (<div className="feedback-invalido" >{props.errors.nascimento}</div>) : null}
                  </div>
                  <button type="submit">Adicionar</button>
               </form>
            )}
         </Formik>
      </>
   )
}

export default AdicionaCliente
