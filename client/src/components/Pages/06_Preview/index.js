import React from 'react'
import './index.scss'

const Preview = ({ handleSubmit, prevPage }) => (
  <div>
    <h1>Preview Here</h1>
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

export default Preview
