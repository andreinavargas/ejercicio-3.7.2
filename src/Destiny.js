import React, { Component } from 'react';


class Destiny extends Component {
  render() {
    return (
      <select onChange={onChangeListener}>
        <option> Buenos Aires </option>
        <option> Sydney </option>
        <option> Praga </option>
        <option> Boston </option>
        <option> Tokio </option>
      </select>
    );
  }
}

const onChangeListener =(event) =>{
  alert('tu destino es viajar a' + event.currentTarget.value);
}

export default Destiny;
