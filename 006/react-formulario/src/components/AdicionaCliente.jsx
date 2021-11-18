import React from 'react'
import { Formik, Field, useField } from 'formik'



const Campo = ({ label, ...props}) => {
   const [field, meta] = useField(props)



   return (
      <div className="form-group">
         <label htmlFor={props.id} >{label}</label>
         <input {...field} {...props} className={meta.error && meta.touched ? 'eh-invalido' : ''} />
         {meta.error && meta.touched ? (
            <div className="feedback-invalido" >{meta.error}</div>
         ): null}         
      </div>
   )
}


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
                  <Campo type="text" id="nome" name="nome" label="Nome" />
                  <Campo type="email" id="email" name="email" label="Email" />
                  <Campo type="date" id="nascimento" name="nascimento" label="Data de Nascimento" />
                  <button type="submit">Adicionar</button>
               </form>
            )}
         </Formik>
      </>
   )
}

export default AdicionaCliente
