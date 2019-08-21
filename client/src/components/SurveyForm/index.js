import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import './index.scss'

import chart from '../../assets/chart.png'
import measuringGuide from '../../assets/measuring_shoes.gif'
import ShoeMeasurment from '../ShoeMeasurment'

import { shoeColors } from '../../shoes'
import SurveyFormHeader from '../SurveyFormHeader'

class SurveyForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      country: '',
      email: '',
      pledge: 1,
      shoes: [
        {
          color: '',
          size: '',
          streetAddress: '',
          city: '',
          state: '',
          zipCode: '',
          sameAddress: false
        }
      ],
      displayForm: true,
      error: {
        email_error: '',
        invalidBackerId: null
      },
      shoeMeasured: false,
      fillTheForm: false,
      hideShoeMeasuringGuide: false
    }

  }

  componentDidMount() {
    axios
      // eslint-disable-next-line react/destructuring-assignment
      .get(`/api/v1/backer/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
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

  handleHideShoeMeasuringGuide = () => {
    const { hideShoeMeasuringGuide } = this.state
    this.setState({
      hideShoeMeasuringGuide: !hideShoeMeasuringGuide
    })
  }

  handleAddAnotherColor = () => {
    const { shoes } = this.state
    this.setState({
      shoes: shoes.concat([
        {
          color: '',
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
    const { shoeMeasured } = this.state
    if (shoeMeasured) {
      this.setState({
        fillTheForm: true
      })
    }
  }

  handleChange = e => {
    const { target } = e
    const value = target.type === 'checkbox' ? target.checked : target.value

    const { name } = target

    this.setState({
      [name]: value
    })
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

  // eslint-disable-next-line no-unused-vars
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
          sameAddress: true,
          selected: true
        }
      } else {
        return {
          ...shoe,
          streetAddress: '',
          city: '',
          state: '',
          zipCode: '',
          sameAddress: false,
          selected: true
        }
      }
    })

    this.setState({
      shoes: sameAddress
    })
  }

  handleSubmit = async e => {
    e.preventDefault()
    const { name, country, email, pledge, shoes } = this.state

    try {
      const orders = await axios.post('/api/v1/order', {
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

    return (
      <>
        {!fillTheForm && (
          <>
            <ShoeMeasurment
              chart={chart}
              measuringGuide={measuringGuide}
              showHide={hideShoeMeasuringGuide}
              hideShoeMeasuringGuide={this.handleHideShoeMeasuringGuide}
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
                <SurveyFormHeader />
                <div className="col-md-12 col-lg-8 order-md-1 m-auto">
                  <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="fullName">Full Name</label>
                      <div className="input-group">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          value={name}
                          onChange={this.handleChange}
                          placeholder="Full Name"
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="fullName">Country</label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          name="country"
                          value={country}
                          onChange={this.handleChange}
                          placeholder="Country"
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        placeholder="you@email.com"
                        required
                        disabled
                      />
                      <div
                        className={
                          error.email_error === ''
                            ? 'error-feedback none'
                            : 'error-feedback'
                        }
                      >
                        {error.email_error}
                      </div>
                    </div>

                    <div className="col-md-6 mb-3">
                      <label htmlFor="pledge">Number Of Pledge</label>
                      <select
                        name="pledge"
                        value={parseInt(pledge, 10)}
                        onChange={this.handleChange}
                        disabled
                        className="custom-select d-block w-100"
                      >
                        <option defaultValue value="1">
                          1
                        </option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>

                    {/* Add more address and shoes fields for backers with more than one pledge */}
                    {shoes.map((shoe, index) => {
                      return (
                        <div key={index} className="delivery-items">
                          <h3 style={{ textAlign: 'center' }}>
                            Pick Your Color and Size
                            {` #${index + 1}`}
                          </h3>
                          <div className="color-size">
                            {shoeColors.map((shoeColor, shoeColorIndex) => {
                              return (
                                <div
                                  key={shoeColorIndex}
                                  className="collections"
                                >
                                  <p>{shoeColor.name}</p>
                                  <img
                                    style={{
                                      cursor: 'pointer',
                                      height: '200px'
                                    }}
                                    src={shoeColor.src}
                                    alt={shoeColor.name}
                                    value={shoe.color}
                                    name="color"
                                    className={
                                      shoe.color === shoeColor.name
                                        ? 'active'
                                        : ''
                                    }
                                    onClick={this.handleShoeChange(
                                      index,
                                      shoeColor.name
                                    )}
                                  />
                                </div>
                              )
                            })}
                          </div>

                          <div className="col-md-6 mb-3">
                            <label htmlFor="pledge">Size</label>
                            <input
                              type="text"
                              className="form-control"
                              name="size"
                              value={shoe.size}
                              onChange={this.handleShoeChange(index)}
                              placeholder="7 Men EU/43 Women US..."
                              required

                            />
                          </div>

                          {/* same address checkbox */}
                          {index > 0 && (
                            <div>
                              <input
                                id="sameAddress"
                                type="checkbox"
                                name="sameAddress"
                                onChange={this.copyAddress(index)}
                              />
                              <label style={{ marginRight: '1rem' }}>
                                Send This Shoes To Previous Address
                              </label>
                            </div>
                          )}
                          <>
                            <h3 style={{ textAlign: 'center' }}>
                              Address
                              {` #${index + 1}`}
                            </h3>

                            <div className="mb-3">
                              <label htmlFor="address">Street Address</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Street address"
                                name="streetAddress"
                                value={shoe.streetAddress}
                                onChange={this.handleShoeChange(index)}
                                required
                              />
                            </div>

                            <div className="row">
                              <div className="col-md-4 mb-3">
                                <label htmlFor="country">City</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="city"
                                  value={shoe.city}
                                  placeholder="City"
                                  onChange={this.handleShoeChange(index)}
                                  required
                                />
                              </div>

                              <div className="col-md-4 mb-3">
                                <label htmlFor="state">State</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="State"
                                  name="state"
                                  value={shoe.state}
                                  onChange={this.handleShoeChange(index)}
                                  required
                                />
                              </div>

                              <div className="col-md-4 mb-3">
                                <label htmlFor="zip">Zip</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Zip Code"
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

                    <div className="row">
                      <div
                        className={`col-md-6 mb-3 ${
                          parseInt(pledge, 10) <= shoes.length ? 'none' : ''
                        }`}
                      >
                        <button
                          type="button"
                          className="btn btn-primary btn-lg btn-block "
                          onClick={this.handleAddAnotherColor}
                        >
                          Add Another Color
                        </button>
                      </div>
                      <div className="col-md-6 mb-3">
                        <button className="btn btn-success btn-lg btn-block">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            ) : (
              <div className="success-msg">
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
