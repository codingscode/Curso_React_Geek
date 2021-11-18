import React from 'react'
import { Formik, Field } from 'formik'



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
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
               errors.email = 'O email é inválido'               
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
                     <Field type="text" id="nome" name="nome" className={props.errors.nome && props.touched.nome ? 'eh-invalido' : '' } />
                     {props.errors.nome &&props.touched.nome ? (<div className="feedback-invalido" >{props.errors.nome}</div>) : null}
                  </div>
                  <div className="form-group">
                     <label htmlFor="email">Email</label>
                     <Field type="email" id="email" name="email" className={props.errors.email && props.touched.email ? 'eh-invalido' : '' } />
                     {props.errors.email &&props.touched.email ? (<div className="feedback-invalido" >{props.errors.email}</div>) : null}
                  </div>
                  <div className="form-group">
                     <label htmlFor="date">Data de Nascimento</label>
                     <Field type="date" id="nascimento" name="nascimento" className={props.errors.nascimento && props.touched.nascimento ? 'eh-invalido' : '' } />
                     {props.errors.nascimento &&props.touched.nascimento ? (<div className="feedback-invalido" >{props.errors.nascimento}</div>) : null}
                  </div>
                  <button type="submit">Adicionar</button>
               </form>
            )}
         </Formik>
      </>
   )
}

export default AdicionaCliente
