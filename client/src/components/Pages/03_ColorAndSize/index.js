import React from 'react'
import './index.scss'

import { shoeColors } from '../../../shoes'
import { sizingChartMale, sizingChartFemale } from '../../../sizingChart'
import MenChart from '../../SizingChart/Male'

const invalidShoes = (shoes, pledge) =>
  shoes.length === pledge &&
  shoes.every(shoe => shoe.color !== '' && shoe.size !== '')

const ColorAndSize = ({
  nextPage,
  prevPage,
  shoes,
  handleShoeChange,
  handleAddAnotherColor,
  pledge,
  values,
  goToFinalpage
}) => (
  <div>
    {console.log({ values })}
    <h4 style={{ textAlign: 'center' }}>Please Choose Your Color And Size</h4>
    <p style={{ textAlign: 'center' }}>
      Note: Click on shoe image to pick your color
    </p>
    {shoes.map((shoe, index) => {
      return (
        <div key={index} className="delivery-items">
          <div className="color">
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
          <hr />
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
    <div className="preview" style={{ textAlign: 'center' }}>
      <h4>Preview</h4>
      {shoes.map((shoePreview, previewIndex) => (
        <ul key={previewIndex}>
          {shoes.length > 1 && (
            <h4>
              Shoe
              {previewIndex + 1}
            </h4>
          )}
          <li>
            <strong>Shoe Name</strong>
            {shoePreview.color}
          </li>
          <li>
            <strong>Shoe Size</strong>
            {shoePreview.size}
          </li>
        </ul>
      ))}
    </div>
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

    <div className="row next">
      <button
        type="button"
        className="btn col-lg-3 col-md-4 col-sm-6 mr-1 btn-success btn-lg"
        onClick={nextPage}
        disabled={!invalidShoes(values.shoes, pledge)}
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
      {values.validAddress && (
        <button
          type="button"
          onClick={goToFinalpage}
          className="btn col-lg-3 col-md-4 col-sm-6 ml-1 btn-warning btn-lg"
        >
          Go To Preview Page
        </button>
      )}
    </div>
  </div>
)

export default ColorAndSize
