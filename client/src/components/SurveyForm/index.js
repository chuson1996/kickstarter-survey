/* eslint-disable indent */
import React, { Component } from 'react'
import axios from 'axios'

import FirstPage from '../Pages/01_FirstPage'
import ShoeMeasurment from '../Pages/02_ShoeMeasurment'
import ColorAndSize from '../Pages/03_ColorAndSize'
import Questions from '../Pages/04_Questions'
import YourAge from '../Pages/04_Questions/01_YourAge'
import WhyRens from '../Pages/04_Questions/02_WhyRens'
import Address from '../Pages/05_Address'
import Preview from '../Pages/06_Preview'

class SurveyForm extends Component {
  state = {
    page: 1,
    name: '',
    email: '',
    pledge: '',
    country: '',
    shoes: [
      {
        color: '',
        size: '',
        gender: '',
        whichSize: ''
      }
    ],
    address: {
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipCode: '',
      phone: ''
    },
    yourAge: '',
    whyRens: '',
    shoeMeasured: false,
    answerQuestion: false,
    other: false
  }

  componentDidMount() {
    axios
      // eslint-disable-next-line react/destructuring-assignment
      .get(`http://localhost:5000/api/v1/backer/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          name: res.data.map(name => name.name)[0],
          email: res.data.map(email => email.email)[0],
          country: res.data.map(country => country.country)[0],
          pledge: res.data.map(pledge => pledge.pledge)[0]
        })
      })
      .catch(err => {
        this.setState({
          invalidBackerId: err.response.status
        })
      })
  }

  // Proceed to next step
  nextPage = () => {
    const { page } = this.state
    this.setState({
      page: page + 1
    })
  }

  // Go back to prev page
  prevPage = () => {
    const { page } = this.state
    this.setState({
      page: page - 1
    })
  }

  // Handle fields change
  handleChange = input => e => {
    const { target } = e
    const value = target.type === 'checkbox' ? target.checked : target.value

    this.setState({ [input]: value })
  }

  handleAddressChange = input => e => {
    const { target } = e
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState(prevState => ({
      address: {
        // object that we want to update
        ...prevState.address, // keep all other key-value pairs
        [input]: value // update the value of specific key
      }
    }))
  }

  handleShoeChange = (i, shoeName) => e => {
    const { target } = e
    const value = target.type === 'checkbox' ? target.checked : target.value
    const { name } = target
    const { shoes } = this.state
    const newShoes = shoes.map((shoe, sidx) => {
      if (i !== sidx) return shoe
      return {
        ...shoe,
        [name]: value || shoeName
      }
    })
    this.setState({
      shoes: newShoes
    })
  }

  handleAddAnotherColor = () => {
    const { shoes } = this.state
    this.setState({
      shoes: shoes.concat([
        {
          color: '',
          size: ''
        }
      ])
    })
  }

  handleSubmit = async e => {
    e.preventDefault()
    const {
      name,
      email,
      pledge,
      country,
      shoes,
      address,
      yourAge,
      whyRens
    } = this.state

    try {
      const orders = await axios.post('http://localhost:5000/api/v1/order', {
        name,
        email,
        country,
        pledge,
        shoes,
        address,
        yourAge,
        whyRens
      })
      if (orders.status === 200) {
        this.setState({
          displayForm: false
        })
      }
    } catch (error) {
      this.setState({ error: { email_error: error.response.data.error } })
    }

    this.setState({
      name: '',
      country: '',

      shoes: [
        {
          color: '',
          size: '',
          streetAddress: '',
          city: '',
          state: '',
          zipCode: ''
        }
      ]
    })
  }

  // eslint-disable-next-line consistent-return
  render() {
    const {
      page,
      name,
      email,
      pledge,
      country,
      shoes,
      address,
      yourAge,
      whyRens,
      shoeMeasured,
      answerQuestion,
      other
    } = this.state
    console.log('stae', this.state)
    const values = {
      page,
      name,
      email,
      pledge,
      country,
      shoes,
      address,
      yourAge,
      whyRens,
      shoeMeasured,
      answerQuestion
    }
    switch (page) {
      case 1:
        return (
          <FirstPage
            nextPage={this.nextPage}
            handleChange={this.handleChange}
            country={country}
            pledge={pledge}
            name={name}
          />
        )
      case 2:
        return (
          <ShoeMeasurment
            nextPage={this.nextPage}
            prevPage={this.prevPage}
            handleChange={this.handleChange}
            values={values}
            shoeMeasured={shoeMeasured}
          />
        )
      case 3:
        return (
          <ColorAndSize
            nextPage={this.nextPage}
            prevPage={this.prevPage}
            handleChange={this.handleChange}
            values={values}
            shoes={shoes}
            handleShoeChange={this.handleShoeChange}
            handleAddAnotherColor={this.handleAddAnotherColor}
            pledge={pledge}
          />
        )
      case 4:
        return (
          <Questions
            nextPage={this.nextPage}
            prevPage={this.prevPage}
            handleChange={this.handleChange}
            answerQuestion={answerQuestion}
          />
        )
      case 5:
        return (
          <YourAge
            nextPage={this.nextPage}
            prevPage={this.prevPage}
            handleChange={this.handleChange}
            values={values}
            yourAge={yourAge}
          />
        )
      case 6:
        return (
          <WhyRens
            nextPage={this.nextPage}
            prevPage={this.prevPage}
            handleChange={this.handleChange}
            values={values}
            whyRens={whyRens}
            other={other}
          />
        )
      case 7:
        return (
          <Address
            nextPage={this.nextPage}
            prevPage={this.prevPage}
            handleAddressChange={this.handleAddressChange}
            handleChange={this.handleChange}
            address={address}
            values={values}
          />
        )
      case 8:
        return (
          <Preview
            nextPage={this.nextPage}
            prevPage={this.prevPage}
            handleSubmit={this.handleSubmit}
            backersInfo={this.state}
          />
        )

      default:
        break
    }
  }
}

export default SurveyForm
