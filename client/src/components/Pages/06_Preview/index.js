import React, { Component } from 'react'
import './index.scss'

export class Preview extends Component {
  render() {
    const { backersInfo, handleSubmit, prevPage } = this.props
    console.log({ backersInfo })
    return (
      <div>
        {backersInfo.shoes.map((shoe, index) => (
          <ul key={index}>
            <li>
              {shoe.color} | {shoe.size}
            </li>
          </ul>
        ))}
        {
          <div>
            {backersInfo.address.address1}
            {backersInfo.address.address2}
            {backersInfo.address.city}
            {backersInfo.address.state}
            {backersInfo.address.zipCode}
            {backersInfo.address.country}
            {backersInfo.address.phone}
          </div>
        }
        <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
          <button
            type="button"
            onClick={handleSubmit}
            className="btn  btn-success btn-lg btn-block"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={prevPage}
            className="btn btn-warning btn-lg btn-block"
          >
            Previous
          </button>
        </div>
      </div>
    )
  }
}

export default Preview
