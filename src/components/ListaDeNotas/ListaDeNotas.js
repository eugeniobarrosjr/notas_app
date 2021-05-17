import React, { Component } from "react";
import CardNota from "../CardNota";

import "./styles.css";

export default class ListaDeNotas extends Component {
  constructor() {
    super();

    this.state = {
      notas: [],
    };
  }

  componentDidMount() {
    this.props.notas.inscrever(this._novasNotas.bind(this));
  }

  _novasNotas(notas) {
    this.setState({ ...this.state, notas });
  } 

  render() {
    return (
      <ul className="lista-notas">
        {this.props.notas.notas.map((nota, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota
                deletarNota={() => this.props.deletarNota(index)}
                nota={nota}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}
