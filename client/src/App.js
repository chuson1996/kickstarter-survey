import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import './App.scss'
import SurveyForm from './components/SurveyForm'
import RENS from './assets/rens.gif'

class App extends React.Component {
  state = {
    orders: [],
    deliveries: [],
    backers: [],
    loading: true
  }
  componentDidMount() {
    axios.get('/api/v1/backer').then(res => {
      this.setState({
        backers: res.data,
        loading: false
      })
    })
    axios.get('/api/v1/order/all').then(res => {
      this.setState({
        orders: res.data,
        loading: false
      })
    })
  }

  render() {
    const { backers, loading } = this.state
    if (!loading) {
      return <h1 style={{ textAlign: 'center' }}>Loading.....</h1>
    }
    console.log({ backers })
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
