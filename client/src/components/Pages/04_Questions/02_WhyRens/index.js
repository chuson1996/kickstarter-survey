import React from 'react'
import './index.scss'

const options = [
  {
    whyRens: 'Design',
    whyRensValue: 'Design'
  },
  {
    whyRens: 'Rens material: recycled coffee + plastic',
    whyRensValue: 'Rens material: recycled coffee + plastic'
  },
  {
    whyRens: 'Waterproof function',
    whyRensValue: 'Waterproof function'
  },
  {
    whyRens: 'All of the above',
    whyRensValue: 'All of the above'
  }
]

const WhyRens = ({
  handleChange,
  handleOtherChange,
  nextPage,
  prevPage,
  whyRens,
  other
}) => (
  <div className="why-rens">
    {console.log({ other })}
    <p className="why-rens-para">
      What feature of Rens are you most interested in?
    </p>
    {options.map((rens, rensIndex) => (
      <div className="question" key={rensIndex}>
        <input
          type="radio"
          name="whyRens"
          value={rens.whyRens}
          defaultChecked={whyRens === rens.whyRens}
          onChange={handleChange('whyRens')}
        />
        <label>{rens.whyRensValue}</label>
      </div>
    ))}

    <div className="question">
      <input type="radio" name="other" onChange={handleChange('other')} />
      <label>Other</label>
    </div>

    {other && (
      <div className="another-quetion">
        <textarea
          className="form-control other-text"
          type="textArea"
          name="whyRens"
          value={whyRens}
          onChange={handleChange('whyRens')}
          row="3"
        />
      </div>
    )}

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

export default WhyRens
