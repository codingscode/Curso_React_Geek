import React from 'react'



const AdicionaCliente = () => {
   return (
      <>
         <h1>Cadastro de Clientes</h1>
   
         <form>
            <div className="form-group">
               <label htmlFor="nome">Nome</label>
               <input id="nome" name="nome" type="text" />
            </div>
            <div className="form-group">
               <label htmlFor="email">Email</label>
               <input id="email" name="email" type="email" />
            </div>
            <div className="form-group">
               <label htmlFor="date">Data de Nascimento</label>
               <input id="nascimento" name="nascimento" type="date" />
            </div>
            <button type="submit">Adicionar</button>
         </form>
      </>
   )
}

export default AdicionaCliente
