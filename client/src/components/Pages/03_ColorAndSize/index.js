import React, { Component } from 'react'
import './index.scss'

import { shoeColors } from '../../../shoes'
import { sizingChartMen } from '../../../sizingChart'

class ColorAndSize extends Component {
  render() {
    const {
      nextPage,
      prevPage,
      shoes,
      handleShoeChange,
      handleAddAnotherColor,
      values,
      pledge
    } = this.props
    console.log({ values })
    return (
      <div>
        {shoes.map((shoe, index) => {
          return (
            <div key={index} className="delivery-items">
              <h3 style={{ textAlign: 'center' }}>
                Pick Your Color and Size
                {` #${index + 1}`}
              </h3>
              <div className="color-size">
                {shoeColors.map((shoeColor, shoeColorIndex) => {
                  return (
                    <div key={shoeColorIndex} className="collections">
                      <p>{shoeColor.color}</p>
                      <img
                        style={{
                          cursor: 'pointer',
                          height: '200px'
                        }}
                        src={shoeColor.src}
                        alt={shoeColor.color}
                        value={shoe.color}
                        name="color"
                        className={
                          shoe.color === shoeColor.color ? 'active' : ''
                        }
                        onClick={handleShoeChange(index, shoeColor.color)}
                      />
                    </div>
                  )
                })}
              </div>
              <div className="size">
                <h4>Gender</h4>
                <select
                  onChange={handleShoeChange(index, 'gender')}
                  name="gender"
                  className="form-control mb-5 gender"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>

                <div className="us-euro-uk">
                  {shoe.gender === ('male' || 'female') && (
                    <>
                      <h4>Which Size US, Euro or Uk</h4>
                      <select
                        onChange={handleShoeChange(index, 'whichSize')}
                        name="whichSize"
                        className="form-control mb-5 whichSize"
                      >
                        <option>Which Size Do You Prefer</option>
                        <option value="us">US</option>
                        <option value="euro">EURO</option>
                        <option value="uk">UK</option>
                      </select>
                    </>
                  )}

                  {shoe.gender === 'male' && shoe.whichSize === 'us' && (
                    <>
                      <h4>Select Your Size</h4>
                      <select
                        onChange={handleShoeChange(index, 'size')}
                        name="size"
                        className={`form-control mb-5 whichSize`}
                      >
                        <option>Your Size Please</option>
                        {sizingChartMen.us.map((us, usIndex) => (
                          <option value={`${us} Us Men`} key={usIndex}>
                            {us}
                          </option>
                        ))}
                      </select>
                    </>
                  )}
                  {shoe.gender === 'male' && shoe.whichSize === 'euro' && (
                    <>
                      <h4>Select Your Size</h4>
                      <select
                        onChange={handleShoeChange(index, 'size')}
                        name="size"
                        className="form-control mb-5 whichSize"
                      >
                        <option>Your Size Please</option>
                        {sizingChartMen.euro.map((euro, euroIndex) => (
                          <option value={`${euro} Euro Men`} key={euroIndex}>
                            {euro}
                          </option>
                        ))}
                      </select>
                    </>
                  )}
                  {shoe.gender === 'male' && shoe.whichSize === 'uk' && (
                    <>
                      <h4>Select Your Size</h4>
                      <select
                        onChange={handleShoeChange(index, 'size')}
                        name="size"
                        className="form-control mb-5 whichSize"
                      >
                        <option>Your Size Please</option>
                        {sizingChartMen.uk.map((uk, ukIndex) => (
                          <option value={`${uk} Uk Men`} key={ukIndex}>
                            {uk}
                          </option>
                        ))}
                      </select>
                    </>
                  )}
                </div>
              </div>
            </div>
          )
        })}

        <div
          className={`col-lg-3 col-md-4 col-sm-6 mb-3 another ${
            parseInt(pledge, 10) <= shoes.length ? 'none' : ''
          }`}
        >
          <button
            type="button"
            className="btn btn-primary btn-lg btn-block "
            onClick={handleAddAnotherColor}
          >
            Add Another Color
          </button>
        </div>

        <div
          className={`row next ${
            parseInt(pledge, 10) !== shoes.length ? 'none' : ''
          }`}
        >
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

export default ColorAndSize
