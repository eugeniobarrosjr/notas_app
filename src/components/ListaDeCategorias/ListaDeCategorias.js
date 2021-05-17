import React, { Component } from "react";

import "./styles.css";

export default class ListaDeCategorias extends Component {
  constructor() {
    super();
    this._subscribe = this._novasCategorias.bind(this);
    this.state = {
      categorias: [],
    };
  }
  
  componentDidMount() {
    
    this.props.categorias.inscrever(this._subscribe);
  }

  componentWillUnmount() {
    this.props.categorias.desiscrever(this._subscribe);
  }

  _novasCategorias(categorias) {
    this.setState({...this.state, categorias});
  }
  
  _handleEventInput = (event) => {
    if (event.key === "Enter") {
      this.props.criarCategoria(event.target.value);
    }
  };

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.state.categorias.map((categoria, index) => (
            <li key={index} className="lista-categorias_item">
              {categoria}
            </li>
          ))}
        </ul>
        <input
          type="text"
          className="lista-categorias_input"
          placeholder="Adicionar Categoria"
          onKeyUp={this._handleEventInput}
        />
      </section>
    );
  }
}
