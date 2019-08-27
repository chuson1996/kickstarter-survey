import React, { Component } from 'react'
import './index.scss'

class WhyRens extends Component {
  render() {
    const { handleChange, nextPage, prevPage, values, whyRens } = this.props
    return (
      <div className="why-rens">
        <p className="why-rens-para">
          What feature of Rens are you most interested in?
        </p>

        <div className="question">
          <input
            type="radio"
            name="whyRens"
            value="Design"
            label="Design"
            onChange={handleChange('whyRens')}
            defaultChecked={values.whyRens}
          />
          <label>Design</label>
        </div>
        <div className="question">
          <input
            type="radio"
            name="whyRens"
            value="Rens material: recycled coffee + plastic"
            label="Rens material: recycled coffee + plastic"
            onChange={handleChange('whyRens')}
            defaultChecked={values.whyRens}
          />
          <label>Rens material: recycled coffee + plastic</label>
        </div>
        <div className="question">
          <input
            type="radio"
            name="whyRens"
            value="Waterproof function"
            label="Waterproof function"
            onChange={handleChange('whyRens')}
            defaultChecked={values.whyRens}
          />
          <label>Waterproof function</label>
        </div>
        <div className="question">
          <input
            type="radio"
            name="whyRens"
            value="All of the above"
            label="All of the above"
            onChange={handleChange('whyRens')}
            defaultChecked={values.whyRens}
          />
          <label>All of the above</label>
        </div>
        <div className="question">
          <input
            type="radio"
            name="whyRens"
            label="Other"
            onChange={handleChange('whyRens')}
            value="other"
            defaultChecked={values.whyRens}
            // className={e.target.value === 'Other' ? 'none' : ''}
          />
          <label>Other</label>
        </div>
        {whyRens === 'other' && (
          <div className="another-quetion">
            <textarea
              className="form-control other-text"
              type="textArea"
              name="whyRens"
              label="Other"
              value={whyRens}
              onChange={handleChange('whyRens')}
              row="3"
            />
          </div>
        )}

        {/* <input
            type="textArea"
            name="whyRens"
            label="Other"
            onChange={handleChange('whyRens')}

            // className={e.target.value !== 'Other' ? 'none' : ''}
          /> */}

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

export default WhyRens
