import React from 'react';
import { connect } from 'react-redux';

import { getMessage } from '../actions/getMessage'

class PokemonContainer extends React.Component {
  render(){
    return (
      <div>
        <h1>Hello from PokemonContainer</h1>
        <button onClick={this.props.getMessage}>Click me for fun!</button>
        <h2>{this.props.message.text}</h2>
      </div>
    )

  }
}

let mapStateToProps = state => {
  return {
    message: state.message
  }
}

let mapDispatchToProps = dispatch => {
  return {
    getMessage: () => dispatch(getMessage())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonContainer);
