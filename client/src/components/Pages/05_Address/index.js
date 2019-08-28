import React from 'react'
import './index.scss'

const Address = ({
  nextPage,
  prevPage,
  handleChange,
  handleAddressChange,
  values,
  isTouched
}) => (
  <div>
    {console.log({ isTouched })}
    <div className="address">
      <div className="mb-3 name">
        <label htmlFor="address">Full Name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Full Name"
          onChange={handleChange('name')}
          defaultValue={values.name}
        />
      </div>
      <div className="mb-3 address1">
        <label htmlFor="address">Address 1</label>
        <input
          type="text"
          className="form-control"
          name="address1"
          placeholder="Address 1"
          onChange={handleAddressChange('address1')}
          defaultValue={values.address.address1}
        />
      </div>
      <div className="mb-3 address2">
        <label htmlFor="address">Address 2(Optional)</label>
        <input
          type="text"
          className="form-control"
          name="address2"
          placeholder="Address 2"
          onChange={handleAddressChange('address2')}
          defaultValue={values.address.address2}
        />
      </div>
      <div className="city-state">
        <div className="mb-3 city">
          <label htmlFor="address">City</label>
          <input
            type="text"
            className="form-control"
            name="city"
            placeholder="City"
            onChange={handleAddressChange('city')}
            defaultValue={values.address.city}
          />
        </div>
        <div className="mb-3 state">
          <label htmlFor="address">State</label>
          <input
            type="text"
            className="form-control"
            name="state"
            placeholder="State"
            onChange={handleAddressChange('state')}
            defaultValue={values.address.state}
          />
        </div>
      </div>
      <div className="country-code">
        <div className="mb-3 country">
          <label htmlFor="address">Country</label>
          <select
            className="form-control"
            name="country"
            onChange={handleChange('country')}
            defaultValue={values.country}
          >
            <option value="">Select a Country</option>
            <option>Nepal</option>
            <option>Usa</option>
            <option>Uk</option>
          </select>
        </div>
        <div className="mb-3 code">
          <label htmlFor="address">Zip Code</label>
          <input
            type="text"
            className="form-control"
            name="zipCode"
            placeholder="Zip Code"
            onChange={handleAddressChange('zipCode')}
            defaultValue={values.address.zipCode}
          />
        </div>
      </div>
      <div className="mb-3 phone">
        <label htmlFor="address">Phone</label>
        <input
          type="text"
          className="form-control"
          name="phone"
          placeholder="Phone"
          onChange={handleAddressChange('phone')}
          defaultValue={values.address.phone}
        />
      </div>
    </div>
    <div className="row next">
      <button
        type="button"
        onClick={nextPage}
        className="btn col-lg-3 col-md-4 col-sm-6 mr-1 btn-success btn-lg"
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
    </div>
  </div>
)

export default Address
