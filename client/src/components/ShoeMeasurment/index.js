import React from 'react'
import './index.scss'

const ShoeMeasurment = ({
  handleShoeMeasured,
  showHide,
  chart,
  measuringGuide,
  shoeMeasured,
  handleChange
}) => {
  return (
    <>
      <div style={{ textAlign: 'center' }} className="header">
        <h1>Measuring Shoe Size</h1>
        <p>
          Before filling out the survey form, please check these instructions
          how to measure your shoe size
        </p>
      </div>
      <div className={showHide ? 'shoe_measurment none' : 'shoe_measurment'}>
        <img
          style={{ height: '600px' }}
          src={measuringGuide}
          alt="shoe chart"
        />
        <img style={{ height: '600px' }} src={chart} alt="shoe chart" />
      </div>
      <div className="shoeMeasure">
        <div style={{ marginBottom: '1rem' }}>
          <input
            id="shoeMeasured"
            type="checkbox"
            name="shoeMeasured"
            checked={shoeMeasured}
            onChange={handleChange}
          />
          <label style={{ fontWeight: 900, marginLeft: '1rem' }}>
            Yes, I have Measured My Shoe Size
          </label>
        </div>
        <div className="col-md-6 mb-3">
          <button
            onClick={handleShoeMeasured}
            className="btn btn-primary btn-lg btn-block"
          >
            Let Me Fill The Form
          </button>
        </div>
      </div>
    </>
  )
}

export default ShoeMeasurment
