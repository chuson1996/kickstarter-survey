import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import './index.scss'

import chart from '../../assets/chart.png'
import measuring_guide from '../../assets/measuring_shoes.gif'
import ShoeMeasurment from '../ShoeMeasurment'
class SurveyForm extends Component {
  state = {
    name: '',
    country: '',
    email: '',
    pledge: 1,
    shoes: [
      {
        color: 'Classic Black',
        size: '',
        streetAddress: '',
        city: '',
        state: '',
        zipCode: '',
        sameAddress: false
      }
    ],
    displayForm: true,
    backer_id: '',
    error: {
      email_error: '',
      invalidBackerId: null
    },
    shoeMeasured: false,
    fillTheForm: false,
    hideShoeMeasuringGuide: false
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/v1/backer/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          backer_id: res.data.map(id => id.backer_id)[0],
          email: res.data.map(email => email.email)[0],
          pledge: res.data.map(pledge => pledge.pledge)[0]
        })
      })
      .catch(err => {
        this.setState({
          invalidBackerId: err.response.status
        })
      })
  }

  hideShoeMeasuringGuide = () => {
    this.setState({
      hideShoeMeasuringGuide: !this.state.hideShoeMeasuringGuide
    })
  }

  handleAddAnotherColor = () => {
    this.setState({
      shoes: this.state.shoes.concat([
        {
          color: 'Classic Black',
          size: '',
          streetAddress: '',
          city: '',
          state: '',
          zipCode: ''
        }
      ])
    })
  }

  handleShoeMeasured = () => {
    if (this.state.shoeMeasured) {
      this.setState({
        fillTheForm: true
      })
    }
  }

  handleChange = e => {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  handleShoeChange = i => e => {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    const newShoes = this.state.shoes.map((shoe, sidx) => {
      if (i !== sidx) return shoe
      return {
        ...shoe,
        [name]: value
      }
    })
    this.setState({
      shoes: newShoes
    })
  }

  copyAddress = i => e => {
    const { shoes } = this.state
    const sameAddress = shoes.map((shoe, addIndex) => {
      if (i !== addIndex) return shoe
      if (!shoe.sameAddress) {
        return {
          ...shoe,
          streetAddress: shoes[i - 1].streetAddress,
          city: shoes[i - 1].city,
          state: shoes[i - 1].state,
          zipCode: shoes[i - 1].zipCode,
          sameAddress: true
        }
      } else {
        return {
          ...shoe,
          streetAddress: '',
          city: '',
          state: '',
          zipCode: '',
          sameAddress: false
        }
      }
    })

    this.setState({
      shoes: sameAddress
    })
  }

  handleSameAddress = idx => {
    console.log({ idx })
    const { shoes } = this.state
    shoes.filter((shoe, i) => console.log({ shoe, i, idx }))
  }

  handleSubmit = async e => {
    e.preventDefault()
    const { name, country, email, pledge, shoes } = this.state
    try {
      const orders = await axios.post(`http://localhost:5000/api/v1/order`, {
        name,
        email,
        country,
        pledge,
        shoes
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
      age: '',
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
  render() {
    const {
      name,
      country,
      email,
      pledge,
      shoes,
      displayForm,
      error,
      hideShoeMeasuringGuide,
      invalidBackerId,
      shoeMeasured,
      fillTheForm
    } = this.state
    if (invalidBackerId === 404) {
      return <Redirect to="/" />
    }
    console.log('shoes', shoes)
    return (
      <>
        {!fillTheForm && (
          <>
            <ShoeMeasurment
              chart={chart}
              measuring_guide={measuring_guide}
              show_hide={hideShoeMeasuringGuide}
              hideShoeMeasuringGuide={this.hideShoeMeasuringGuide}
              shoeMeasured={shoeMeasured}
              handleChange={this.handleChange}
              handleShoeMeasured={this.handleShoeMeasured}
            />
          </>
        )}
        {fillTheForm && (
          <div>
            {displayForm ? (
              <div className="container">
                <h1 style={{ marginBottom: 0 }}>
                  Please Fill Out This Survey Form
                </h1>
                <p style={{ color: 'blue', marginTop: 1 }}>
                  All Fields Are Required
                </p>

                <form onSubmit={this.handleSubmit}>
                  <div className="order-info">
                    <label>Full Name:</label>
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={this.handleChange}
                      placeholder="Aditya Gyawali..."
                      required
                    />{' '}
                    <br />
                    <label>Country:</label>
                    <input
                      type="text"
                      name="country"
                      value={country}
                      onChange={this.handleChange}
                      placeholder="Nepal...."
                      required
                    />
                    <br />
                    <label>Email:</label>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={this.handleChange}
                      required
                      disabled
                    />{' '}
                    <p
                      className={
                        error.email_error === '' ? 'error none' : 'error'
                      }
                      style={{ color: 'red' }}
                    >
                      {error.email_error}
                    </p>
                    <br />
                    Number OF Pedges:{' '}
                    <select
                      name="pledge"
                      value={parseInt(pledge, 10)}
                      onChange={this.handleChange}
                      disabled
                    >
                      <option defaultValue value="1">
                        1
                      </option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                    <br />
                  </div>
                  <a
                    href="http://www.rensoriginal.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Check Our Website To See The Colors
                  </a>
                  {/* Add more address and shoes fields for backers with more than one pledge */}
                  {shoes.map((shoe, index) => {
                    return (
                      <div key={index} className="delivery-items">
                        <h3>Pick Your Color and Size {`#${index + 1}`}</h3>
                        <div className="color-size">
                          <div className="color">
                            <label>Color</label>
                            <select
                              name="color"
                              value={shoe.color}
                              onChange={this.handleShoeChange(index)}
                            >
                              <option defaultValue value="Classic Black">
                                Classic Black
                              </option>
                              <option value="Classic White">
                                Classic White
                              </option>
                              <option value="Stealth Black">
                                Stealth Black
                              </option>
                              <option value="Rebel Black">Rebel Black</option>
                              <option value="Rebel White">Rebel White</option>
                              <option value="Wanderer">Wanderer</option>
                              <option value="Passion Red">Passion Red</option>
                              <option value="Sweet Pink">Sweet Pink</option>
                              <option value="Ocean Blue">Ocean Blue</option>
                            </select>
                          </div>
                          <div className="size">
                            <label> Size</label>
                            <input
                              type="text"
                              name="size"
                              value={shoe.size}
                              onChange={this.handleShoeChange(index)}
                              placeholder="7 Men EU/43 Women US..."
                              required
                            />
                          </div>
                        </div>
                        <br />
                        {/* same address checkbox */}
                        {index > 0 && (
                          <div className="sameAddress">
                            <input
                              id="sameAddress"
                              type="checkbox"
                              name="sameAddress"
                              checked={this.state.sameAddress}
                              onChange={this.copyAddress(index)}
                            />
                            <label>Send This Shoes To Previous Address</label>
                          </div>
                        )}
                        <>
                          <h3>Address {`#${index + 1}`}</h3>
                          <div className="address">
                            <div className="street">
                              <label>Street Address</label>
                              <input
                                type="text"
                                placeholder="street address..."
                                name="streetAddress"
                                value={shoe.streetAddress}
                                onChange={this.handleShoeChange(index)}
                                required
                              />
                            </div>
                            <div className="city">
                              <label>City</label>
                              <input
                                type="text"
                                placeholder="city..."
                                name="city"
                                value={shoe.city}
                                onChange={this.handleShoeChange(index)}
                                required
                              />
                            </div>
                            <div className="state">
                              <label>State</label>
                              <input
                                type="text"
                                placeholder="state..."
                                name="state"
                                value={shoe.state}
                                onChange={this.handleShoeChange(index)}
                                required
                              />
                            </div>
                            <div className="code">
                              <label>Zip Code</label>
                              <input
                                type="number"
                                placeholder="zip code..."
                                name="zipCode"
                                value={shoe.zipCode}
                                onChange={this.handleShoeChange(index)}
                                required
                              />
                            </div>
                          </div>
                        </>
                      </div>
                    )
                  })}

                  <div className="buttons">
                    <button
                      type="button"
                      className={`add-color ${
                        parseInt(pledge, 10) <= shoes.length ? 'none' : ''
                      }`}
                      onClick={this.handleAddAnotherColor}
                    >
                      Add Another Color
                    </button>
                    <button>Submit</button>
                  </div>
                </form>
              </div>
            ) : (
              <div>
                <p>Thank Your For Submitting The Form</p>
                <p>Please Check Your Email</p>
              </div>
            )}
          </div>
        )}
      </>
    )
  }
}

export default SurveyForm
