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
      <h1>Measuring Shoe Size</h1>
      <p>
        Before filling out the survey form, please check these instructions how
        to measure your shoe size
      </p>
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
        <button onClick={handleShoeMeasured}>Let Me Fill The Form</button>
      </div>
    </>
  )
}

export default ShoeMeasurment
