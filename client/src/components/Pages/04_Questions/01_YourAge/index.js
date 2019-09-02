import React from 'react'
import './index.scss'

const options = [
  {
    ageValue: '<25'
  },
  {
    ageValue: '25-35'
  },
  {
    ageValue: '34-50'
  },
  {
    ageValue: '>50'
  },
  {
    ageValue: 'I would rather not say'
  }
]

const isAnswered = yourAge => {
  // eslint-disable-next-line no-lone-blocks
  {
    /* yourAge value comes from state ==> if no ageValue(in options) is present in state, it measn that
    the button is not clicked so disabled is true
  */
  }
  return options.every(option => option.ageValue !== yourAge)
}

const YourAge = ({ nextPage, prevPage, handleChange, values, yourAge }) => (
  <div className="age-container">
    <div className="age">
      <p className="age-para">Select your age group:</p>
      <div className="question">
        {options.map((age, ageIndex) => (
          <div className="question" key={ageIndex}>
            <input
              type="radio"
              name="yourAge"
              id={age.ageValue}
              value={age.ageValue}
              defaultChecked={yourAge === age.ageValue}
              onChange={e => handleChange('yourAge')(e.target.value)}
            />
            <label htmlFor={age.ageValue}>{age.ageValue}</label>
          </div>
        ))}
      </div>

      <div className="age-buttons">
        <button
          type="button"
          onClick={prevPage}
          className="btn btn-warning btn-lg back"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={nextPage}
          className="btn  btn-success btn-lg next"
          disabled={isAnswered(values.yourAge)}
        >
          Next Page
        </button>
      </div>
    </div>
  </div>
)

export default YourAge
