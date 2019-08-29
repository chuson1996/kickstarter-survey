import React from 'react'
import './index.scss'

const Address = ({
  nextPage,
  prevPage,
  handleChange,
  handleAddressChange,
  values,
  isTouched,
  handleFocus
  // handleSubmit
}) => (
  <div>
    {console.log({ values })}
    <div className="address">
      <div className="mb-3 name">
        <label htmlFor="address">Full Name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Full Name"
          onChange={e => handleChange('name')(e.target.value)}
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
          onChange={e => handleAddressChange('address1')(e.target.value)}
          defaultValue={values.address.address1}
          // validate={validate('address1')}
          onBlur={handleFocus('address1')}
        />
      </div>
      <div className="mb-3 address2">
        <label htmlFor="address">Address 2(Optional)</label>
        <input
          type="text"
          className="form-control"
          name="address2"
          placeholder="Address 2"
          onChange={e => handleAddressChange('address2')(e.target.value)}
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
            onChange={e => handleAddressChange('city')(e.target.value)}
            defaultValue={values.address.city}
            onBlur={handleFocus('city')}
          />
        </div>
        <div className="mb-3 state">
          <label htmlFor="address">State</label>
          <input
            type="text"
            className="form-control"
            name="state"
            placeholder="State"
            onChange={e => handleAddressChange('state')(e.target.value)}
            defaultValue={values.address.state}
            onBlur={handleFocus('state')}
          />
        </div>
      </div>
      <div className="country-code">
        <div className="mb-3 country">
          <label htmlFor="address">Country</label>
          <select
            className="form-control"
            name="country"
            onChange={e => handleChange('country')(e.target.value)}
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
            onChange={e => handleAddressChange('zipCode')(e.target.value)}
            defaultValue={values.address.zipCode}
            onBlur={handleFocus('zipCode')}
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
          onChange={e => handleAddressChange('phone')(e.target.value)}
          defaultValue={values.address.phone}
          onBlur={handleFocus('phone')}
        />
      </div>
    </div>
    <div className="row next">
      <button
        type="submit"
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
