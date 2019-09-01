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
        className="btn btn-primary btn-lg edit-shoe"
        onClick={handleEditShoeColorAndSize}
      >
        Edit Shoe
      </button>
    </div>

    <div className="card shipping-address">
      <div className="card-header">Shipping Address</div>
      <div className="card-body">
        <h5 className="card-title">{values.name}</h5>
        <p className="card-text">{previewData.address.address1}</p>
        <p className="card-text">{previewData.address.address2}</p>
        <p className="card-text">{previewData.address.city}</p>
        <p className="card-text">{previewData.address.state}</p>
        <p className="card-text">{previewData.country}</p>
        <p className="card-text">{previewData.address.zipCode}</p>
        <p className="card-text">{previewData.address.phone}</p>
        <button
          type="button"
          className="btn  btn-primary btn-lg edit-address"
          onClick={handleEditAddress}
        >
          Edit Address
        </button>
      </div>
    </div>

    {/* <div className="preview-address">
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
    </div> */}
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
