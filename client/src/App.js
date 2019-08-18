import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import './App.scss'
import SurveyForm from './components/SurveyForm'

class App extends React.Component {
  state = {
    orders: [],
    deliveries: [],
    backers: [],
    loading: true
  }
  componentDidMount() {
    axios.get('http://localhost:5000/api/v1/backer').then(res => {
      this.setState({
        backers: res.data,
        loading: false
      })
    })
    axios.get('http://localhost:5000/api/v1/order/all').then(res => {
      this.setState({
        orders: res.data,
        loading: false
      })
    })
  }

  render() {
    const { backers, loading, orders } = this.state
    if (loading) {
      return <h1>Loading....</h1>
    }
    console.log({ backers, orders })
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route
              exact
              path="/:id"
              render={props => <SurveyForm {...props} backers={backers} />}
            />
            <Route render={() => <h1>404</h1>} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App