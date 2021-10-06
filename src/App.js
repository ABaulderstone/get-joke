import React, {Component} from 'react'

class App extends Component {
  state = {
    joke: "",
    error: null,
    loading: false

  }

  getJoke = () => {
    this.setState({loading: true})
    fetch("https://icanhazdadjoke.com", {
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => this.setState({joke: data.joke}))
    .catch(error => this.setState({error: error.message}))
    .finally(() => this.setState({loading: false}))
  }

  componentDidMount() {
    this.getJoke();
  }
  
  

  render() {
    const {loading, error, joke} = this.state;
    return(
      <>
      {error && <p>{error}</p>}
      {loading ? <h3>Loading</h3> : <p>{joke}</p>}
      <button onClick={this.getJoke}>Get a joke</button>
      </>
    )
  }
}


export default App
