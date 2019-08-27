import React, { Component } from 'react'
import './index.scss'

class YourAge extends Component {
  render() {
    const { nextPage, prevPage, handleChange, values } = this.props
    return (
      <div className="age">
        <p className="age-para">Select your age group:</p>
        <div className="question">
          <input
            name="yourAge"
            value="< 25"
            label="< 25"
            type="radio"
            onChange={handleChange('yourAge')}
            defaultChecked={values.yourAge}
          />
          <label>Less than 25</label>
        </div>
        <div className="question">
          <input
            name="yourAge"
            value="25-34"
            label="25-34"
            type="radio"
            onChange={handleChange('yourAge')}
            defaultChecked={values.yourAge}
          />
          <label>25-34</label>
        </div>
        <div className="question">
          <input
            name="yourAge"
            value="34-50"
            label="34-50"
            type="radio"
            onChange={handleChange('yourAge')}
            defaultChecked={values.yourAge}
          />
          <label>34-50</label>
        </div>
        <div className="question">
          <input
            name="yourAge"
            value=">50"
            label=">50"
            type="radio"
            onChange={handleChange('yourAge')}
            defaultChecked={values.yourAge}
          />
          <label>greater than 50</label>
        </div>
        <div className="question">
          <input
            name="yourAge"
            value="I would rather not say"
            label="I would rather not say"
            type="radio"
            onChange={handleChange('yourAge')}
            defaultChecked={values.yourAge}
          />
          <label>I would rather not say</label>
        </div>

        <div className="row next">
          <button
            type="button"
            onClick={nextPage}
            className="btn col-lg-3 col-md-4 col-sm-6 mr-1 btn-success btn-lg"
          >
            Next Page
          </button>
          <button
            type="button"
            onClick={prevPage}
            className="btn col-lg-3 col-md-4 col-sm-6 ml-1 btn-warning btn-lg"
          >
            Previous
          </button>
        </div>
      </div>
    )
  }
}

export default YourAge
