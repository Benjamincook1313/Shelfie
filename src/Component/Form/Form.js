import React, {Component} from 'react'

class Form extends Component {
  constructor() {
    super()

    this.state={
      products:[],
      image: '',
      product: '',
      price: ''
    }
  }

  handleImage(value) {
    this.setState({
      image: value
    })
  }

  handleProduct(value) {
    this.setState({
      product: value
    })
  }

  handlePrice(value) {
    this.setState({
      price: value
    })
  }

  cancleInput(image, product, price) {
    this.setState({
      products:[],
      image: '',
      product: '',
      price: ''
    });
  }
  
  render() {
    
    return (
      <div>
        Image Url:
          <input onChange={(e) => this.handleImage(e.target.value)}
          type='text'
          value={this.state.image}
        />
        Product Name:
        <input onChange={(e) => this.handleProduct(e.target.value)}
          type='text'
          value={this.state.product}
        />
        Price:
        <input onChange={(e) => this.handlePrice(e.target.value)}
          type='text'
          value={this.state.price}
        />
        <button onClick={() => this.cancleInput(this.state.products)}> Cancel </button>
        <button>Add to Inventory</button>
      </div>
    ) 
  }
}
export default Form;