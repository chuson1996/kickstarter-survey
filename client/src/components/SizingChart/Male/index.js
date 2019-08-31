import React from 'react'
import Female from '../Female'
import './index.scss'

const MenChart = ({
  handleShoeChange,
  shoe,
  sizingChartMale,
  sizingChartFemale
}) => {
  return (
    <div className="size">
      <label style={{ textAlign: 'left' }}>Gender</label>
      <select
        onChange={handleShoeChange}
        name="gender"
        className="form-control mb-5 gender"
        defaultValue={shoe.gender}
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <div className="us-euro-uk">
        {(shoe.gender === 'male' || shoe.gender === 'female') && (
          <>
            <label style={{ textAlign: 'left' }}>
              Size in US, EURO or UK ?
            </label>
            <select
              onChange={handleShoeChange}
              name="whichSize"
              className="form-control mb-5 whichSize"
              defaultValue={shoe.whichSize}
            >
              <option value="">Size in US, EURO or UK ?</option>
              <option value="us">US</option>
              <option value="euro">EURO</option>
              <option value="uk">UK</option>
            </select>
          </>
        )}

        {shoe.gender === 'male' && shoe.whichSize === 'us' && (
          <>
            <label style={{ textAlign: 'left' }}>Select Your Size</label>
            <select
              onChange={handleShoeChange}
              name="size"
              className="form-control mb-5 whichSize"
              defaultValue={shoe.size}
            >
              <option value="">Select Your Size</option>
              {sizingChartMale.us.map((us, usIndex) => (
                <option value={`${us} Us Men`} key={usIndex}>
                  {us}
                </option>
              ))}
            </select>
          </>
        )}
        {shoe.gender === 'male' && shoe.whichSize === 'euro' && (
          <>
            <label style={{ textAlign: 'left' }}>Select Your Size</label>
            <select
              onChange={handleShoeChange}
              name="size"
              className="form-control mb-5 whichSize"
              defaultValue={shoe.size}
            >
              <option value="">Select Your Size</option>
              {sizingChartMale.euro.map((euro, euroIndex) => (
                <option value={`${euro} Euro Men`} key={euroIndex}>
                  {euro}
                </option>
              ))}
            </select>
          </>
        )}
        {shoe.gender === 'male' && shoe.whichSize === 'uk' && (
          <>
            <label style={{ textAlign: 'left' }}>Select Your Size</label>
            <select
              onChange={handleShoeChange}
              name="size"
              className="form-control mb-5 whichSize"
              defaultValue={shoe.size}
            >
              <option>Select Your Size</option>
              {sizingChartMale.uk.map((uk, ukIndex) => (
                <option value={`${uk} Uk Men`} key={ukIndex}>
                  {uk}
                </option>
              ))}
            </select>
          </>
        )}
        <Female
          sizingChartFemale={sizingChartFemale}
          shoe={shoe}
          handleShoeChange={handleShoeChange}
        />
      </div>
    </div>
  )
}

export default MenChart
