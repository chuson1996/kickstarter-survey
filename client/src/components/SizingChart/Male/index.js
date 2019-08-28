import React from 'react'
import Female from '../Female'

const MenChart = ({
  handleShoeChange,
  shoe,
  sizingChartMale,
  sizingChartFemale
}) => {
  return (
    <div className="size">
      <h4>Gender</h4>
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
            <h4>Which Size US, Euro or Uk</h4>
            <select
              onChange={handleShoeChange}
              name="whichSize"
              className="form-control mb-5 whichSize"
              defaultValue={shoe.whichSize}
            >
              <option>Which Size Do You Prefer</option>
              <option value="us">US</option>
              <option value="euro">EURO</option>
              <option value="uk">UK</option>
            </select>
          </>
        )}

        {shoe.gender === 'male' && shoe.whichSize === 'us' && (
          <>
            <h4>Select Your Size</h4>
            <select
              onChange={handleShoeChange}
              name="size"
              className="form-control mb-5 whichSize"
              defaultValue={shoe.size}
            >
              <option>Your Size Please</option>
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
            <h4>Select Your Size</h4>
            <select
              onChange={handleShoeChange}
              name="size"
              className="form-control mb-5 whichSize"
              defaultValue={shoe.size}
            >
              <option>Your Size Please</option>
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
            <h4>Select Your Size</h4>
            <select
              onChange={handleShoeChange}
              name="size"
              className="form-control mb-5 whichSize"
              defaultValue={shoe.size}
            >
              <option>Your Size Please</option>
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
