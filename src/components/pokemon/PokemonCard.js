import React, { Component } from "react";

import styled from "styled-components";

const Sprite = styled.img`
    width: 5em;
    height 5em;
    `;

export default class PokemonCard extends Component {
  state = {
    name: "",
    imageUrl: "",
    pokemonIndex: "",
    imageLoading: true,
    toManyRequests: false
  };

  componentDidMount() {
    const { name, url } = this.props;
    const pokemonIndex = url.split("/")[url.split("/").length - 2];
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

    this.setState({
      name: name,
      imageUrl: imageUrl,
      pokemonIndex: pokemonIndex
    });
  }

  render() {
    return (
      <div className="col-md-3 col-sm-6 mb-5">
        <div className="card">
          <h5 className="card-header">{this.state.pokemonIndex}</h5>
          <Sprite
            className="card-img-top rounded mx-auto mt-2"
            onLoad={() => this.setState({ imageLoading: false })}
            onError={() => this.setState({ toManyRequests: true })}
            src={this.state.imageUrl}
          />
          {this.state.toManyRequests ? (
            <h6 className="mx-auto">
              <span className="badge badge-danger mt-2">
                To Many Requests being made.
              </span>
            </h6>
          ) : null}
          <div className="card-body mx-auto">
            <h6 className="card-title">
              {this.state.name
                .toLowerCase()
                .split(" ")
                .map(
                  letter => letter.charAt(0).toUpperCase() + letter.substring(1)
                )
                .join("")}
            </h6>
          </div>
        </div>
      </div>
    );
  }
}
