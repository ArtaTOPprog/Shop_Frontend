import React, { Component } from 'react'

export class Item_Carts extends Component {
  render() {
    return (
      <div className='item'>
        <img src={"./img/" + this.props.item.img} />
        <h2>{this.props.item.name}</h2>
        <p>{this.props.item.brand}</p>
        <b>{this.props.item.price}$</b>
        <div className='add_cart' onClick={() => this.props.onAdd(this.props.item)}>+</div> 
      </div>
    )
  }
}

export default Item_Carts