import './App.css';
import React, { Component, Fragment } from 'react' 
import Membre from './components/Membre';
import Button from './components/Button';

const famille = {
  membre1: {
    name: 'Antho',
    age: 7
  },
  membre2: {
    name: 'Segolene',
    age: 27
  },
  membre3: {
    name: 'Eleanor',
    age: 0
  },
  membre4: {
    name: 'Mocha',
    age: 2
  }
}

class App extends Component {
  state = {
    famille
  }

  handleClick = num => {
    const famille = { ...this.state.famille }
    famille.membre1.age += num
    this.setState({ famille })
  }

  handleChange = event => {
    const famille = { ...this.state.famille }
    const name = event.target.value
    famille.membre1.name = name
    console.log(name)
    this.setState({ famille })
  }

  render () {
    const { titre } = this.props
    const { famille } = this.state
    return (
      <div>
        <div className='App'>
          <h1>{titre}</h1>
          <input value={famille.membre1.name} onChange={this.handleChange} type='text' />
          <Membre 
            age={famille.membre1.age}
            name={famille.membre1.name} />
          <Membre 
            name={famille.membre2.name} 
            age={famille.membre2.age}/>
          <Membre
            name={famille.membre3.name} 
            age={famille.membre3.age} />
          <Membre 
            name={famille.membre4.name}
            age={famille.membre4.age}>
            Je suis la
          </Membre>
          <Button 
            vieillir={() => this.handleClick(2)} />
        </div>
      </div>
    )
  }
}

export default App;