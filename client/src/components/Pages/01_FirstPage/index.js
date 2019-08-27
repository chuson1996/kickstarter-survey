import React, { Component } from 'react'
import './index.scss'

import firstPageImage from '../../../assets/images/firstPageImage.png'

class FirstPage extends Component {
  render() {
    const { nextPage, handleChange, values } = this.props
    return (
      <div className="firstPage_container">
        <div className="rens_preview">
          <h3 className="preview_header">
            Rens | Waterproof Shoe Made From Recycled Coffee
          </h3>
          <p className="preview_para">
            Created by <strong>Rens Original</strong>
          </p>
          <img src={firstPageImage} alt="coffee shoes" />
          <ul className="funds">
            <div className="funds_list">
              <label>Funded On</label>
              <li>08/15/2019</li>
            </div>

            <div className="funds_list">
              <label>Raised Total</label>
              <li>$550,316.00</li>
            </div>

            <div className="funds_list">
              <label>Backers</label>
              <li>5,034</li>
            </div>
          </ul>
        </div>
        <div className="hello_user">
          <h3>Hi {values.name}, </h3>
          <p>
            Thanks for supporting our campaign! Now it's time to confirm your
            exact order details
          </p>
          <label>Your Pledge</label>
          <p>{values.pledge}</p>
          <label>Your Pledge Level</label>
          <p>{values.pledge}</p>

          <div className="mb-3">
            <label htmlFor="address">Country</label>
            <select
              className="form-control country"
              name="country"
              onChange={handleChange('country')}
              defaultValue={values.country}
            >
              <option defaultValue={values.country}>{values.country}</option>
              <option value="Nepal">Nepal</option>
              <option value="Usa">Usa</option>
              <option value="Uk">Uk</option>
            </select>
          </div>
          <div className="col-md-6  mb-3 m-auto">
            <button
              type="button"
              onClick={nextPage}
              className="btn btn-success btn-lg btn-block "
            >
              Get Started!
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FirstPage
