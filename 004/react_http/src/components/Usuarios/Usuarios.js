import React, { useEffect, useState } from 'react'

import AdicionarUsuario from '../AdicionarUsuario/AdicionarUsuario'
import Usuario from '../Usuario/Usuario'

function Usuarios(props) {
  
  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
     console.log('UseEffect...')
     fetch('https://reqres.in/api/users')
        .then(resposta => {
           return resposta.json()
        })
        .then(dados => {
           //console.log(dados.data)
    
           const usuarios = dados.data.map(cada => (
              {
                 id: cada.id, nome: cada.first_name, sobrenome: cada.last_name, email: cada.email
              }
           ))
           
           //console.log(usuarios)
           setUsuarios(usuarios)
        })
 
  }, [])

  const adicionarUsuario = (usuario) => {
     setUsuarios((atuais) => [atuais, usuario])
  }

  const removerUsuario = (usuario) => {
    if (window.confirm(`Tem certeza que deseja remover "${usuario.nome} ${usuario.sobrenome}"?`)) {
      fetch(`https://reqres.in/api/users/${usuario.id}`, { method: 'DELETE' })
         .then(resposta => {
            if (resposta.ok) {
              setUsuarios(usuarios.filter(x => x.id !== usuario.id))
            }
         })
    }
  }
  
  console.log('render...')
  return (
    <>
      <AdicionarUsuario adicionarUsuario={adicionarUsuario} />
      {usuarios.map((usuario, i) => (
         <Usuario key={i}
           usuario={usuario}
           removerUsuario={() => removerUsuario(usuario)}
         />
       ))}
    </>
  )
  
}

export default Usuarios