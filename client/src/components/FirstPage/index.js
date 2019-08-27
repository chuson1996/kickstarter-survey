import React, { Component } from 'react'
import './index.scss'
import firstPageImage from '../../assets/firstpage_image.png'

const FirstPage = ({ name, pledge }) => {
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
        <h3>Hi {name}, </h3>
        <p>
          Thanks for supporting our campaign! Now it's time to confirm your
          exact order details
        </p>
        <label>Your Pledge</label>
        <p>{pledge}</p>
        <label>Your Pledge Level</label>
        <p>{pledge}</p>

        <label>Select your country for shipping</label>
        <select className="shipping_country">
          <option>country</option>
        </select>
        <div className="col-md-6 mb-3 m-auto">
          <button type="button" className="btn btn-success btn-lg btn-block ">
            Get Started!
          </button>
        </div>
      </div>
    </div>
  )
}

export default FirstPage
