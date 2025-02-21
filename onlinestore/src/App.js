// import axios from 'axios';
import React from "react";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import Carts from "./components/Carts";
import Categories from "./components/Categories";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          "id": 1,
          'img': 'macbook.jpg',
          "name": "Mackbook Pro",
          "brand": "Apple",
          "slug": null,
          "description": "New computer",
          "price": "12400.00",
          "discuont": "0.00",
          "count": 134,
          "category": 'Phone',
          "user": 1
        },
        {
          "id": 2,
          'img': 'Iphone 15.jpeg',
          "name": "Iphone 15",
          "brand": "Apple",
          "slug": null,
          "description": "New phone",
          "price": "12400.00",
          "discuont": "0.00",
          "count": 134,
          "category": 'Phone',
          "user": 1
        },
        {
          "id": 3,
          'img': 'Galaxy.jpg',
          "name": "Sumsung Galaxy S15",
          "brand": "Sumsung",
          "slug": null,
          "description": "New phone",
          "price": "12400.00",
          "discuont": "0.00",
          "count": 134,
          "category": 'Phone',
          "user": 1
        },
        {
          "id": 4,
          'img': 'Haer.jpg',
          "name": "Холодильник Haer",
          "brand": "Haer",
          "slug": null,
          "description": "Удобный холодильник",
          "price": "12400.00",
          "discuont": "0.00",
          "count": 134,
          "category": 'Fridge',
          "user": 1
        },
        {
          "id": 5,
          'img': 'Lenovo.jpg',
          "name": "Телевизор Lenovo",
          "brand": "Lenovo",
          "slug": null,
          "description": "48-ми дюймовый телевизор",
          "price": "12400.00",
          "discuont": "0.00",
          "count": 134,
          "category": 'Televizor',
          "user": 1
        },
        {
          "id": 6,
          'img': 'LG.jpg',
          "name": "Тостер",
          "brand": "LG",
          "slug": null,
          "description": "Качественный тостер",
          "price": "12400.00",
          "discuont": "0.00",
          "count": 134,
          "category": 'Toster',
          "user": 1
        },
      ]
    }
    this.state.currentItems = this.state.items
    this.addToOrder =  this.addToOrder.bind(this)
    this.deleteOrder =  this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
  }
  render() {
    return (
      <div className="App">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Carts items={this.state.currentItems} onAdd = {this.addToOrder} />
        <Footer />
      </div>
    );
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id) {
        isArray = true
      }
    })
    if (!isArray) {
      this.setState({orders: [...this.state.orders, item]})
    }
  }
}

export default App;
