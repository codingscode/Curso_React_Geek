import React, { Component } from 'react'

class MeuComponente extends Component {

   constructor(props) {
       super(props)
       
       this.state = { numero: 5 }
       console.log('constructor...')
       console.log(props)
   }

   static getDerivedStateFromProps(props, state) {
      console.log('getDerivedStateFromProps...')
      console.log(props)
      console.log(state)
      //return { numero: 10 }
      return null
   }

   componentDidMount() {
      console.log('componentDidMount...')
   }

   adicionarNumero() {
      console.log('setState...')
      let numeroAtual = this.state.numero
      numeroAtual += 1
      this.setState({ numero: numeroAtual })
   }

   render() {
      console.log('render...')
      return (
         <div>
            <p>Sou um componente</p>
            <p>{this.state.numero}</p>
            <p>{this.props.titulo}</p>
            <button onClick={this.adicionarNumero.bind(this)} >adicionar numero</button>
         </div>
      )
   }
}

export default MeuComponente