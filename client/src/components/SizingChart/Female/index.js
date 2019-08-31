import React from 'react'
import './index.scss'

const Female = ({ handleShoeChange, shoe, sizingChartFemale }) => {
  return (
    <div className="us-euro-uk">
      {shoe.gender === 'female' && shoe.whichSize === 'us' && (
        <>
          <label>Select Your Size</label>
          <select
            onChange={handleShoeChange}
            name="size"
            className="form-control mb-5 whichSize"
            defaultValue={shoe.size}
          >
            <option>Select Your Size</option>
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
          <label>Select Your Size</label>
          <select
            onChange={handleShoeChange}
            name="size"
            className="form-control mb-5 whichSize"
            defaultValue={shoe.size}
          >
            <option>Select Your Size</option>
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
          <label>Select Your Size</label>
          <select
            onChange={handleShoeChange}
            name="size"
            className="form-control mb-5 whichSize"
            defaultValue={shoe.size}
          >
            <option>Select Your Size</option>
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
