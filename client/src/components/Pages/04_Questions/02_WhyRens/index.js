import React from 'react'
import './index.scss'

const options = [
  {
    whyRensValue: 'Design'
  },
  {
    whyRensValue: 'Rens material: recycled coffee + plastic'
  },
  {
    whyRensValue: 'Waterproof function'
  },
  {
    whyRensValue: 'All of the above'
  }
]

const WhyRens = ({ handleChange, nextPage, prevPage, whyRens }) => (
  <div className="why-rens-container">
    <div className="why-rens">
      <p className="why-rens-para">
        What feature of Rens are you most interested in?
      </p>
      {options.map((rens, rensIndex) => (
        <div className="question" key={rensIndex}>
          <input
            type="radio"
            name="whyRens"
            id={rens.whyRensValue}
            value={rens.whyRensValue}
            defaultChecked={whyRens === rens.whyRensValue}
            onChange={e => handleChange('whyRens')(e.target.value)}
          />
          <label htmlFor={rens.whyRensValue}>{rens.whyRensValue}</label>
        </div>
      ))}
      {/* when other option is checkd the value should not be other, it should be empty for text area */}
      <div className="question">
        <input
          type="radio"
          name="whyRens"
          id="other"
          checked={options.every(option => option.whyRensValue !== whyRens)}
          onChange={e => handleChange('whyRens')(e.target.value)}
        />
        <label htmlFor="other">Other</label>
      </div>

      {options.every(option => option.whyRensValue !== whyRens) && (
        <div className="another-quetion">
          <textarea
            className="form-control other-text"
            type="textArea"
            name="whyRens"
            value={whyRens}
            onChange={e => handleChange('whyRens')(e.target.value)}
            row="3"
          />
        </div>
      )}

      <div className="whyrens-buttons">
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
          className="btn btn-success btn-lg next"
        >
          Next Page
        </button>
      </div>
    </div>
  </div>
)

export default WhyRens
