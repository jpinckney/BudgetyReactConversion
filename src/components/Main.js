import React, { Component } from 'react'
import Checkmark from '../icons/checkmark.svg'
import Back from '../back.png'

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      descriptionInput: '',
      descriptionValue: '',
    }
  }

  handleDescriptionInput(event) {
    this.setState({
      descriptionInput: event.target.value
    })
  }

  handleDescriptionValue(event) {
    this.setState({
      descriptionValue: event.target.value
    })
  }

  render() {
    return (
      <div className='top'>
        <img src={ Back } />
        <div  >
          <div className='budget__title'> Available budget in <span className='budget__title--month'> Month </span> </div>
          <form>
            <select className='add__type'>
              <option> + </option>
              <option> - </option>
            </select>
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
              onClick={ event => console.log('clicked') }
            />
          </form>
        </div>
      </div>
    )
  }
}
