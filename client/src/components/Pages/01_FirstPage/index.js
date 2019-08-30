import React from 'react'
import './index.scss'

import firstPageImage from '../../../assets/images/firstPageImage.png'
import { allCountries } from '../../../countries'
// import SurveyFormHeader from '../../SurveyFormHeader'

const FirstPage = ({ nextPage, handleChange, values }) => (
  <>
    {/* <SurveyFormHeader /> */}
    <div className="firstPage_container">
      <div className="rens_preview">
        <h3 className="preview_header">
          Rens | Waterproof Shoe Made From Recycled Coffee
        </h3>
        <div
          className="preview_para"
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <p>Created by</p>
          <strong>Rens Original</strong>
        </div>
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
        <h3>
          Hi,
          {values.name}
        </h3>
        <p>
          {`Thanks for supporting our campaign! Now it's time to confirm your exact
        order details`}
        </p>
        <label>Your Pledge</label>
        <p>{values.pledge}</p>
        <label>Your Pledge Level</label>
        <p>{values.pledge}</p>

        <div className="mb-3 firspage-country">
          <label htmlFor="address">Your shipping country</label>
          <select
            className="form-control country"
            name="country"
            onChange={e => handleChange('country')(e.target.value)}
          >
            <option defaultValue={values.country}>{values.country}</option>
            {allCountries.map((singleCountry, index) => (
              <option key={index} value={singleCountry}>
                {singleCountry}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button
            type="button"
            onClick={nextPage}
            className="btn btn-success btn-lg next-button"
          >
            Get Started!
          </button>
        </div>
      </div>
    </div>
  </>
)

export default FirstPage
