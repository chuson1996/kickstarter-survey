import React from 'react'
import './index.scss'

import { shoeColors } from '../../../shoes'
import { sizingChartMale, sizingChartFemale } from '../../../sizingChart'
import MenChart from '../../SizingChart/Male'

const ColorAndSize = ({
  nextPage,
  prevPage,
  shoes,
  handleShoeChange,
  handleAddAnotherColor,
  pledge
}) => (
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
                    className={shoe.color === shoeColor.color ? 'active' : ''}
                    onClick={handleShoeChange(index, shoeColor.color)}
                  />
                </div>
              )
            })}
          </div>
          <MenChart
            sizingChartMale={sizingChartMale}
            sizingChartFemale={sizingChartFemale}
            handleShoeChange={handleShoeChange(index)}
            shoe={shoe}
            size="size"
            whichSize="whichSize"
            gender="gender"
          />
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

export default ColorAndSize
