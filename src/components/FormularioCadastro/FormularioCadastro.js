import React, { Component } from "react";

import "./styles.css";

export default class FormularioCadastro extends Component {
  constructor(props) {
    super(props);

    this.titulo = "";
    this.texto = "";
    this.categoria = "Sem categoria";

    this.state = {
      categorias: [],
    };
  }

  componentDidMount() {
    this.props.categorias.inscrever(this._novasCategorias.bind(this));
  }

  componentWillUnmount() {
    this.props.categorias.desiscrever(this._novasCategorias.bind(this));
  }

  _novasCategorias(categorias) {
    this.setState({ ...this.state, categorias });
  }

  _handleChangeTitulo = (event) => {
    event.stopPropagation();
    this.titulo = event.target.value;
  };

  _handleChangeTexto = (event) => {
    event.stopPropagation();
    this.texto = event.target.value;
  };

  _handleChangeCategoria = (event) => {
    event.stopPropagation();
    this.categoria = event.target.value;
  };

  _handleSubmit = (event) => {
    event.preventDefault();
    this.props.criarNota(this.titulo, this.texto, this.categoria);
  };

  render() {
    const { categorias } = this.state;
    return (
      <form onSubmit={this._handleSubmit} className="form-cadastro">
        <select
          onChange={this._handleChangeCategoria}
          className="form-cadastro_input"
        >
          <option value="">Sem uma categoria</option>
          {categorias.map((categoria, index) => (
            <option key={index} value={categoria}>
              {categoria}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleChangeTitulo}
        />
        <textarea
          placeholder="Escreva sua nota..."
          rows={15}
          className="form-cadastro_input"
          onChange={this._handleChangeTexto}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar nota
        </button>
      </form>
    );
  }
}
