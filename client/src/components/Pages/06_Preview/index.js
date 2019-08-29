import React from 'react'
import './index.scss'

const Preview = ({
  handleSubmit,
  prevPage,
  previewData,
  handleEditShoeColorAndSize,
  handleEditAddress
}) => (
  <div className="preview" style={{ textAlign: 'center' }}>
    <h1>Preview Here</h1>
    <div className="preview-shoe">
      <h4>Shoes</h4>
      {previewData.shoes.map((shoePreview, previewIndex) => (
        <ul key={previewIndex}>
          {previewData.shoes.length > 1 && (
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

      <button
        type="button"
        className="btn col-lg-3 col-md-4 col-sm-6 mr-1 btn-primary btn-lg"
        onClick={handleEditShoeColorAndSize}
      >
        Edit Shoe Color And Size
      </button>
    </div>
    <div className="preview-address">
      <h4>Addres</h4>
      <li>{previewData.address.address1}</li>
      <li>{previewData.address.city}</li>
      <li>{previewData.address.state}</li>
      <li>{previewData.address.zipCode}</li>
      <li>{previewData.address.phone}</li>
      <button
        type="button"
        className="btn col-lg-3 col-md-4 col-sm-6 mb-3 btn-primary btn-lg"
        onClick={handleEditAddress}
      >
        Edit Address
      </button>
    </div>
    <div className="row next">
      <button
        type="button"
        onClick={handleSubmit}
        className="btn col-lg-3 col-md-4 col-sm-6 mr-1 btn-success btn-lg"
      >
        Submit
      </button>
      <button
        type="button"
        onClick={prevPage}
        className="btn col-lg-3 col-md-4 col-sm-6 mr-1 btn-warning btn-lg"
      >
        Previous
      </button>
    </div>
  </div>
)

export default Preview
