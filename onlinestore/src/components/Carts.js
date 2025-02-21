import React, { Component } from 'react'
import Item_Carts from './Item_Carts'

export class Carts extends Component {
  render() {
    return (
      <main>
        {this.props.items.map(el => (
            <Item_Carts key={el.id} item={el} onAdd={this.props.onAdd}/>
        ))}
      </main>
    )
  }
}

export default Carts