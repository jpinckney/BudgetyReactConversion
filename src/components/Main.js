import React, { Component } from 'react'
import Checkmark from '../icons/checkmark.svg'
import Back from '../back.png'

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      descriptionInput: '',
      descriptionValue: '',
      income: [],
      expense: [],
      option: true
    }
    this.income = this.income.bind(this)
    this.expense = this.expense.bind(this)
    this.optionHandler = this.optionHandler.bind(this);
  }

  handleDescriptionInput(event) {
    this.setState({
      descriptionInput: event.target.value
    })
    console.log()
  }

  handleDescriptionValue(event) {
    this.setState({
      descriptionValue: event.target.value
    })
  }

  income() {
    this.setState({
      income: {
        description: this.state.descriptionInput,
        value: this.state.descriptionValue
      }
    })
    console.log(this.data)
  }

  expense() {
    this.setState({
      expense: {
        description: this.state.descriptionInput,
        value: this.state.descriptionValue
      }
    })
    console.log(this.data)
  }

  optionHandler() {
    this.setState({
      option: !this.state.option
    })
  }



  render() {
    return (
      <div className='top'>
        <img src={ Back } />
        <div /*className='budget'*/>
          <div className='budget__title'> Available budget in <span className='budget__title--month'> %Month% </span> </div>

          <button
            className='add__type'
            onClick={ () => this.optionHandler() }>
            { this.state.option ?  '+' : '-' }
          </button>

          <input
            onChange={ event => this.handleDescriptionInput(event) }
            className='add__description'
            placeholder='Add Description'
            type='text'
          ></input>

          <input
            onChange={ event => this.handleDescriptionValue(event) }
            className='add__value'
            placeholder='Value'
            type='number'
          ></input>

          <img
            src={ Checkmark }
            alt='checkmark'
            className='add__btn'
            onClick={ (event) => this.state.option ? this.income() : this.expense() }
          />
        </div>
      </div>
    )
  }
}
