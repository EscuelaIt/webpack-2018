import React, { Component } from 'react'

export class HelloWorld extends Component {
  render() {
    return (
      <div>
        <h1>Webpack + {this.props.name}</h1>
        <p>¡Hola Mundo, Webpack con {this.props.name}!</p>
        <nav className="Menu">
          {this.props.menu.map(link => <a href={link[1]} key={link[0]}>{link[0]}</a>)}
        </nav>
        <img src={this.props.logo} />
        {console.log(this.props)}
      </div>
    )
  }
}
