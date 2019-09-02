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
  pledge,
  values,
  goToFinalpage
}) => (
  <div>
    <h4 style={{ textAlign: 'center' }}>Please Choose Your Color And Size</h4>
    <p style={{ textAlign: 'center' }}>
      <>
        Note: Click on shoe image to pick your color
        <br />
        <label>
          If you have more than one shoe. Pick one color then choose the size
          and add another color
        </label>
      </>
    </p>

    {shoes.map((shoe, index) => {
      return (
        <div key={index} className="delivery-items">
          <p style={{ textAlign: 'center' }}>{`Shoe #${index + 1}`}</p>
          <div className="color">
            {shoeColors.map((shoeColor, shoeColorIndex) => {
              return (
                <div key={shoeColorIndex} className="collections">
                  <p>{shoeColor.color}</p>
                  <img
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
    <h3 style={{ textAlign: 'center' }}>Preview</h3>
    <table className="table table-striped mb-3 preview-table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Shoe Name</th>
          <th scope="col">Size</th>
        </tr>
      </thead>
      <tbody>
        {shoes.map((shoePreview, previewIndex) => (
          <tr key={previewIndex}>
            <th scope="row">{previewIndex + 1}</th>
            <td>{shoePreview.color}</td>
            <td>{shoePreview.size}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <div
      className={`col-lg-3 col-md-4 col-sm-6 mb-3 another ${
        parseInt(pledge, 10) <= shoes.length ? 'none' : ''
      }`}
    />
    <div className="color-size-buttons">
      <button
        type="button"
        onClick={prevPage}
        className="btn   btn-warning btn-lg back"
      >
        Go Back
      </button>
      <button
        type="button"
        className="btn   btn-success btn-lg next"
        onClick={nextPage}
        disabled={!invalidShoes(values.shoes, pledge)}
      >
        Next Page
      </button>
      {values.validAddress && (
        <button
          type="button"
          onClick={goToFinalpage}
          className="btn   btn-primary btn-lg preview-page"
        >
          Go To Preview Page
        </button>
      )}
    </div>
  </div>
)

export default ColorAndSize
