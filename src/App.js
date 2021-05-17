import React, { Component } from "react";

import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias";

import "./assets/App.css";
import "./assets/index.css";
import Categorias from "./data/Categorias";
import Notas from "./data/Notas";

export default class App extends Component {
  constructor() {
    super();

    this.categorias = new Categorias();
    this.notas = new Notas();
  }
  render() {
    const { adicionarCategoria } = this.categorias;
    const { adicionarNotas, deletarNota } = this.notas;

    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.categorias}
          criarNota={adicionarNotas.bind(this.notas)}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            categorias={this.categorias}
            criarCategoria={adicionarCategoria.bind(this.categorias)}
          />
          <ListaDeNotas
            notas={this.notas}
            deletarNota={deletarNota.bind(this.notas)}
          />
        </main>
      </section>
    );
  }
}
