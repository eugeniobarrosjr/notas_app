import React, { Component } from "react";

import "./styles.css";

import { ReactComponent as DeleteImg } from "../../assets/img/delete.svg";

export default class CardNota extends Component {
  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.nota.titulo}</h3>
          <DeleteImg alt="Deletar" onClick={this.props.deletarNota} />
          <h4>{this.props.nota.categoria}</h4>
        </header>
        <p className="card-nota_text">{this.props.nota.texto}</p>
      </section>
    );
  }
}
