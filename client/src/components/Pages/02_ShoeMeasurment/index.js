import React from 'react'
import './index.scss'

import measuringGuide from '../../../assets/images/measuringGuide.gif'
import chart from '../../../assets/images/chart.png'

const ShoeMeasurment = ({ nextPage, prevPage, handleChange, shoeMeasured }) => (
  <>
    <div style={{ textAlign: 'center' }} className="header">
      <h1>Measuring Shoe Size</h1>
      <p>
        Before filling out the survey form, please check these instructions how
        to measure your shoe size
      </p>
    </div>
    <div className="shoe_measurment">
      <img style={{ height: '600px' }} src={measuringGuide} alt="shoe chart" />
      <img style={{ height: '600px' }} src={chart} alt="shoe chart" />
    </div>
    <div className="shoeMeasure">
      <div style={{ marginBottom: '1rem' }}>
        <input
          type="checkbox"
          name="shoeMeasured"
          onChange={handleChange('shoeMeasured')}
          required
          checked={shoeMeasured}
        />
        <label style={{ fontWeight: 900, marginLeft: '1rem' }}>
          Yes, I have Measured My Shoe Size
        </label>
      </div>

      <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
        <button
          type="button"
          onClick={shoeMeasured ? nextPage : undefined}
          className="btn  btn-success btn-lg btn-block"
          disabled={!shoeMeasured}
        >
          Let Me Fill The Form
        </button>
        <button
          type="button"
          onClick={prevPage}
          className="btn btn-warning btn-lg btn-block"
        >
          Go Back
        </button>
      </div>
    </div>
  </>
)

export default ShoeMeasurment
