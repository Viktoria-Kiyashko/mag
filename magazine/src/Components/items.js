import React, { Component } from 'react'
import Item from './Item'

export class items extends Component {
  render() {
    return (
      <main className="main">
  {this.props.items.map((el) => (
    <Item onShowItem={this.props.onShowItem} key={el.id} item={el} onAdd={this.props.onAdd} />
  ))}
</main>
    )
  }
}

export default items