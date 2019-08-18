import React from 'react'

const ShoeMeasurment = ({
  handleShoeMeasured,
  show_hide,
  chart,
  measuring_guide,
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
      <div className={show_hide ? 'shoe_measurment none' : 'shoe_measurment'}>
        <img
          style={{ height: '600px' }}
          src={measuring_guide}
          alt="shoe chart"
        />
        <img style={{ height: '600px' }} src={chart} alt="shoe chart" />
      </div>
      <div className="sameAddress">
              <input
                id="shoeMeasured"
                type="checkbox"
                name="shoeMeasured"
                checked={shoeMeasured}
                onChange={handleChange}
              />
              <label> Yes, I have Measured My Shoe Size</label>
              <button onClick={handleShoeMeasured}>
                Let Me Fill The Form
              </button>
            </div>
      {/* <button onClick={hideShoeMeasuringGuide}>
        {show_hide ? 'Show Me How To Measure' : 'I already measured the size'}
      </button> */}
    </>
  )
}

export default ShoeMeasurment
