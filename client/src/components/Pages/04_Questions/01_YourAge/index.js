import React from 'react'
import './index.scss'

const options = [
  {
    age: '<25',
    ageValue: '<25'
  },
  {
    age: '25-35',
    ageValue: '25-35'
  },
  {
    age: '34-50',
    ageValue: '34-50'
  },
  {
    age: '>50',
    ageValue: '>50'
  },
  {
    age: 'I would rather not say',
    ageValue: 'I would rather not say'
  }
]

const YourAge = ({ nextPage, prevPage, handleChange, values, yourAge }) => (
  <div className="age">
    {console.log('values.yourAge', values.yourAge)}
    <p className="age-para">Select your age group:</p>
    <div className="question">
      {options.map((age, ageIndex) => (
        <div className="question" key={ageIndex}>
          <input
            type="radio"
            name="yourAge"
            value={age.age}
            defaultChecked={yourAge === age.age}
            onChange={handleChange('yourAge')}
          />
          <label>{age.ageValue}</label>
        </div>
      ))}
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

export default YourAge
