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
import Error404 from '../Error404'
import SuccessfullFormSubmission from '../SuccessfullFormSubmission'

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
    errors: [],
    shoeMeasured: false,
    answerQuestion: false
  }

  componentDidMount() {
    axios
      // eslint-disable-next-line react/destructuring-assignment
      .get(`/api/v1/backer/${this.props.match.params.id}`)
      .then(res => {
        this.setState(
          {
            name: res.data.map(name => name.name)[0],
            email: res.data.map(email => email.email)[0],
            country: res.data.map(country => country.country)[0],
            pledge: res.data.map(pledge => pledge.pledge)[0]
          },
          () => {
            const { email } = this.state
            if (email === undefined) {
              this.setState({
                page: 10
              })
            }
          }
        )
      })
      .catch(err => {
        if (err.response.status === 404) {
          this.setState({
            page: 10
          })
        }
      })
  }

  // go to preview page
  goToFinalpage = () => {
    this.setState({
      page: 8
    })
  }

  // Proceed to next step
  nextPage = async e => {
    e.preventDefault()
    const { address, name, page } = this.state
    console.log({ page })
    if (page === 7) {
      try {
        const onAddressSubmit = await axios.post('/api/v1/address', {
          address,
          name
        })

        if (onAddressSubmit.status === 200) {
          this.setState({
            page: page + 1,
            errors: [],
            validAddress: true
          })
        }
      } catch (errors) {
        this.setState({ errors: errors.response.data.errors })
      }
    } else {
      this.setState({
        page: page + 1
      })
    }
  }

  handleEditAddress = () => {
    this.setState({
      page: 7
    })
  }

  handleEditShoeColorAndSize = () => {
    this.setState({
      page: 3
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
  handleChange = input => value => {
    this.setState({ [input]: value })
  }

  handleAddressChange = input => value => {
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
      pledge,
      email,
      country,
      shoes,
      address,
      yourAge,
      whyRens
    } = this.state

    try {
      const orders = await axios.post('/api/v1/order', {
        name,
        country,
        email,
        pledge,
        shoes,
        address,
        yourAge,
        whyRens
      })
      if (orders.status === 200) {
        this.setState({
          page: 9,
          errors: []
        })
      }
    } catch (error) {
      this.setState({
        errors: [error.response.data.error]
      })
    }
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

      errors,
      validAddress
    } = this.state
    console.log('state', this.state)
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
      answerQuestion,
      errors,
      validAddress
    }

    switch (page) {
      case 1:
        return (
          <FirstPage
            nextPage={this.nextPage}
            handleChange={this.handleChange}
            values={values}
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
            goToFinalpage={this.goToFinalpage}
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
            answerQuestion={answerQuestion}
          />
        )
      case 6:
        return (
          <WhyRens
            nextPage={this.nextPage}
            prevPage={this.prevPage}
            handleChange={this.handleChange}
            handleOtherChange={this.handleOtherChange}
            values={values}
            whyRens={whyRens}
            answerQuestion={answerQuestion}
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
            validate={this.validate}
            handleFocus={this.handleFocus}
            handleSubmit={this.handleSubmit}
          />
        )
      case 8:
        return (
          <Preview
            nextPage={this.nextPage}
            prevPage={this.prevPage}
            handleSubmit={this.handleSubmit}
            previewData={this.state}
            handleEditAddress={this.handleEditAddress}
            handleEditShoeColorAndSize={this.handleEditShoeColorAndSize}
            values={values}
          />
        )
      case 9:
        return <SuccessfullFormSubmission />

      case 10:
        return <Error404 />

      default:
        break
    }
  }
}

export default SurveyForm
