import './App.css';
import React, { Component, Fragment } from 'react' 
import Membre from './components/Membre';
import Button from './components/Button';

const famille = {
  membre1: {
    name: 'Antho',
    age: 27
  },
  membre2: {
    name: 'Segolene',
    age: 27
  },
  membre3: {
    name: 'Eleanor',
    age: 18
  },
  membre4: {
    name: 'Mocha',
    age: 2
  }
}

class App extends Component {
  state = {
    famille,
    isShow: false
  }

  handleClick = num => {
    const famille = { ...this.state.famille }
    famille.membre1.age += num
    this.setState({ famille })
  }

  handleChange = (event, id) => {
    const famille = { ...this.state.famille }
    const name = event.target.value
    famille[id].name = name
    console.log(name)
    this.setState({ famille })
  }

  cacherName = id => {
    const famille = { ...this.state.famille }
    famille[id].name = 'X'
    this.setState({ famille })
  }

  handleShowDescription = () => {
    const isShow = !this.state.isShow
    this.setState({ isShow })
  }

  render () {
    const { titre } = this.props
    const { famille, isShow } = this.state

    let description = null

    if (isShow) {
      description = <strong>Je suis la</strong>
    }

    const liste = Object.keys(famille)
      .map(membre => (
        <Membre
          key={membre}
          handleChange={event => this.handleChange(event, membre)}
          cacherName = {() => this.cacherName(membre)}
          age={famille[membre].age}
          name={famille[membre].name} />
      ))
    console.log(liste)

    return (
      <div>
        <div className='App'>
          <h1>{titre}</h1>
          { liste }
          {/* <Membre 
            name={famille.membre4.name}
            age={famille.membre4.age}>
            { description }
            <button onClick={this.handleShowDescription}>Montrer</button>
          </Membre> */}
          {/* <Button 
            vieillir={() => this.handleClick(2)} /> */}
        </div>
      </div>
    )
  }
}

export default App;