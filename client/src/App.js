import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import './App.scss'
import SurveyForm from './components/SurveyForm'
import Error404 from './components/Error404'
import rensLoading from './assets/images/rens.gif'
// import SurveyFormHeader from './components/SurveyFormHeader'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      backers: [],
      loading: true
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/v1/backer').then(res => {
      this.setState({
        backers: res.data,
        loading: false
      })
    })
  }

  render() {
    const { backers, loading } = this.state
    if (loading) {
      return (
        <div className="loading">
          <img style={{ height: 250 }} src={rensLoading} alt="rens loading" />
        </div>
      )
    }
    console.log({ backers })
    return (
      <Router>
        {/* <SurveyFormHeader /> */}
        <div className="App">
          <Switch>
            <Route
              exact
              path="/:id"
              render={props => <SurveyForm {...props} backers={backers} />}
            />
            <Route render={() => <Error404 />} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
