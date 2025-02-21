import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Все'
                },
                {
                    key: 'Phone',
                    name: 'Телефоны'
                },
                {
                    key: 'Televizor',
                    name: 'Телевизоры'
                },
                {
                    key: 'Toster',
                    name: 'Тостеры'
                },
                {
                    key: 'Fridge',
                    name: 'Холодильники'
                },
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)} >{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories