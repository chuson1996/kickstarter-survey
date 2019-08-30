import React from 'react'
import './index.scss'
import { allCountries } from '../../../countries'

// errors = [{value: '', msg:'some error message', param: 'address.inputname'}]
// gets the array of errors from values.state and name comes from the name of input
// we filter every error object with the name of the input, and show the error msg to the
// same input which input has the error
const errorMessages = (errors, name) => {
  const msg = errors.filter(error => error.param === `address.${name}`)
  return msg.length === 0 ? null : msg[0].msg
}
const errorName = (errors, name) => {
  const msg = errors.filter(error => error.param === `${name}`)
  return msg.length === 0 ? null : msg[0].msg
}

const Address = ({
  nextPage,
  prevPage,
  handleChange,
  handleAddressChange,
  values
}) => (
  <div>
    <div className="address">
      <div className="mb-3 required name">
        <label htmlFor="address">Full Name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Full Name Of Receipent"
          onChange={e => handleChange('name')(e.target.value)}
          defaultValue={values.name}
        />
        <div className={values.errors.length <= 0 ? 'none' : 'invalid'}>
          {errorName(values.errors, 'name')}
        </div>
      </div>
      <div className="mb-3 required address1">
        <label htmlFor="address">Address 1</label>
        <input
          type="text"
          className="form-control"
          name="address1"
          placeholder="Street Address, PO Box"
          onChange={e => handleAddressChange('address1')(e.target.value)}
          defaultValue={values.address.address1}
        />
        {/* checking for error messages, values.errors comes from state
          where initally the errors messages are empty. but when the user submits the invalid data
          then the backend send the error message and the errors value in the state are filled with
          error messages.
          So, when the values.errors length is 0 don't show the error message
        */}
        <div className={values.errors.length <= 0 ? 'none' : 'invalid'}>
          {errorMessages(values.errors, 'address1')}
        </div>
      </div>
      <div className="mb-3 required address2">
        <label htmlFor="address">Address 2</label>
        <input
          type="text"
          className="form-control"
          name="address2"
          placeholder="Apartment, Suit, Unit, Building, Floor etc"
          onChange={e => handleAddressChange('address2')(e.target.value)}
          defaultValue={values.address.address2}
        />
        <div className={values.errors.length <= 0 ? 'none' : 'invalid'}>
          {errorMessages(values.errors, 'address2')}
        </div>
      </div>
      <div className="city-state">
        <div className="mb-3 required city">
          <label htmlFor="address">City</label>
          <input
            type="text"
            className="form-control"
            name="city"
            placeholder="City"
            onChange={e => handleAddressChange('city')(e.target.value)}
            defaultValue={values.address.city}
          />
          <div className={values.errors.length <= 0 ? 'none' : 'invalid'}>
            {errorMessages(values.errors, 'city')}
          </div>
        </div>
        <div className="mb-3 required state">
          <label htmlFor="address">State/Province</label>
          <input
            type="text"
            className="form-control"
            name="state"
            placeholder="State / Province"
            onChange={e => handleAddressChange('state')(e.target.value)}
            defaultValue={values.address.state}
          />

          <div className={values.errors.length <= 0 ? 'none' : 'invalid'}>
            {errorMessages(values.errors, 'state')}
          </div>
        </div>
      </div>
      <div className="country-code">
        <div className="mb-3 required country">
          <label htmlFor="address">Country</label>
          <select
            className="form-control"
            name="country"
            onChange={e => handleChange('country')(e.target.value)}
            // defaultValue={values.country}
          >
            <option defaultValue={values.country}>{values.country}</option>
            {allCountries.map((singleCountry, countryIndex) => (
              <option key={countryIndex} value={singleCountry}>
                {singleCountry}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3 required code">
          <label htmlFor="address">Zip / Postal Code</label>
          <input
            type="text"
            className="form-control"
            name="zipCode"
            placeholder="Zip / PostalCode"
            onChange={e => handleAddressChange('zipCode')(e.target.value)}
            defaultValue={values.address.zipCode}
          />
          <div className={values.errors.length <= 0 ? 'none' : 'invalid'}>
            {errorMessages(values.errors, 'zipCode')}
          </div>
        </div>
      </div>
      <div className="mb-3 required phone">
        <label htmlFor="address">Phone</label>
        <input
          type="text"
          className="form-control"
          name="phone"
          placeholder="Phone Number"
          onChange={e => handleAddressChange('phone')(e.target.value)}
          defaultValue={values.address.phone}
        />
        <div className={values.errors.length <= 0 ? 'none' : 'invalid'}>
          {errorMessages(values.errors, 'phone')}
        </div>
        <p className="phone-helper">Phone Format: +358458982023</p>
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
