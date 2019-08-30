import React from 'react'
import './index.scss'

const Female = ({ handleShoeChange, shoe, sizingChartFemale }) => {
  return (
    <div className="us-euro-uk">
      {shoe.gender === 'female' && shoe.whichSize === 'us' && (
        <>
          <p>Select Your Size</p>
          <select
            onChange={handleShoeChange}
            name="size"
            className="form-control mb-5 whichSize"
            defaultValue={shoe.size}
          >
            <option>Your Size Please</option>
            {sizingChartFemale.us.map((us, usIndex) => (
              <option value={`${us} Us Women`} key={usIndex}>
                {us}
              </option>
            ))}
          </select>
        </>
      )}
      {shoe.gender === 'female' && shoe.whichSize === 'euro' && (
        <>
          <p>Select Your Size</p>
          <select
            onChange={handleShoeChange}
            name="size"
            className="form-control mb-5 whichSize"
            defaultValue={shoe.size}
          >
            <option>Your Size Please</option>
            {sizingChartFemale.euro.map((euro, euroIndex) => (
              <option value={`${euro} Euro Women`} key={euroIndex}>
                {euro}
              </option>
            ))}
          </select>
        </>
      )}
      {shoe.gender === 'female' && shoe.whichSize === 'uk' && (
        <>
          <p>Select Your Size</p>
          <select
            onChange={handleShoeChange}
            name="size"
            className="form-control mb-5 whichSize"
            defaultValue={shoe.size}
          >
            <option>Your Size Please</option>
            {sizingChartFemale.uk.map((uk, ukIndex) => (
              <option value={`${uk} Uk Women`} key={ukIndex}>
                {uk}
              </option>
            ))}
          </select>
        </>
      )}
    </div>
  )
}

export default Female
