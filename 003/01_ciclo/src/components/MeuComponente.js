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
   }

   render() {
      console.log('render...')
      return (
         <div>
            <p>Sou um componente</p>
            <p>{this.state.numero}</p>
            <p>{this.props.titulo}</p>
            <p></p>
         </div>
      )
   }
}

export default MeuComponente