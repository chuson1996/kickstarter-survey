import React from 'react'
import './index.scss'

const Preview = ({
  handleSubmit,
  previewData,
  handleEditShoeColorAndSize,
  handleEditAddress,
  values
}) => (
  <div className="preview" style={{ textAlign: 'center' }}>
    <h3 style={{ textAlign: 'center' }}>Preview</h3>

    <div className="card order-item">
      <div className="card-header">Ordered Items</div>

      <table className="table table-striped mb-3 order-table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Shoe Name</th>
            <th scope="col">Size</th>
          </tr>
        </thead>
        <tbody>
          {previewData.shoes.map((shoePreview, previewIndex) => (
            <tr key={previewIndex}>
              <th scope="row">{previewIndex + 1}</th>
              <td>{shoePreview.color}</td>
              <td>{shoePreview.size}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        type="button"
        className="btn btn-primary btn-md edit-shoe"
        onClick={handleEditShoeColorAndSize}
      >
        Edit Shoe
      </button>
    </div>

    <div className="card shipping-address">
      <div className="card-header">Shipping Address</div>
      <div className="card-body">
        <h5 className="card-title">{values.name}</h5>
        <div className="card-text">
          <label>Address 1</label>
          <p>{previewData.address.address1}</p>
        </div>
        {previewData.address.address2 !== '' && (
          <div className="card-text">
            <label>Address 2</label>
            <p>{previewData.address.address2}</p>
          </div>
        )}
        <div className="card-text">
          <label>City</label>
          <p>{previewData.address.city}</p>
        </div>
        {previewData.address.state !== '' && (
          <div className="card-text">
            <label>State</label>
            <p>{previewData.address.state}</p>
          </div>
        )}
        <div className="card-text">
          <label>Country</label>
          <p>{previewData.country}</p>
        </div>
        <div className="card-text">
          <label>Zip Code</label>
          <p>{previewData.address.zipCode}</p>
        </div>
        <div className="card-text">
          <label>Phone</label>
          <p>{previewData.address.phone}</p>
        </div>
        <button
          type="button"
          className="btn  btn-primary btn-md edit-address"
          onClick={handleEditAddress}
        >
          Edit Address
        </button>
      </div>
    </div>

    <div className="row next">
      <button
        type="button"
        onClick={handleSubmit}
        className="btn col-lg-3 col-md-4 col-sm-6 mr-1 btn-success btn-lg"
      >
        Submit
      </button>

      <div className={values.errors.length <= 0 ? 'none' : 'invalid'}>
        {values.errors.length <= 0 ? null : values.errors}
      </div>
    </div>
  </div>
)

export default Preview
